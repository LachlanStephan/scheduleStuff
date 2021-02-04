import Layout from "../../components/layout/layout";
import Head from "next/head";
import PageContent from "../common/pageContent";

const Schedule = (props) => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>Schedule</title>
      </Head>
      <PageContent
        heading="Schedule goes here"
        subHeading="Users can view, update, delete and add their schedules"
        text="dniqwd dwqoijd qwjd dqwpojd q"
      />
    </Layout>
  );
};

export default Schedule;
