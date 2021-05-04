import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const adminPanel = () => {
  const router = useRouter();

  const [authMsg, setAuthMsg] = useState("");

  // Check if admin
  useEffect(() => {
    let url = "http://localhost:5000/checkAdmin";
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
      if (res.status === 201) {
        setAuthMsg("Hello admin");
      }
    });
  }, []);

  // Fetch all users
  const [userData, setUserData] = useState([]);
  let url = "http://localhost:5000/getAllUsers";
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "GET",
  }).then((res) => {
    if (res.status === 400) {
      setUserData("error");
    }
    if (res.status === 200) {
      res.json().then((data) => {
        setUserData(data);
        console.log(data);
      });
    }
  });

  // ToDo - delete user - view stats in graph - add admin to DB and login route/query

  return (
    <>
      {authMsg}
      {userData.map((userData, key) => {
        <div key={key}>
          <p>{userData.fName}</p>
        </div>;
      })}
      <div>Admin panel</div>
    </>
  );
};

export default adminPanel;
