import Head from "next/head";
import Layout from "../../components/layout/layout";

const Register = (props) => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>Register</title>
      </Head>
      <div className="text-center min-h-screen">
        <main className="my-9 p-2 w-4/5 m-auto rounded-xl text-green-500 bg-gray-100 justify-center">
          <div>Register</div>
        </main>
      </div>
    </Layout>
  );
};

export default Register;
