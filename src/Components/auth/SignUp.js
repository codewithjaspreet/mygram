import React from "react";
import { Link } from "react-router-dom";
import {BiCloudUpload} from 'react-icons/bi';

const SignUp = () => {
  return (
    <div class=" mx-auto mt-6 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-4" action="#">
        {/* <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5> */}

        <div className="flex justify-center">
          <h5 class="text-5xl font-medium text-gray-900 dark:text-white">
            ItsMyGram
          </h5>
        </div>
        <div className="flex justify-center w-full">
          <h5 class="  text-gray-900 dark:text-white text-center w-full">
            Sign Up to see photos & videos of your friends.
          </h5>
        </div>

        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>

        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Jaspreet Singh Sodhi"
            required
          />
        </div>
      </form>
      <div className="space-y-4 mt-5">
        <label class="w-full flex gap-2  items-center justify-center px-4 py-2  bg-white text-blue rounded-lg   border border-blue cursor-pointer ">
          <BiCloudUpload />
          <span class="text-base font-medium">Upload profile Image</span>
          <input type="file" class="hidden" />
        </label>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Share
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/login">
            <a
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
