import Head from "next/head";
import Login from "./login/login";

export default function App() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="#"></link>;
        <link rel="manifest" href="/manifest.json"></link>;
        <title>scheduleStuff</title>
      </Head>
      <Login />
    </>
  );
}
