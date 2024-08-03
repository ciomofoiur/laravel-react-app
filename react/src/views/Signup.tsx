import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useAuth } from "../contexts/AuthContext";

export default function Signup(): JSX.Element {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState(null);

  const { setUser, setToken } = useAuth();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      password_confirmation: passwordConfirmationRef.current?.value,
    };

    axiosClient
      .post("http://localhost:8000/api/signup", payload)
      .then(({ data }) => {
        console.log(data);

        setUser(data.user.name);
        setToken(data.token);
      })
      .catch((err) => {
        console.log(err);
        const response = err.response;

        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://brgtranseurope.com/wp-content/uploads/2022/10/cropped-logo.png"
          alt="Your Company"
        />
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up for free
        </h1>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="" onSubmit={onSubmit} className="space-y-6">
          {errors && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 font-semibold rounded"
              role="alert"
            >
              {Object.keys(errors).map((key) => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          )}
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2E5DAB] sm:text-sm sm:leading-6"
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email Address"
            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2E5DAB] sm:text-sm sm:leading-6"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2E5DAB] sm:text-sm sm:leading-6"
          />
          <input
            ref={passwordConfirmationRef}
            type="password"
            placeholder="Password Confirmation"
            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2E5DAB] sm:text-sm sm:leading-6"
          />
          <button className="flex w-full justify-center rounded-md bg-[#2E5DAB] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#183650] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
            Sign up
          </button>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already Registered?&nbsp;
            <Link
              to="/login"
              className="font-semibold leading-6 text-[#2E5DAB] hover:text-[#183650]"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
