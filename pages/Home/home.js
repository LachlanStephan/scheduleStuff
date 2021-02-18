import { useState } from "react";
import PageContent from "../common/pageContent";

const Home = (props) => {
  return (
    <>
      <PageContent
        heading="Home"
        subHeading="Welcome to scheduleStuff"
        text="blah blah blah"
      />
      <PageContent
        heading="About the app"
        subHeading="something about the app"
        text="blah blah blah"
      />{" "}
      <PageContent
        heading="maybe more info"
        subHeading="could be more info"
        text="blah blah blah"
      />{" "}
    </>
  );
};

export default Home;
