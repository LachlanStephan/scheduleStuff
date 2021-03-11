import Head from "next/head";
import Layout from "../components/layout/layout";
import Home from "./home/home";
import Login from "./login/login";

export default function App() {
  return (
    <>
      <Head>
        {" "}
        <title>scheduleStuff</title>
      </Head>
      <Login />
    </>
  );
}
