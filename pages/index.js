import Head from "next/head";
import Layout from "../components/layout/layout";
import Home from "./Home/home";

export default function App() {
  return (
    <Layout>
      <div className="text-center min-h-screen">
        <Head>
          {" "}
          <title>scheduleStuff</title>
        </Head>
        <Home title="Welcome to scheduleStuff" />
      </div>
    </Layout>
  );
}
