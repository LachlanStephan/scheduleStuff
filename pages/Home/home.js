import { useState } from "react";
import Layout from "../../components/layout/layout";
import PageContent from "../common/pageContent";

const Home = (props) => {
  return (
    <Layout>
      <title>Home</title>
      <PageContent
        heading="Home"
        subHeading="Welcome to scheduleStuff"
        text="blah blah blah"
      />{" "}
      <PageContent
        heading="Info"
        subHeading="info to scheduleStuff"
        text="blah blah blah"
      />{" "}
      <PageContent
        heading="oqwdnio"
        subHeading="Welcome to scheduleStuff"
        text="blah blah blah"
      />
      <PageContent subHeading="something about the app" text="blah blah blah" />{" "}
    </Layout>
  );
};

export default Home;
