import Head from "next/head";
import Layout from "../components/layout/layout";
import Home from "./Home/home";

export default function App() {
  return (
    <Layout>
      <Head>
        {" "}
        <title>scheduleStuff</title>
      </Head>
      <Home />
    </Layout>
  );
}
