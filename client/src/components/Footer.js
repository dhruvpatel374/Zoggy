import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { City } from "../utils/constant";
import clsx from "clsx";
import useRest from "../utils/useRest";
const Footer = () => {
  const [isCityOpen, setCity] = useState(true);
  // bg-[#E23744]

  return (
    <div className=" bg-orange-400 text-white ">
      <div className="grid  md:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-8 mt-5 pt-5 pl-10">
        <ul className="lg:pl-8">
          <li className="font-extrabold tracking-wider text-xl p-2 ">Zoggy</li>
          <li className="p-2 text-sm">© 2024 Dhruv Patel</li>
        </ul>
        <ul>
          <li className="font-bold  text-lg p-2">Company</li>
          <li className="font-light cursor-pointer text-sm p-2">About</li>
          <li className="font-light cursor-pointer text-sm p-2">Careers</li>
          <li className="font-light cursor-pointer text-sm p-2 ">Team</li>
          <li className="font-light cursor-pointer text-sm p-2 ">Zoggy One</li>
          <li className="font-light cursor-pointer text-sm p-2 ">
            Zoggy Instamart
          </li>
          <li className="font-light cursor-pointer text-sm p-2">Zoggy Genie</li>
        </ul>
        <ul>
          <li className="font-bold  text-lg p-2">Contact us</li>
          <li className="font-light cursor-pointer text-sm p-2">
            Help & Support
          </li>
          <li className="font-light cursor-pointer text-sm p-2">
            Partner with us
          </li>
          <li className="font-light cursor-pointer text-sm p-2 ">
            Ride with us
          </li>
          <li className="font-bold  text-lg mt-6 p-2">Legal</li>
          <li className="font-light cursor-pointer text-sm p-2">
            Terms & Conditions
          </li>
          <li className="font-light cursor-pointer text-sm p-2">
            Cookie Policy
          </li>
          <li className="font-light cursor-pointer text-sm p-2 ">
            Privacy Policy
          </li>
        </ul>
        <ul>
          <li className="font-bold  text-lg p-2">We deliver to:</li>
          <li className="font-light cursor-pointer text-sm p-2 ">Ahmedabad</li>
          <li className="font-light cursor-pointer text-sm p-2 ">Mumbai</li>
          <li className="font-light cursor-pointer text-sm p-2 ">Delhi</li>
          <li className="font-light cursor-pointer text-sm p-2 ">Pune</li>
          <li className="font-light cursor-pointer text-sm p-2 ">Bangalore</li>
          <li className="font-light cursor-pointer text-sm p-2 ">Hyderabad</li>
          <li className="p-2">
            <button
              className="border border-grey-500 rounded-md p-2 text-sm flex align-middle gap-1 "
              onClick={() => setCity(!isCityOpen)}
            >
              {City.length} cities
              <span
                className={`transition-transform duration-300 inline ${
                  isCityOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronUpIcon className="w-6 h-6" />
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div
        className={clsx(
          "font-light cursor-pointer text-sm p-2  block text-white mt-8 ",
          isCityOpen && "hidden"
        )}
      >
        <h1 className="font-extrabold flex justify-center">
          Other cities that we deliver:
        </h1>
        <div className="grid  md:grid-cols-4 lg:gap-8 md:gap-8 lg:grid-cols-5 grid-cols-2 gap-5 mt-5 pt-5 pl-10 ">
          {City?.map((data, key) => (
            <a className="font-light" key={key}>
              {data.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
