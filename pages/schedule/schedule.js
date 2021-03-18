import Layout from "../../components/layout/layout";
import Head from "next/head";
import PageContent from "../common/pageContent";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/router";

const Schedule = (props) => {
  // Next router
  const router = useRouter();

  // For react-calendar
  const [value, onChange] = useState(new Date());

  // For the fetch call
  const [schedule, setSchedule] = useState([]);

  // Fetch the schedule data per user
  useEffect(() => {
    let url = "http://localhost:5000/schedule";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      switch (res.status) {
        case 400:
          console.log("somethig went wrong");
          break;
        case 401:
          router.push("/login/login");
          break;
        case 204:
          console.log("no content");
          break;
        case 200:
          res.json().then((data) => {
            setSchedule(data);
          });
      }
    });
  }, []);

  return (
    <Layout>
      {" "}
      <Head>
        <title>Schedule</title>{" "}
      </Head>
      <PageContent
        heading="Schedule"
        subHeading="hi there user!"
        text="Check out your day below"
      />
      <Calendar
        className="w-full border-solid m-auto"
        onChange={onChange}
        value={value}
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
                  <table key={index} className="w-full">
                    <tbody className="">
                      <tr className="relative transform scale-100 text-xs py-1 border-b-2 border-blue-100 cursor-default">
                        <td className="pl-5 pr-3 whitespace-no-wrap">
                          <div className="text-gray-600">
                            {schedule.startDate}
                          </div>
                          <div>
                            <p>{schedule.startTime}</p>
                            <p>{schedule.endTime}</p>
                          </div>
                        </td>

                        <td className="px-2 py-2 whitespace-no-wrap">
                          <div className="leading-5 text-gray-500 font-bold text-lg">
                            {schedule.eventName}
                          </div>
                          <div className="leading-5 text-gray-900 text-md">
                            {schedule.eventDescription}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-left w-4/5 lg:w-2/5 m-auto font-bold">
          Looks like you have nothing on today
        </div>
      )}
    </Layout>
  );
};

export default Schedule;
