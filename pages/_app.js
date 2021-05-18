import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  // Not sure if I need to specify files or if below is fine
  // let scope = [];

  const router = useRouter();

  // To check if user is logged in or not -> send them to login page if no
  useEffect(() => {
    let url = "http://localhost:5000/checkLogin";
    let prodUrl = "https://schedule-stuff.herokuapp.com/checkLogin";
    fetch(prodUrl || url, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }).then((res) => {
      console.log(res.status);
      if (res.status === 403) {
        localStorage.setItem("loggedIn", "false");
        router.push("/login/login");
        console.log("Not logged in");
      }
      if (res.status === 200) {
        // localStorage for login status seems useless if checkLogin happens every page load??
        localStorage.setItem("loggedIn", true);
        console.log("Logged in");
      }
    });
  }, []);

  // Service worker
  // useEffect(() => {
  //   window.addEventListener("load", function () {
  //     navigator.serviceWorker.register("/sw.js").then(
  //       function (registration) {
  //         console.log(
  //           "Service Worker registration successful with scope: ",
  //           registration.scope
  //         );
  //       },
  //       function (err) {
  //         console.log("Service Worker registration failed: ", err);
  //       }
  //     );
  //   });
  // }, []);

  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
