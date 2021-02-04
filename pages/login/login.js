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
      <div className="text-left w-4/5 lg:w-2/5 m-auto">
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
        <div className="p-2 w-full m-auto">
          <input
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
          <button className="hover:text-gray-300" type="submit">
            Enter
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
