import Layout from "../../components/layout/layout";
import Head from "next/head";
import PageContent from "../common/pageContent";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Link from "next/link";

const Schedule = (props) => {
  const [value, onChange] = useState(new Date());

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    let fetchUrl = "http://localhost:5000/schedule";
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((schedule) => {
        setSchedule(schedule);
        console.log(schedule);
      });
    console.log("check");
  }, []);

  return (
    <Layout>
      {" "}
      <Head>
        <title>Schedule</title>
      </Head>
      <PageContent
        heading="Schedule"
        subHeading="hi there user!"
        text="Check out your day below"
      />
      <div className="w-screen m-auto text-center lg:w-2/5 rounded-md">
        <Calendar className="p-5 w-screen" onChange={onChange} value={value} />
        <button>
          <Link href="/schedule/addSchedule/addSchedule">Add event</Link>
        </button>
      </div>
      {schedule.length > 0 ? (
        <div className="text-left w-4/5 lg:w-2/5 m-auto">
          {schedule.map((schedule, index) => (
            <div className="pt-2" key={index}>
              <div className="py-2">
                <h5 className="font-bold">Event</h5>
                <p>
                  {schedule.startTime}-{schedule.eventName}
                </p>
              </div>
              <div className="py-4">
                <h5 className="font-bold">description</h5>
                <p>{schedule.eventDescription}</p>
              </div>
            </div>
          ))}
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
