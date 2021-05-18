import Layout from "../../components/layout/layout";
import PageContent from "../common/pageContent";
import getUserName from "../common/getUserName";
import getUserEvent from "../common/getNextEvent";
import { useEffect, useState } from "react";
import Router from "next/dist/next-server/server/router";
import Head from "next/head";
import { urlConfig } from "../../components/common/constants";

const Home = (props) => {
  const [checkFriend, setCheckFriend] = useState([]);
  let url = urlConfig.url.API_URL_CHECKFRIEND;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status, "checkFriend");
      switch (res.status) {
        case 400:
          setCheckFriend("");
          break;
        case 204:
          setCheckFriend("");
          break;
        case 200:
          res.json().then((data) => {
            setCheckFriend(data.fName);
            console.log(data);
          });
      }
    });
  }, []);

  const [acceptMsg, setAcceptMsg] = useState("");
  const acceptFriend = () => {
    let url = urlConfig.url.API_URL_ACCEPTFRIEND;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "PATCH",
    }).then((res) => {
      if (res.status === 400) {
        setAcceptMsg("Sorry we couldn't accept that request right now");
      }
      if (res.status === 200) {
        setAcceptMsg("Success");
        Router.push("home/home");
      }
    });
  };

  const [rejectReq, setRejectReq] = useState("");
  const rejectFriend = () => {
    let url = urlConfig.url.API_URL_REJECTFRIEND;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
    }).then((res) => {
      if (res.status === 400) {
        setRejectReq("sorry we failed to complete that task");
      }
      if (res.status === 200) {
        setRejectReq("Request denied");
      }
    });
  };

  const [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    let url = urlConfig.url.API_URL_FRIENDSLIST;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      credentials: "include",
    }).then((res) => {
      if (res.status === 400) {
        setFriendsList("Sorry we couldn't get your friends list right now");
      }
      if (res.status === 200) {
        res.json().then((data) => {
          setFriendsList(data);
          console.log(data);
        });
      }
    });
  }, []);

  return (
    <>
      <html>
        <Layout>
          <Head>
            <title>Home</title>{" "}
            <link rel="manifest" href="/manifest.json"></link>;
          </Head>
          <PageContent
            subHeading={`Hi there  ${getUserName()}`}
            text={`Your next event is ${getUserEvent()}`}
          />
          {checkFriend.length > 0 ? (
            <div className="">
              <div id="friendReq" className="">
                You have a freind request from:{checkFriend}
                <button
                  onClick={acceptFriend}
                  className="p-2 ml-5 rounded-lg bg-green-300"
                >
                  Accept
                </button>
                <button className="p-2 ml-5 rounded-lg bg-red-300">
                  Decline
                </button>
              </div>
            </div>
          ) : friendsList.length > 0 ? (
            <div className="text-left ml-5">
              Friends list:
              {friendsList.map((friendsList, index) => (
                <div className="" key={index}>
                  {friendsList.fName}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-left ml-5">no Friends</div>
          )}
        </Layout>
      </html>
    </>
  );
};

export default Home;
