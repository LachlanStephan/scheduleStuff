import react, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import PageContent from "../common/pageContent";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { urlConfig } from "../common/constants";

const Register = (props) => {
  // For react-hook from
  const { register, errors, handleSubmit } = useForm();

  // Next router
  const router = useRouter();

  // To display message that email already in use
  const [emailExists, setEmailExists] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    let url = urlConfig.url.API_URL_REGUSER;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res)
      .then((data) => {
        console.log(data.status);
        if (data.status === 422) {
          router.push("/register/register");
          console.log("422");
        }
        if (data.status === 409) {
          router.push("/register/register");
          console.log("Email exists");
          setEmailExists("email is already registered to an account");
        }
        if (data.status === 201) {
          router.push("../login/login");
        } else {
          console.log("something went wrong");
        }
      });
  };

  return (
    <>
      {" "}
      <Head>
        <title>Register</title>
      </Head>
      <PageContent heading="Register" subHeading="hi there user!" text="" />
      <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-center">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="my-5 text-sm">
              <label htmlFor="firstName" className="block text-black">
                First name
              </label>
              <input
                type="text"
                autoFocus
                id="fName"
                name="fName"
                type="text"
                // pattern="([a-zA-Z]{3,30}\s*)+"
                ref={register({ required: true })}
                // onBlur={fNameErrorFunc}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="first name"
              />
            </div>
            <div className="text-red-300">
              {errors.fName && "First name is required"}
            </div>
            <div className="my-5 text-sm">
              <label htmlFor="lastName" className="block text-black">
                Last name
              </label>
              <input
                type="text"
                autoFocus
                id="lName"
                name="lName"
                ref={register({ required: true })}
                // pattern="([a-zA-Z]{3,30}\s*)+"
                // onBlur={lNameErrorFunc}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="last name"
              />
            </div>
            <div className="text-red-300">
              {errors.lName && "Last name is required"}
            </div>
            <div className="my-5 text-sm">
              <label htmlFor="email" className="block text-black">
                Email
              </label>
              <input
                type="text"
                autoFocus
                id="email"
                name="email"
                ref={register({ required: true, minLength: 6 })}
                // pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                // onSubmit={emailErrorFunc}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Email"
              />
            </div>
            <div className="text-red-300">{emailExists}</div>
            <div className="text-red-300">
              {errors.email && "Please enter a valid email"}
            </div>
            <div className="my-5 text-sm">
              <label htmlFor="password" className="block text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                ref={register({ required: true, minLength: 8 })}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
            </div>
            <div className="text-red-300 pb-2">
              {errors.password && "Password must be at least 8 characters long"}
            </div>
            <input
              type="submit"
              className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
