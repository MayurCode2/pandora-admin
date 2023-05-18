import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { RxExit } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { SiSimpleanalytics } from "react-icons/si";
import {FaMoneyBillAlt} from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className=" shadow-lg border text-xs">
      <div className="flex justify-between">
        <div className="flex">
          <div className="mx-3 my-2">
            <Link to = '/'>
              <img src="src/assets/streamslogo.png" alt="images" className="w-15 h-9" />
            </Link>
          </div>
          <div className="flex mx-3 my-3 ">
            <VscThreeBars className="w-8 h-8" />
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-6 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded  block w-45 pl-10 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Search User /Groups"
                required
              />
            </div>

          </div>
        </div>
         <div className="flex my-2">
          <BiSupport className="w-8 h-4 mt-2"/>
          <p className="mt-2 mx-2">Support</p>
          <p className=" mt-2 mx-2 text-gray-600">Welcome pbxqa</p>
          <RxExit className="mt-3  mx-2"/>
         </div>

      </div>
      <div className="flex justify-center my-1">
      <div className="flex ">
        <div className="flex mx-1 text-gray-500">
            <GoHome className=" mx-1"/>
            <p>Home</p>
        </div>
        <div className="flex mx-1 text-gray-500">
            <MdContactPhone className=" mx-1" />
            <p>Phone System</p>
        </div>
        <div className="flex mx-1 text-gray-500">
            <HiUserGroup className=" mx-1"/>
            <p>Users</p>
        </div>
        <div className="flex mx-1 text-gray-500">
            <SiSimpleanalytics className=" mx-1"/>
            <p>Analytics</p>
        </div>
        <div className="flex mx-1 text-gray-500">
            <FaMoneyBillAlt className=" mx-1"/>
            <p>Billing</p>
        </div>
        <div className="flex mx-1 text-gray-500">
            <BsGear className=" mx-1"/>
            <p>Admin Tool</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
