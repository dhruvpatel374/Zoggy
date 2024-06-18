import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MapPinIcon,
  HomeIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
const Header = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <nav className="flex justify-between px-8 items-center py-6 ">
      <section className="flex items-center gap-4">
        <a className="text-3xl font-mono">Zoggy</a>
        <div className="hidden lg:block">
          <p className="text-sm flex items-center gap-1 ">
            <MapPinIcon className="w-4 h-4 text-gray-700" />
            Ahmedabad, Gujarat
          </p>
        </div>
      </section>
      <div className="hidden lg:block">
        <ul className=" flex gap-4 items-center text-zinc-700 ">
          <li>
            <a
              href="#"
              className="p-2 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <HomeIcon className="w-4 h-4 text-gray-700" /> Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <BuildingOfficeIcon className="w-4 h-4 text-gray-700" /> About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <PhoneIcon className="w-4 h-4 text-gray-700" /> Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <ShoppingBagIcon className="w-4 h-4 text-gray-700" /> Cart
            </a>
          </li>
          <a
            href="#"
            className="bg-orange-400 text-white p-2 px-4 rounded-md flex items-center gap-2"
          >
            Login
          </a>
        </ul>
      </div>

      <Bars3Icon
        onClick={() => setMenu(true)}
        className="w-8 h-8 cursor-pointer lg:hidden"
      />
      {/* menu for mobile */}
      <div
        className={clsx(
          "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 left-0 -translate-x-full transition-all",
          isSideMenuOpen && "translate-x-0"
        )}
      >
        <section className="text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 flex w-56 items-center">
          <XMarkIcon
            onClick={() => setMenu(false)}
            className="mt-0 mb-2 w-8 h-8 flex 
            cursor-pointer"
          />
          <ul className="  gap-4  text-zinc-700 ">
            <li>
              <a
                href="#"
                className="p-4 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <HomeIcon className="w-4 h-4 text-gray-700" /> Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-4 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <BuildingOfficeIcon className="w-4 h-4 text-gray-700" /> About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-4 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <PhoneIcon className="w-4 h-4 text-gray-700" /> Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-4 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <ShoppingBagIcon className="w-4 h-4 text-gray-700" /> Cart
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="bg-orange-400 text-white p-2 px-8 rounded-md flex items-center gap-2"
          >
            Login
          </a>
          <p className="text-sm flex items-center gap-1 ">
            <MapPinIcon className="w-4 h-4 text-gray-700" />
            Ahmedabad, Gujarat
          </p>
        </section>
      </div>
    </nav>
  );
};

export default Header;
