import { WifiIcon } from "@heroicons/react/24/solid";
const OfflineError = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold uppercase my-4 flex gap-2 items-center">
        <WifiIcon className="w-10 h-10 text-orange-500" /> Oops!!
      </h1>
      <div className="text-center">
        <h1 className="text-xl">Looks like you're offline!</h1>
        <h1 className="text-xl">Please check your internet connection</h1>
      </div>
    </div>
  );
};
export default OfflineError;
