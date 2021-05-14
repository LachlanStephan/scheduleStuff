import Layout from "../../components/layout/layout";
import Head from "next/head";
import PageContent from "../common/pageContent";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/router";
import {
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { io } from "socket.io-client";
import PacmanLoader from "react-spinners/PacmanLoader";

// MAYBE need to add an edit option to schedule

const Schedule = (props) => {
  // Next router
  const router = useRouter();

  // Socket io from web service
  // const socket = io("http://localhost:5000");

  // socket.on("connect", () => {
  // either with send()
  //   socket.send("Hello!");
  // });

  // handle the event sent with socket.send()
  // socket.on("message", (event_ID) => {
  //   console.log(event_ID);
  // });

  // const shareEvent = (event_ID) => {
  //   socket.emit("message", event_ID);
  // };

  // Trash icon
  const trashIcon = <FontAwesomeIcon icon={faTrash} />;

  // For the fetch call
  const [schedule, setSchedule] = useState([]);

  // Set the fetch to current date
  const [curDate, setCurDate] = useState(new Date());

  // Message for failed delete
  const [failedDel, setFailedDel] = useState("");

  // Fetch the users schedule
  useEffect(() => {
    let url = "http://localhost:5000/schedule/" + curDate;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      switch (res.status) {
        case 400:
          router.push("/schedule/schedule");
          console.log("somethig went wrong");
          break;
        case 401:
          router.push("/login/login");
          break;
        case 204:
          console.log("no content");
          setSchedule([]);
          setLoading(false);
          break;
        case 200:
          res.json().then((data) => {
            setSchedule(data);
            setLoading(false);
          });
      }
    });
  }, [curDate]);

  // Fetch called on swipe completion
  const deleteEvent = (event_ID) => {
    let url = "http://localhost:5000/deleteEvent";
    fetch(url, {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({ event_ID }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 400) {
        router.push("/schedule/schedule");
        setFailedDel("Sorry we couldn't delete that right now");
      }
    });
  };

  // For swipeable delete
  const trailingActions = (event_ID) => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => deleteEvent(event_ID)}>
        <div className="bg-red-300 flex justify-center">
          <button className="m-auto text-lg font-extrabold">{trashIcon}</button>
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  const [loading, setLoading] = useState(true);

  // Fetch for add friend to event
  // const [friendID, setFriendID] = useState([]);

  // const [eventSent, setEventSent] = useState("");
  // const addFriendToEvent = (event_ID) => {
  //   let url = "http://localhost:5000/addFriendToEvent";
  //   fetch(url, {
  //     credentials: "include",
  //     method: "POST",
  //     body: JSON.stringify({ friendID, event_ID }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       setEventSent("event invite sent");
  //     }
  //     if (res.status === 400) {
  //       setEventSent("Sorry we could not do that for you right now");
  //     }
  //   });
  // };

  return (
    <Layout>
      {" "}
      <Head>
        <title>Schedule</title>{" "}
        <link rel="manifest" href="/manifest.json"></link>;
      </Head>
      <PageContent heading="Schedule" text="Check out your day below" />
      <Calendar
        className="w-full border-solid m-auto p-1 bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-300"
        onChange={setCurDate}
        value={curDate}
      />
      {schedule.length > 0 ? (
        <div className="text-left w-full lg:w-2/5 m-auto">
          <div className="container w-full mx-auto py-10 flex justify-center h-screen">
            <div className="w-full h-full flex flex-col">
              <div className="text-md text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300">
                My day
              </div>
              <div
                className="w-full h-full overflow-auto shadow"
                id="journal-scroll"
              >
                {schedule.map((schedule, event_ID) => (
                  <>
                    <SwipeableListItem
                      fullSwipe={true}
                      threshold={0.6}
                      trailingActions={trailingActions(schedule.event_ID)}
                      key={schedule.event_ID}
                      className="w-full relative transform scale-100 text-xs border-b-1 border-gray-300 cursor-default h-auto flex flex-wrap"
                    >
                      <div className="pl-5 w-1/2 mb-3">
                        <div className="leading-5 font-semibold">
                          {new Date(schedule.startDate)
                            .toDateString()
                            .slice(0, 10)}
                        </div>
                        <div>
                          <p>{schedule.startTime.slice(0, 5)}</p>
                          <p>{schedule.endTime.slice(0, 5)}</p>
                        </div>
                      </div>

                      <div className="pl-1 w-1/2">
                        <div className="leading-5 font-semibold">
                          {schedule.eventName}
                        </div>
                        <div className="leading-5 text-sm">
                          {schedule.eventDescription}
                        </div>
                      </div>
                      <div className="text-red-200">{failedDel}</div>
                      {/* <div className="w-1/6">
                      <input
                        className="border-2 border-indigo-300 h-7 w-7 rounded-md"
                        type="number"
                        name="friendID"
                        id="friendID"
                        value={friendID}
                        onChange={(e) => setFriendID(e.target.value)}
                      />
                      <button
                        className="border-2 bg-red-300 rounded-md h-7 w-7"
                        type="submit"
                        onClick={addFriendToEvent}
                      >
                        Go
                      </button>
                    </div> */}
                    </SwipeableListItem>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : !loading ? (
        <div className="text-left w-4/5 lg:w-2/5 m-auto font-bold py-8">
          Looks like you have nothing on today - Try the plus below!
        </div>
      ) : (
        <div className="text-left w-4/5 lg:w-2/5 m-auto font-bold py-8">
          <PacmanLoader loading={loading} size={25} />
        </div>
      )}
    </Layout>
  );
};

export default Schedule;
