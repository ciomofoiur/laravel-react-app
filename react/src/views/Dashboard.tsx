export default function Dashboard(): JSX.Element {
  return (
    <>
      <div className="container mx-auto">
        <div className="m-10">
          <img
            src="https://img.freepik.com/free-photo/closeup-business-man-offering-hand-handshake_1262-17295.jpg?t=st=1722678380~exp=1722681980~hmac=d1328797dc66c3d383bc690bc42f39b51f9983e450f46625e7b6588c23ec03d5&w=1060"
            alt="welcome photo"
            className="object-scale-down max-w-2xl drop-shadow-md rounded-md m-auto"
          />
        </div>
        <p className="text-2xl font-semibold mb-4 p-6 text-center">
          Let's collaborate!
        </p>
      </div>
    </>
  );
}
