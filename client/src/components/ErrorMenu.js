import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { useRouteError, Link } from "react-router-dom";
const ErrorMenu = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold uppercase my-4 flex gap-2 items-center">
        <ExclamationTriangleIcon className="w-10 h-10 text-orange-500" /> Oops!!
      </h1>
      <h1 className="text-xl">
        {err.status} Page {err.statusText}
      </h1>
      <button className="bg-orange-400 text-white p-2 px-4 rounded-md flex items-center gap-2 m-5">
        <Link to="/">Back To Home Or Use Desktop Mode In Mobile</Link>
      </button>
    </div>
  );
};
export default ErrorMenu;
