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

  fetch("http://localhost:5000/schedule")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <Layout>
      {" "}
      <Head>
        <title>Schedule</title>
      </Head>
      {/* <div className="w-4/5 border-2 h-auto p-2 m-auto">
        {this.state.text.map((row, id) => (
          <div className="text-red" key={id}>
            <p className="pb-2">suburb: {this.state.text.suburb}</p>
          </div>
        ))}
      </div> */}
      {/* <div className="w-4/5 border-2 h-auto p-2 m-auto">
        <ul>
          {burbs.map((burbs, index) => (
            <li>{burbs.suburb}</li>
          ))}
        </ul> */}
      {/* <select>{values}</select> */}
      {/* </div> */}
      <PageContent heading="Schedule" subHeading="" text="" />
      <div className="w-full m-auto border-2 border-gray-300 p-6 rounded-md">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="text-left w-4/5 lg:w-2/5 m-auto">
        {/* <form className="py-9">
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="7am">
              7am
            </label>
            <input type="text" name="7am" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="8am">
              8am
            </label>
            <input type="text" name="8am" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="9am">
              9am
            </label>
            <input type="text" name="9am" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="10am">
              10am
            </label>
            <input type="text" name="10am" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="11am">
              11am
            </label>
            <input type="text" name="11am" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="12pm">
              12pm
            </label>
            <input type="text" name="12pm" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="1pm">
              1pm
            </label>
            <input type="text" name="1pm" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="2pm">
              2pm
            </label>
            <input type="text" name="2pm" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="3am">
              3pm
            </label>
            <input type="text" name="3m" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="4pm">
              4pm
            </label>
            <input type="text" name="4pm" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="5pm">
              5pm
            </label>
            <input type="text" name="5am" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="6pm">
              6pm
            </label>
            <input placeholder="Lorem Ipsum" type="text" name="6pm" />
          </div>
          <div className="w-full mb-8">
            <label className="font-bold p-1" htmlFor="7pm">
              7pm
            </label>
            <input type="text" name="7pm" placeholder="Lorem Ipsum" />
          </div>
          <div className="w-full mb-4">
            <button
              type="submit"
              className="p-1  my-4 text-gray-500 hover:text-gray-300 focus:text-gray-300 font-extrabold"
            >
              Submit
            </button>
          </div>
        </form> */}
      </div>
    </Layout>
  );
};

export default Schedule;
