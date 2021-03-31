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

const Schedule = (props) => {
  // Next router
  const router = useRouter();

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
          break;
        case 200:
          res.json().then((data) => {
            setSchedule(data);
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
          <button className="m-auto">{trashIcon}</button>
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <Layout>
      {" "}
      <Head>
        <title>Schedule</title>{" "}
      </Head>
      <PageContent heading="Schedule" text="Check out your day below" />
      <Calendar
        className="w-full border-solid m-auto p-1"
        onChange={setCurDate}
        value={curDate}
      />
      {schedule.length > 0 ? (
        <div className="text-left w-full lg:w-2/5 m-auto">
          <div className="container w-full mx-auto py-10 flex justify-center h-screen">
            <div className="w-full h-full flex flex-col">
              <div className="bg-white text-sm text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300">
                My day
              </div>
              <div
                className="w-full h-full overflow-auto shadow bg-white"
                id="journal-scroll"
              >
                {schedule.map((schedule, index) => (
                  <SwipeableListItem
                    fullSwipe={true}
                    threshold={0.6}
                    trailingActions={trailingActions(schedule.event_ID)}
                    key={schedule.event_ID}
                    className="w-full relative transform scale-100 text-xs py-1 border-b-2 border-blue-100 cursor-default"
                  >
                    <div className="pl-5 pr-3 whitespace-no-wrap w-1/2">
                      <div className="text-gray-600">
                        {new Date(schedule.startDate)
                          .toDateString()
                          .slice(0, 10)}
                      </div>
                      <div>
                        <p>{schedule.startTime.slice(0, 5)}</p>
                        <p>{schedule.endTime.slice(0, 5)}</p>
                      </div>
                      <hr className="p-1"></hr>
                    </div>

                    <div className="px-1 py-1 whitespace-no-wrap w-1/2">
                      <div className="leading-5 text-gray-500 font-semibold text-lg">
                        {schedule.eventName}
                      </div>
                      <div className="leading-5 text-gray-900 text-sm">
                        {schedule.eventDescription}
                      </div>
                    </div>
                    <div className="text-red-200">{failedDel}</div>
                  </SwipeableListItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-left w-4/5 lg:w-2/5 m-auto font-bold py-8">
          Looks like you have nothing on today - Try the plus below!
        </div>
      )}
    </Layout>
  );
};

export default Schedule;
