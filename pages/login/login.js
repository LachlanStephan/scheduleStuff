import Head from "next/head";
import Layout from "../../components/layout/layout";

const Login = (props) => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>First post</title>
      </Head>
      <div cldssName="text-center min-h-screen">
        <main className="my-9 p-2 w-4/5 m-auto rounded-xl text-green-500 bg-gray-100 justify-center">
          <div className="my-2 p-2">
            <h2>Hey this where you can log in!</h2>
          </div>
          <div className="p-2 w-4/5 border-green-500 m-auto">
            <input type="text" placeholder="email" />
          </div>
          <div className="p-2 w-4/5 border-green-500 m-auto">
            <input tpy="text" placeholder="password" />
          </div>
          <div>
            <button className="hover:text-gray-300 p-2" type="submit">
              Enter
            </button>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Login;
