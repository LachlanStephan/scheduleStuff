import Link from "next/link";
import Head from "next/head";
import Header from "../common/header";

const Login = (props) => {
  return (
    <div className="text-center min-h-screen">
      <Head>
        <title>First post</title>
      </Head>
      <Header />
      <main className="my-9 p-2 w-4/5 m-auto rounded-xl text-green-500 bg-gray-100 justify-center">
        <div className="my-2">
          <h2>Hey this where you can log in!</h2>
        </div>
        <div className="p-2 w-4/5 border-green-500 m-auto">
          <input type="text" placeholder="email" />
        </div>
        <div className="p-2 w-4/5 border-green-500 m-auto">
          <input tpy="text" placeholder="password" />
        </div>
        <div>
          <button className="hover:text-gray-300" type="submit">
            Enter
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
