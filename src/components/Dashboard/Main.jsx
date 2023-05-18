import React from "react";
import { FaUsers, FaUser } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

function Main() {
  return (
    <div className="flex my-2">
      <div className=" shadow-lg  flex text-xs text- flex-col text-gray-500  w-1/6 h-40 mx-5">
        
        <ul>
          <div className=" divide-y divide-gray-200 text-start ">
            <li className=" mx-2 my-3">User</li>
            <li className=" mx-2 my-4">Roles</li>
            <li className=" mx-2 my-3">Global User Add-on Setting</li>
            <li className=" mx-2 my-3">Manage Teams</li>
            <li className=" mx-2 my-3">Contacts</li>
          </div>
        </ul>
      </div>

      {/* mainsection */}

       <div className=" shadow-2xl border ">
      <div className=" border  border-gray-200  ">
        <div className="mx-4 my-4 border-b border-gray-200">
          <p>User View</p>
        </div>
        <div className="flex text-xs mx-2">
          <div className="flex text-gray-500 border border-gray-200 h-24">
            <div className=" bg-sky-400 w-1 "></div>
            <div>
              <div className="ml-3 mt-4">
                <p className="text-2xl text-black">40/62</p>
                <p>UC Users /Seats</p>
              </div>
            </div>
            <FaUsers className="w-14 h-20 mt-8 ml-5 text-gray-200" />
          </div>

          <div className="flex text-gray-500 border border-gray-200 h-24">
            <div className=" bg-fuchsia-400 w-1"></div>
            <div>
              <div className="ml-3 mt-4">
                <p className="text-2xl text-black">131/131</p>
                <p>SBE Users /Seats</p>
              </div>
            </div>
            <FaUser className="w-14 h-11 mt-12 ml-4 text-gray-200" />
          </div>

          <div className="flex text-gray-500 border border-gray-200 h-24">
            <div className=" bg-orange-300 w-1"></div>
            <div>
              <div className="ml-3 mt-4">
                <p className="text-3xl text-black">0</p>
                <p>Common Seal</p>
              </div>
            </div>
            <FaUser className="w-14 h-11 mt-12 ml-9 text-gray-200" />
          </div>

          <div className="flex text-gray-500 border border-gray-200 h-24">
            <div className=" bg-emerald-400 w-1"></div>
            <div>
              <div className="ml-3 mt-4">
                <p className="text-3xl text-black">0</p>
                <p>Virtual Extension</p>
              </div>
            </div>
            <MdContactPhone className="w-14 h-20 mt-7 ml-8 text-gray-200" />
          </div>

          <div className="flex text-gray-500 border border-gray-200 h-24">
            <div className=" bg-indigo-700 w-1"></div>
            <div>
              <div className="ml-3 mt-4">
                <p className="text-3xl text-black">0</p>
                <p>Virtual Extension Unlimited</p>
              </div>
            </div>
            <MdContactPhone className="w-14 h-20 mt-7 ml-5 text-gray-200" />
          </div>
        </div>

        <div className=" border-b border-gray-200 m-2 p-1">
          <p>Seat Summary</p>
        </div>
        <div>
          {/* tablesection */}
          <div class="relative overflow-x-auto">
            <table class="w-full text-xs text-left text-gray-500 dark:text-gray-400 border border-gray-200 m-2">
              <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                <tr className=" bg-gray-100">
                  <th scope="col" class="px-6 py-3">
                    Searvice Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Present Seats
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Used Days
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Monthly Rate($)
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Prorated Seat Charges($)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-gray-800 text-end ">
                  <th
                    scope="row"
                    class="px-6 py-4   whitespace-nowrap dark:text-white border-x border-x-gray-200 text-start  "
                  >
                    WS-Element
                  </th>
                  <td class="px-6 py-4 border-x border-x-gray-200 ">1</td>
                  <td class="px-6 py-4 border-x border-x-gray-200">25</td>
                  <td class="px-6 py-4 border-x border-x-gray-200">$39.95</td>
                  <td class="px-6 py-4 border-x border-x-gray-200 ">$39.29</td>
                </tr>
                <tr class=" dark:bg-gray-800  bg-gray-100 text-end">
                  <th
                    scope="row"
                    class="px-6 py-4 whitespace-nowrap dark:text-white border-x border-x-gray-200 text-start"
                  >
                    WS-Communicator
                  </th>
                  <td class="px-6 py-4 border-x border-x-gray-200 ">1</td>
                  <td class="px-6 py-4 border-x border-x-gray-200">25</td>
                  <td class="px-6 py-4 border-x border-x-gray-200">$39.95</td>
                  <td class="px-6 py-4 border-x border-x-gray-200 ">$39.29</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 text-end">
                  <th
                    scope="row"
                    class="px-6 py-4  whitespace-nowrap dark:text-white border-x border-x-gray-200 text-start"
                  >
                    SmartBox Enterprise
                  </th>
                  <td class="px-6 py-4 border-x border-x-gray-200 ">1</td>
                  <td class="px-6 py-4 border-x border-x-gray-200">25</td>
                  <td class="px-6 py-4 border-x border-x-gray-200">$39.95</td>
                  <td class="px-6 py-4 border-x border-x-gray-200 ">$39.29</td>
                </tr>
                <tr class=" dark:bg-gray-800 bg-gray-100 text-end">
                  <th
                    scope="row"
                    class="px-6 py-4 whitespace-nowrap dark:text-white border-x border-x-gray-200 text-start"
                  >
                    Business Basic
                  </th>
                  <td class="px-6 py-4 border-x border-x-gray-200 ">1</td>
                  <td class="px-6 py-4 border-x border-x-gray-200">25</td>
                  <td class="px-6 py-4 border-x border-x-gray-200">$39.95</td>
                  <td class="px-6 py-4 border-x border-x-gray-200 ">$39.29</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 text-end">
                  <th
                    scope="row"
                    class="px-6 py-4  whitespace-nowrap dark:text-white border-x border-x-gray-200 text-start"
                  >
                    Call Center
                  </th>
                  <td class="px-6 py-4 border-x border-x-gray-200 ">1</td>
                  <td class="px-6 py-4 border-x border-x-gray-200">25</td>
                  <td class="px-6 py-4 border-x border-x-gray-200">$39.95</td>
                  <td class="px-6 py-4 border-x border-x-gray-200 ">$39.29</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className=" border-b border-gray-200 my-2 mx-2">Users View</div>
        <div className=" flex justify-between text-xs">
          <div className=" flex">
            <button
              id="dropdownBgHoverButton"
              data-dropdown-toggle="dropdownBgHover"
              class="text-black border border-gray-200 font-medium rounded text-sm px-2 py-2 text-center inline-flex items-center"
              type="button"
            >
              Acrtions
              <svg
                class="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <button
              class="text-black border border-gray-200 rounded text-sm px-2 py-2 text-start inline-flex items-center mx-1"
              type="button"
            >
              All
              <svg
                class="w-4 h-4 ml-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div>
              <input
                type="text"
                placeholder="Search"
                className=" border border-gray-200 h-11"
              />
              <button className=" bg-sky-400 rounded h-9 w-14 border border-gray-200 text-white mx-1">
                Go
              </button>
            </div>
            <button
              id="dropdownBgHoverButton"
              data-dropdown-toggle="dropdownBgHover"
              class="text-black border border-gray-200  rounded text-sc px-1 py-2 text-start inline-flex items-center"
              type="button"
            >
              Add/Remove section(s)
              <svg
                class="w-4 h-4 ml-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <button className=" bg-sky-400 h-9 w-14 rounded border border-gray-200 text-white mx-1 mt-1">
              Go
            </button>
          </div>
          <div>
            <div className="flex">
              <button className=" border border-gray-200 h-11 text-center p-2 ">
                Advanced Flitering
              </button>
              <p className=" mt-3.5">1 Jump</p>
              <button
                id="dropdownBgHoverButton"
                data-dropdown-toggle="dropdownBgHover"
                class="text-black border border-gray-200  rounded text-sm px-4 py-2.5 text-start inline-flex items-center"
                type="button"
              >
                1
                <svg
                  class="w-4 h-4 ml-1"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <p className=" mt-3.5">Show</p>
              <button
                id="dropdownBgHoverButton"
                data-dropdown-toggle="dropdownBgHover"
                class="text-black border border-gray-200  rounded text-sm px-4 py-2.5 text-start inline-flex items-center"
                type="button"
              >
                50
                <svg
                  class="w-4 h-4 ml-2 "
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* tablesecond */}

        <div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="p-3">
                    <div class="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-all" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" class="px-3 py-1.5">
                    frist Name
                  </th>
                  <th scope="col" class="px-3 py-1.5">
                    <div className=" flex">
                      <p className="mx-1">&#8711;</p>
                      Last Name
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 inline-flex">
                    <div className=" flex">
                      <p className="mx-1">&#8711;</p>
                      Extension
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3">
                    <div className=" flex">
                      <p className="mx-1">&#8711;</p>
                      Service Plan
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3">
                    <div className=" flex">
                      <p className="mx-1">&#8711;</p>
                      Caller ID
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3">
                    <div className=" flex">
                      <p className="mx-1">&#8711;</p>
                      Login
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <div className=" flex">
                      <p className="mx-1">&#8711;</p>
                      Wellcome Email
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <div className=" flex">
                      <p className="mx-1">&#8711;</p>
                      Email Status
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    QA
                  </th>
                  <td class="px-6 py-4">QAone</td>
                  <td class="px-6 py-4">125</td>
                  <td class="px-6 py-4">Call center</td>
                  <td class="px-6 py-4">1122334456</td>
                  <td class="px-6 py-4">
                    <div className="flex">
                      <p className="mx-1 underline">ULM</p>
                      <p>Streams</p>
                    </div>
                  </td>
                  <td class="px-6 py-4 underline">Resend</td>
                  <td class="px-6 py-4">--</td>
                </tr>

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    QA
                  </th>
                  <td class="px-6 py-4">QAone</td>
                  <td class="px-6 py-4">125</td>
                  <td class="px-6 py-4">Call center</td>
                  <td class="px-6 py-4">1122334456</td>
                  <td class="px-6 py-4">
                    <div className="flex">
                      <p className="mx-1 underline">ULM</p>
                      <p>Streams</p>
                    </div>
                  </td>
                  <td class="px-6 py-4 underline">Resend</td>
                  <td class="px-6 py-4">--</td>
                </tr>

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    QA
                  </th>
                  <td class="px-6 py-4">QAone</td>
                  <td class="px-6 py-4">125</td>
                  <td class="px-6 py-4">Call center</td>
                  <td class="px-6 py-4">1122334456</td>
                  <td class="px-6 py-4">
                    <div className="flex">
                      <p className="mx-1 underline">ULM</p>
                      <p>Streams</p>
                    </div>
                  </td>
                  <td class="px-6 py-4 underline">Resend</td>
                  <td class="px-6 py-4">--</td>
                </tr>

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    QA
                  </th>
                  <td class="px-6 py-4">QAone</td>
                  <td class="px-6 py-4">125</td>
                  <td class="px-6 py-4">Call center</td>
                  <td class="px-6 py-4">1122334456</td>
                  <td class="px-6 py-4">
                    <div className="flex">
                      <p className="mx-1 underline">ULM</p>
                      <p>Streams</p>
                    </div>
                  </td>
                  <td class="px-6 py-4 underline">Resend</td>
                  <td class="px-6 py-4">--</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Main;
