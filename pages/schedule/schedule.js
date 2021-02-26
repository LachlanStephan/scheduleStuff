import Layout from "../../components/layout/layout";
import Head from "next/head";
import PageContent from "../common/pageContent";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

const Schedule = (props) => {
  const [value, onChange] = useState(new Date());

  // const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   let fetchUrl = "http://localhost:5000/users";
  //   fetch(fetchUrl)
  //     .then((res) => res.json())
  //     .then((people) => {
  //       console.log(people);
  //       setPeople(people);
  //     });
  //   console.log("check");
  // }, []);

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
      </div>
      {/* {people.length > 0 ? (
        <div className="text-left w-4/5 lg:w-2/5 m-auto">
          {people.map((users, index) => (
            <div className="font-bold pt-2" key={index}>
              <p>{users.fName}</p>
              <p>{users.lName}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-left w-4/5 lg:w-2/5 m-auto font-bold">
          Loading...
        </div>
      )} */}
    </Layout>
  );
};

export default Schedule;
