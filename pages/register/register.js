import react, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import {
  emailErrorFunc,
  passwordErrorFunc,
  fNameErrorFunc,
} from "../../components/errorFunctions/errorFunctions";

const Register = (props) => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>Register</title>
      </Head>
      <div className="text-center min-h-screen w-3/5 m-auto">
        <main className="my-9 p-2 w-full m-auto rounded-xl text-green-500 bg-gray-100 justify-center">
          <div>Register</div>
        </main>

        {/* first name input */}
        <div className="p-2 w-full m-auto">
          <input
            type="text"
            placeholder="Name"
            name="fName"
            id="fName"
            onBlur={fNameErrorFunc}
            required={true}
          />
        </div>
        <div className="text-red-400" id="fNameError"></div>

        {/* email input */}
        <div className="p-2 w-full m-auto">
          <input
            type="text"
            placeholder="email"
            name="email"
            id="email"
            onBlur={emailErrorFunc}
            required={true}
          />
        </div>
        <div className="text-red-400" id="emailError"></div>

        {/* password input */}
        <div className="p-2 w-full m-auto">
          <input
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
          <button className="hover:text-gray-300" id="btn" type="submit">
            Enter
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
