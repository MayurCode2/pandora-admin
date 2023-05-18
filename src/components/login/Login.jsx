import React from "react";
import { RiAdminFill } from "react-icons/Ri";
import { Link } from "react-router-dom";
function Login() {
  

  return (
    <div>
      <div className="w-3/4 ml-20">
        <nav className="flex justify-between border-b border-slate-300 ">
          <div>
            <img
              src="src/assets/panterralogo.png"
              alt="logo"
              className="h-10 mx-2 my-2"
            />
          </div>
          <div>
            <img
              src="src/assets/streamslogo.png"
              alt="logo"
              className="h-12  mx-2 my-2"
            />
          </div>
        </nav>

        <main className="m-3 flex justify-between">
          <div className="">
            <div className="flex ">
              <RiAdminFill className="w-10 h-10" />
              <h5 className="my-1 mx-3 text-2xl">Admin Dashboard</h5>
            </div>
            <div>
              <p className="my-3">
                Stream Admin Dashboard key features include:
              </p>
              <div className="mx-6 my-6">
                <ul className="list-disc leading-6 text-xs  ">
                  <li>Browser-based user and account level administration</li>
                  <li>Single login admin for all communications services</li>
                  <li>Manage all user from anywhere in the world</li>
                  <li>Customize features for each user at any time</li>
                </ul>
              </div>
            </div>
          </div>
            <div className="w-80">
              <div className=" text-right">
              <p className="mx-3"> REACH US AT:(800) 805-0558</p>
              </div>
              <div className="">
                <div className="bg-white shadow-md border border-lime-600 rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <form className="space-y-6" action="#">
                    <h3 className="text-xl text-center   text-gray-900 dark:text-white">
                      Login
                    </h3>
                    <div>
                      <label
                        for="email"
                        className="text-sm font-medium text-gray-900 block mb-1 dark:text-gray-300"
                      >
                        User Name:
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className ="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="text-sm font-medium text-gray-900 block mb-1 dark:text-gray-300"
                      >
                        Password :
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required=""
                      />
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div class="text-sm ml-3">
                          <label
                            for="remember"
                            class="font-medium text-gray-900 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <Link to='/dashboard'>
                    <button
                      type="submit"
                      className=" w-20 text-black bg-orange-300  rounded-lg  px-3 py-2 text-center"
                    >
                      Login
                    </button>
                    </Link>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      <a
                        href="#"
                        className="text-black underline"
                      >
                        Forgot Password
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
