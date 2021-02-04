import Head from "next/head";
import Layout from "../../components/layout/layout";
import {
  emailErrorFunc,
  passwordErrorFunc,
} from "../../components/errorFunctions/errorFunctions";

const Login = (props) => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>Login</title>
      </Head>
      <div className="text-center min-h-screen w-3/5 m-auto">
        <main className="my-9 p-2 w-full m-auto rounded-xl text-green-500 bg-gray-100 justify-center">
          <div>
            <h2>Hey this where you can log in!</h2>
          </div>
        </main>
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
