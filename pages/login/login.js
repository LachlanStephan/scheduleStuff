import Head from "next/head";
import Layout from "../../components/layout/layout";
import {
  emailErrorFunc,
  passwordErrorFunc,
} from "../../components/errorFunctions/errorFunctions";
import PageContent from "../common/pageContent";

const Login = (props) => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>Login</title>
      </Head>
      <PageContent heading="Login" subHeading="who knows" text="" />
      <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div class="py-8 px-8 rounded-xl">
          <h1 class="font-medium text-2xl mt-3 text-center">Login</h1>
          <form action="" class="mt-6">
            <div class="my-5 text-sm">
              <label for="username" class="block text-black">
                email
              </label>
              <input
                type="text"
                autofocus
                id="email"
                pattern="/^\S+@\S+\.\S+$/"
                required={true}
                onBlur={emailErrorFunc}
                class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Username"
              />
            </div>
            <p className="text-red-300" id="emailError"></p>
            <div class="my-5 text-sm">
              <label for="password" class="block text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                required={true}
                onBlur={passwordErrorFunc}
                class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
              <p className="text-red-300 pb-2" id="passwordError"></p>
              <div class="flex justify-end mt-2 text-xs text-gray-600">
                <a href="../../pages/auth/forget_password.html hover:text-black">
                  Forget Password?
                </a>
              </div>
            </div>

            <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
              Login
            </button>
          </form>

          {/* <div class="flex md:justify-between justify-center items-center mt-10">
            <div class="bg-gray-300 md:block hidden w-4/12"></div>
            <p class="md:mx-2 text-sm font-light text-gray-400">
              {" "}
              Login With Social{" "}
            </p>
            <div class="bg-gray-300 md:block hidden w-4/12"></div>
          </div> */}
          {/* 
          <div class="grid md:grid-cols-2 gap-2 mt-7">
            <div>
              <button class="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">
                Facebook
              </button>
            </div>
            <div> */}
          {/* <button class="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">
                Twitter
              </button>
            </div>
          </div> */}
          {/* 
          <p class="mt-12 text-xs text-center font-light text-gray-400">
            {" "}
            Don't have an account?{" "}
            <a href="../auth/register.html" class="text-black font-medium">
              {" "}
              Create One{" "}
            </a>{" "}
          </p> */}
        </div>
      </div>
      {/* <form className="text-left w-full ml-5 lg:w-2/5 m-auto" action="*">
        <div className="p-2 w-full m-auto">
          <input
            className="border-2 border-green-200 p-2 rounded-lg"
            type="text"
            placeholder="email"
            name="email"
            id="email"
            onBlur={emailErrorFunc}
            required={true}
          />
        </div>
        <div className="text-red-400" id="emailError"></div>
        <div className="p-2 w-full m-auto">
          <input
            className="border-2 border-green-200 p-2 rounded-lg"
            type="password"
            placeholder="password"
            name="password"
            required={true}
            id="password"
            onBlur={passwordErrorFunc}
          />
        </div>
        <div className="text-red-400" id="passwordError"></div>
        <div className="p-2 w-full m-auto my-2">
          <button
            className="hover:text-gray-300 text-gray-500 font-extrabold underline"
            type="submit"
          >
            Enter
          </button>
        </div>
      </form> */}
    </Layout>
  );
};

export default Login;
