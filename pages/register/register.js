import react, { useState, useEffect, useRef } from "react";
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
  // const [data, setData] = useState({
  //   fName: "",
  //   lName: "",
  //   email: "",
  //   password: "",
  // });

  // const value = e.target.value;

  // const handlefName = (e) => {};

  // const handlelName = (e) => {
  //   setData({ lName: e.target.value });
  // };
  // const handleEmail = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.email]: value,
  //   });
  // };

  // const handlePassword = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.password]: value,
  //   });
  // };

  const handleSubmit = (event) => {
    let formData = new FormData(form.current);
    formData.set("fName", formData.get("fName"));
    formData.set("lName", formData.get("lName"));
    formData.set("email", formData.get("email"));
    formData.set("password", formData.get("password"));
    let url = "http://localhost:5000/regUser";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        formData,
      }),
    });
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
          <form method="post" onSubmit={handleSubmit} class="mt-6">
            <div class="my-5 text-sm">
              <label for="firstName" class="block text-black">
                First name
              </label>
              <input
                type="text"
                autofocus
                id="fName"
                name="fName"
                typeof="text"
                pattern="([a-zA-Z]{3,30}\s*)+"
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
                pattern="([a-zA-Z]{3,30}\s*)+"
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
                pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                required={true}
                onBlur={emailErrorFunc}
                class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Email"
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
        </div>
      </div>
    </Layout>
  );
};

export default Register;
