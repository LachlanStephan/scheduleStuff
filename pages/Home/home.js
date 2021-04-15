import Layout from "../../components/layout/layout";
import PageContent from "../common/pageContent";
import getUserName from "../common/getUserName";
import getUserEvent from "../common/getNextEvent";
import { useEffect, useState } from "react";
import Router from "next/dist/next-server/server/router";
import Head from "next/head";

const Home = (props) => {
  const [checkFriend, setCheckFriend] = useState([]);
  let url = "http://localhost:5000/checkFriend";
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
    let url = "http://localhost:5000/acceptFriend";
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

  const [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    let url = "http://localhost:5000/friendsList";
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
    <Layout>
      <Head>
        <title>Home</title> <link rel="manifest" href="/manifest.json"></link>;
      </Head>
      <div>
        <img className="m-auto" src="/ssIcon-96x96.png" />
      </div>
      <PageContent
        subHeading={`Hi there  ${getUserName()}`}
        text={`Your next event is ${getUserEvent()}`}
      />
      {checkFriend.length > 0 ? (
        <div className="min-h-screen">
          <div id="friendReq" className="p-5">
            You have a freind request from:{checkFriend}
            <button
              onClick={acceptFriend}
              className="p-2 ml-5 rounded-lg bg-green-300"
            >
              Accept
            </button>
            <button className="p-2 ml-5 rounded-lg bg-red-300">Decline</button>
          </div>
        </div>
      ) : (
        <div className="text-left min-h-screen ml-5">
          Friends list:
          {friendsList.map((friendsList, index) => (
            <div className="" key={index}>
              {friendsList.fName}
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Home;
