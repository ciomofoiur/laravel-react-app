import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import axiosClient from "../axios-client";

export default function DefaultLayout(): JSX.Element {
  const { user, token, setUser, setToken } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (e: React.MouseEvent) => {
    e.preventDefault();

    axiosClient.post("http://localhost:8000/api/logout").then(() => {
      setUser("");
      setToken("");
    });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axiosClient.get("http://localhost:8000/api/user").then(({ data }) => {
      setUser(data.name);
    });
  }, []);

  return (
    <div id="defaultLayout" className="min-h-screen flex">
      <aside className="w-64 bg-[#2E5DAB] text-white h-screen">
        <div className="p-6">
          <Link to="/dashboard" className="text-2xl font-semibold mb-4">
            Dashboard
          </Link>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-6">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-semibold text-gray-700">
              Welcome, {user}! &nbsp;
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              />
            </div>
            <div className="flex space-x-4 items-center">
              <button
                onClick={onLogout}
                className="flex w-full justify-center rounded-md bg-[#2E5DAB] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#183650]"
              >
                Logout
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
