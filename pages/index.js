import Head from "next/head";
import Login from "./login/login";
import Header from "./common/header";
// Removes favIcon err
// Manifest file

export default function App() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="#"></link>;
        <link rel="manifest" href="/public/manifest.json"></link>;
        <title>scheduleStuff</title>
      </Head>
      <Login />
    </>
  );
}
