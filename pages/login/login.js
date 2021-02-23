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
      <PageContent
        heading="Login"
        subHeading="whatever who knows"
        text="dhnwq djwqoi dwjioqd wqdj"
      />
      <div className="text-left w-full ml-5 lg:w-2/5 m-auto">
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
      </div>
    </Layout>
  );
};

export default Login;
