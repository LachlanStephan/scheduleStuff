import Layout from "../../components/layout/layout";
import Head from "next/head";
import PageContent from "../common/pageContent";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

const Schedule = (props) => {
  // const [burbs, setBurbs] = useState([]);

  // React.useEffect(function effectFunction() {
  //   async function fetchData() {
  //     console.log("test1");
  //     const resp = await fetch(
  //       "http://localhost:5000/api/schedule/schedule.json",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       }
  //     );
  //     console.log(resp);
  //     console.log("test2");
  //     const json = await resp.json();
  //     setBurbs(json.data);
  //   }
  //   fetchData();
  // }, []);
  const [value, onChange] = useState(new Date());

  // fetch("http://localhost:5000/schedule")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  return (
    <Layout>
      {" "}
      <Head>
        <title>Schedule</title>
      </Head>
      <PageContent heading="Schedule" subHeading="" text="" />
      <div className="w-full m-auto border-2 border-gray-300 p-6 rounded-md">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="text-left w-4/5 lg:w-2/5 m-auto"></div>
    </Layout>
  );
};

export default Schedule;
