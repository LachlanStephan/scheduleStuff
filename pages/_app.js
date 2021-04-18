import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
          console.log(
            "Service Worker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          console.log("Service Worker registration failed: ", err);
        }
      );
    });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
