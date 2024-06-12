import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <h2 className="text-4xl font-bold">OPSS!!! Error page</h2>
      <p className="text-center text-[10rem] text-red-600">
        {error.statusText || error.data}
      </p>
      <br />
      <Link to="/">
        <button className="font-bold px-6 py-3 text-white bg-red-600 text-3xl rounded-full">Please go back to home page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
