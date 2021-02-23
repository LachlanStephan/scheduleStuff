import Head from "next/head";
import Layout from "../../components/layout/layout";
import {
  emailErrorFunc,
  passwordErrorFunc,
  fNameErrorFunc,
} from "../../components/errorFunctions/errorFunctions";
import PageContent from "../common/pageContent";

const Register = (props) => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>Register</title>
      </Head>
      <PageContent
        heading="Register"
        subHeading="i dont know"
        text="dnqwd dwoiqjdiowqj"
      />
      <div className="text-left w-full ml-5 lg:w-2/5 m-auto">
        {/* first name input */}
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
        {/* email input */}
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
        {/* password input */}
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
      </div>
    </Layout>
  );
};

export default Register;
