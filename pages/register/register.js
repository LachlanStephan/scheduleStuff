import react, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import {
  emailErrorFunc,
  passwordErrorFunc,
  fNameErrorFunc,
  lNameErrorFunc,
} from "../../components/errorFunctions/errorFunctions";
import PageContent from "../common/pageContent";

const Register = (props) => {
  // form data
  // let formData = new formData();
  // let fName = document.getElementById("fName");
  // let email = document.getElementById("email");
  // let password = document.getElementById("password");
  // formData.append(fName);
  // formData.append(email);
  // formData.append(password);

  // useEffect(() => {
  //   let url = "http://localhost:5000/regUser";
  //   fetch(url, {
  //     method: "POST",
  //     body: FormData,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // });

  // const regUser = () => {
  //   useEffect(() => {
  //     let url = "http://localhost:5000/regUser";
  //     fetch(url, {
  //       body: JSON.stringify({
  //         fName: event.target.fName.value,
  //         lName: event.target.lName.value,
  //         email: event.target.email.value,
  //         password: event.target.value,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //     });
  //   });
  // };

  const regUser = async (event) => {
    event.preventDefault();

    let url = "http://localhost:5000/regUser";
    const res = await fetch(url, {
      body: JSON.stringify({
        fName: event.target.fName.value,
        lName: event.target.lName.value,
        email: event.target.email.value,
        password: event.target.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
  };

  return (
    <Layout>
      {" "}
      <Head>
        <title>Register</title>
      </Head>
      <PageContent heading="Register" subHeading="hi there user!" text="" />
      <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div class="py-8 px-8 rounded-xl">
          <h1 class="font-medium text-2xl mt-3 text-center">Register</h1>
          <form onSubmit={regUser} class="mt-6">
            <div class="my-5 text-sm">
              <label for="firstName" class="block text-black">
                First name
              </label>
              <input
                type="text"
                autofocus
                id="fName"
                name="fName"
                pattern="/^[a-z ,.'-]+$/i"
                required={true}
                onBlur={fNameErrorFunc}
                class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="first name"
              />
            </div>
            <p className="text-red-300" id="fNameError"></p>
            <div class="my-5 text-sm">
              <label for="lastName" class="block text-black">
                Last name
              </label>
              <input
                type="text"
                autofocus
                id="lName"
                name="lName"
                pattern="/^[a-z ,.'-]+$/i"
                required={true}
                onBlur={lNameErrorFunc}
                class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="last name"
              />
            </div>
            <p className="text-red-300" id="lNameError"></p>
            <div class="my-5 text-sm">
              <label for="email" class="block text-black">
                Email
              </label>
              <input
                type="text"
                autofocus
                id="email"
                name="email"
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
                name="password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                required={true}
                onBlur={passwordErrorFunc}
                class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
            </div>
            <p className="text-red-300 pb-2" id="passwordError"></p>
            <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
              Register
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

          {/* <div class="grid md:grid-cols-2 gap-2 mt-7">
            <div>
              <button class="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">
                Facebook
              </button>
            </div>
            <div>
              <button class="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">
                Twitter
              </button>
            </div>
          </div> */}

          {/* <p class="mt-12 text-xs text-center font-light text-gray-400">
            {" "}
            Don't have an account?{" "}
            <a href="../auth/register.html" class="text-black font-medium">
              {" "}
              Create One{" "}
            </a>{" "}
          </p> */}
        </div>
      </div>
      {/* <PageContent
        heading="Register"
        subHeading="i dont know"
        text="dnqwd dwoiqjdiowqj"
      />
      <form className="text-left w-full ml-5 lg:w-2/5 m-auto" action="*">
        <div className="p-2 w-full m-auto">
          <input
            className="border-2 border-green-200 p-2 rounded-lg"
            type="text"
            placeholder="Name"
            name="fName"
            id="fName"
            onBlur={fNameErrorFunc}
            required={true}
          />
        </div>
        <div className="text-red-400" id="fNameError"></div>
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
            required={true}
            name="password"
            id="password"
            onBlur={passwordErrorFunc}
          />
        </div>
        <div className="text-red-400" id="passwordError"></div>
        <div className="p-2 w-full border-green-500 m-auto my-2">
          <button
            className="hover:text-gray-300 text-gray-500 font-extrabold underline"
            id="btn"
            type="submit"
          >
            Enter
          </button>
        </div>
      </form> */}
    </Layout>
  );
};

export default Register;
