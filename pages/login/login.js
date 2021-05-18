import Head from "next/head";
import PageContent from "../common/pageContent";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import { urlConfig } from "../common/constants";

const Login = () => {
  const { register, errors, handleSubmit } = useForm();

  const router = useRouter();

  // To display message that the acc doesn't exist
  const [noLogin, setnoLogin] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    let url = urlConfig.url.API_URL_LOGIN;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res)
      .then((data) => {
        console.log(data.status, data.headers);
        if (data.status === 401 || data.status === 422) {
          router.push("/login/login");
          setnoLogin(
            "This account does not exist, try again or click the link below to register"
          );
        }
        if (data.status === 400) {
          setnoLogin("Sorry we couldn't log you in right now");
          router.push("/login/login");
        }
        if (data.status === 200) {
          router.push("../home/home");
        } else {
          console.log("something went wrong");
        }
      });
  };

  return (
    <>
      {" "}
      <Head>
        <title>Login</title>
      </Head>
      <PageContent heading="ScheduleStuff" subHeading="" text="" />
      <div>
        <img
          className="m-auto w-30 h-30"
          src="/ssIcon-128x128.png"
          alt="scheduleStuff icon"
        />
      </div>
      <div className="lg:w-4/12 md:6/12 w-10/12 m-auto shadow-md text-gray-700">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="my-5 text-sm text-black dark:text-white">
              <label htmlFor="username" className="block">
                email
              </label>
              <input
                type="text"
                autoFocus
                name="email"
                id="email"
                ref={register({ required: true })}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full text-black"
                placeholder="Username"
              />
              <div className="text-red-300">
                {errors.email && "Email is required"}
              </div>
            </div>
            <div className="text-red-300">{noLogin}</div>
            <p className="text-red-300" id="emailError"></p>
            <div className="my-5 text-sm text-black dark:text-white">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                ref={register({ required: true })}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full text-black"
                placeholder="Password"
              />
              <div className="text-red-300">
                {errors.password && "Password is required"}
              </div>
              <p className="text-red-300 pb-2" id="passwordError"></p>
              <div className="flex justify-end mt-2 text-xs text-gray-400">
                <Link href="/register/register">
                  <a href="../../pages/auth/forget_password.html hover:text-black">
                    Don't have an account? Register here
                  </a>
                </Link>
              </div>
            </div>

            <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
