import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const adminPanel = () => {
  const router = useRouter();

  const [authMsg, setAuthMsg] = useState("");

  // Check if admin
  useEffect(() => {
    let url = "http://localhost:5000/checkIfAdmin";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "GET",
    }).then((res) => {
      if (res.status === 403) {
        router.push("/login/login");
      }
      if (res.status === 200) {
        setAuthMsg("Hello admin");
      }
    });
  }, []);

  // ToDo - delete user - view stats in graph - add admin to DB and login route/query

  return (
    <>
      {authMsg}
      <div>Admin panel</div>
    </>
  );
};

export default adminPanel;
