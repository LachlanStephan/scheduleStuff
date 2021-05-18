import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import PageContent from "../common/pageContent";
import { urlConfig } from "../common/constants";

const adminPanel = () => {
  const router = useRouter();

  // TODO - Add loading state to not show data if 403

  const [authMsg, setAuthMsg] = useState("");
  // If user type and IP pass then allow user else redirect
  useEffect(() => {
    let url = urlConfig.url.API_URL_CHECKADMIN;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "GET",
    }).then((res) => {
      console.log(res.status, "checkAdmin");
      if (res.status === 403) {
        router.push("/login/login");
      }
      if (res.status === 201) {
        setAuthMsg("Hello admin");
      }
    });
  }, []);

  // Delete a user
  const [delUser, setDelUser] = useState("");
  const deleteUser = (users_ID) => {
    let url = urlConfig.url.API_URL_DELETEUSER;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ users_ID }),
      method: "POST",
    }).then((res) => {
      console.log(res.status, "delUser");
      if (res.status === 200) {
        setDelUser("This user has been removed");
        setTimeout(function () {
          setDelUser("");
        }, 10000);
      } else {
        setDelUser("Sorry we failed to do that right now");
        setTimeout(function () {
          setDelUser("");
        }, 10000);
      }
    });
  };

  // Promote to admin
  const [promoteAdmin, setPromoteAdmin] = useState("");
  const promote = (users_ID) => {
    let url = urlConfig.url.API_URL_PROMOTEUSER;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ users_ID }),
      method: "PATCH",
    }).then((res) => {
      console.log(res.status);
      if (res.status === 400) {
        setPromoteAdmin("Sorry we couldn't promote that user right now");
        setTimeout(function () {
          setPromoteAdmin("");
        }, 10000);
      }
      if (res.status === 200) {
        setPromoteAdmin("This user has been promoted");
        setTimeout(function () {
          setPromoteAdmin("");
        }, 10000);
      }
    });
  };

  // Get all users
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    let url = urlConfig.url.API_URL_GETUSERS;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "GET",
    })
      .then((res) => res)
      .then((data) => {
        console.log(data.status, "getUsers");
        if (data.status === 400) {
          console.log("error", res.status);
          setUserData("error");
        }
        if (data.status === 200) {
          data.json().then((data) => {
            setUserData(data);
            console.log(data, "userData check");
          });
        }
      });
  }, [delUser, promoteAdmin]);

  // Orphaned events
  const [emptyEventsMsg, setEmptyEventsMsg] = useState("");
  const emptyEvents = () => {
    let url = urlConfig.url.API_URL_EMPTYEVENTS;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "GET",
    }).then((res) => {
      console.log(res.status, "emptyEvents");
      if (res.status === 400) {
        setEmptyEventsMsg("error");
      }
      if (res.status === 204) {
        setEmptyEventsMsg("There are currently no orphaned events");
        setTimeout(function () {
          setEmptyEventsMsg("");
        }, 10000);
      }
      if (res.status === 200) {
        res.json().then((data) => {
          setEmptyEventsMsg(data);
          console.log(data, "orphaned events");
        });
      }
    });
  };

  return (
    <Layout>
      <Head>
        <title>Admin panel</title>
      </Head>
      <PageContent heading="The panel" text={authMsg} />
      <div className="">
        <div className="m-auto text-center p-5">
          <button
            onClick={() => emptyEvents()}
            className="bg-blue-300 text-white border-2 rounded-md border-blue-400 h-auto w-auto m-2 p-2"
          >
            See orphaned events
          </button>
        </div>
        <div className="overflow-auto h-60 md:h-80 lg:h-80 w-4/5 m-auto rounded-lg">
          {userData.map((users, users_ID) => (
            <div
              className="bg-gray-100 text-gray-800 dark:bg-gray-500 m-auto dark:text-white p-5 w-full h-auto border-1 border-gray-200  flex flex-wrap"
              key={users.users_ID}
            >
              <div className="h-full w-1/2 p-2 flex-col">
                <p>{users.users_ID}.</p>
                <p>{users.fName}</p>
                <p>{users.email}</p>
                <p>{users.userType}</p>
              </div>
              <div className="h-full w-1/2 p-2">
                <div>
                  <button
                    onClick={() => deleteUser(users.users_ID)}
                    className="bg-red-300 text-white border-2 rounded-md border-red-400 h-auto w-auto m-2 p-2"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => promote(users.users_ID)}
                    className="bg-green-300 text-white border-2 rounded-md border-green-400 h-auto w-auto m-2 p-2"
                  >
                    Create admin
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="m-auto text-center">{delUser}</div>
        <div className="m-auto text-center">{emptyEventsMsg}</div>
      </div>
    </Layout>
  );
};

export default adminPanel;
