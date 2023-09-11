import React from "react";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate()
  const signOutBtn = async() =>{
    try {
        await signOut(auth)
        localStorage.clear()
        navigate('/')
    } catch (error) {
        console.log(error);
    }
  
  }

  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  const { name, photoUrl, userId, isAuth } = useGetUserInfo();

  return (
    <div>
      <nav class="bg-slate-100">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src={photoUrl}
              class="h-8 mr-3 rounded-full"
              alt="Flowbite Logo"
            />
            <span class="font-semibold text-gray-900 text-lg tracking-tight">
              {name}'s Expense Tracker
            </span>
          </a>
          <div class="flex items-center md:order-2">
            <button
              type="button"
              onClick={signOutBtn}
              class=" text-gray-100 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
            >
              <img
                class="w-8 mr-2 h-8 rounded-full"
                src={photoUrl}
                alt="user photo"
              />
              Logout
            </button>

            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">
                  {name}
                </span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
