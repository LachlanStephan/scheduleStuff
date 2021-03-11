import Head from "next/head";
import Layout from "../../components/layout/layout";
import {
  emailErrorFunc,
  passwordErrorFunc,
} from "../../components/errorFunctions/errorFunctions";
import PageContent from "../common/pageContent";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Login = (props) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    console.log(data);
    let url = "http://localhost:5000/login";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 201) {
        router.push("/home/home");
      }
      if (res.status === 401) {
        router.push("/login/login");
        return "Email in use";
      } else {
        return "try again later";
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
      <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div class="py-8 px-8 rounded-xl">
          <h1 class="font-medium text-2xl mt-3 text-center">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} class="mt-6">
            <div class="my-5 text-sm">
              <label for="username" class="block text-black">
                email
              </label>
              <input
                type="text"
                autofocus
                name="email"
                id="email"
                pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                ref={register({ required: true })}
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
                name="password"
                id="password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                ref={register({ required: true })}
                onBlur={passwordErrorFunc}
                class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
              <p className="text-red-300 pb-2" id="passwordError"></p>
              <div class="flex justify-end mt-2 text-xs text-gray-600">
                <Link href="/register/register">
                  <a href="../../pages/auth/forget_password.html hover:text-black">
                    Don't have an account? Register here
                  </a>
                </Link>
              </div>
            </div>

            <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
