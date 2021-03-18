import { useState } from "react";
import Layout from "../../components/layout/layout";
import PageContent from "../common/pageContent";

const Home = (props) => {
  // Add fetch to show user their next event

  return (
    <Layout>
      <title>Home</title>
      <PageContent
        heading="Home"
        subHeading="Welcome to scheduleStuff"
        text="Hello user, your next event is"
      />
      <div className="min-h-screen"></div>
    </Layout>
  );
};

export default Home;
