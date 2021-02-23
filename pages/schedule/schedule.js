import Layout from "../../components/layout/layout";
import Head from "next/head";
import PageContent from "../common/pageContent";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { data } from "autoprefixer";

const Schedule = (props) => {
  const [value, onChange] = useState(new Date());

  const [people, setPeople] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = "http://localhost:5000/users";
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((people) => {
        console.log(people);
        setPeople(people);
      });
    console.log("check");
  }, []);

  return (
    <Layout>
      {" "}
      <Head>
        <title>Schedule</title>
      </Head>
      <PageContent heading="Schedule" subHeading="" text="" />
      <div className="w-4/5 m-auto border-2 border-gray-300 p-6 rounded-md">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="text-left w-4/5 lg:w-2/5 m-auto">
        {people.map((users, index) => (
          <div className="font-bold pt-2" key={index}>
            <p>{users.fName}</p>
            <p>{users.lName}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Schedule;
