import Head from "next/head";
import PageContent from "../common/pageContent";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const router = useRouter();

  // To display message that the acc doesn't exist
  const [noLogin, setnoLogin] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    let url = "http://localhost:5000/login";
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
        if (data.status === 401) {
          router.push("/login/login");
          setnoLogin(
            "This account does not exist, try again or click the link below to register"
          );
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
      <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="my-5 text-sm">
              <label htmlFor="username" className="block text-black">
                email
              </label>
              <input
                type="text"
                autoFocus
                name="email"
                id="email"
                // pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                ref={register({ required: true })}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Username"
              />
              <div className="text-red-300">
                {errors.email && "Email is required"}
              </div>
            </div>
            <div className="text-red-300">{noLogin}</div>
            <p className="text-red-300" id="emailError"></p>
            <div className="my-5 text-sm">
              <label htmlFor="password" className="block text-black">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                ref={register({ required: true })}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
              <div className="text-red-300">
                {errors.password && "Password is required"}
              </div>
              <p className="text-red-300 pb-2" id="passwordError"></p>
              <div className="flex justify-end mt-2 text-xs text-gray-600">
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
