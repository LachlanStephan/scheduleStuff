import Layout from "../../components/layout/layout";
import Head from "next/head";

const Schedule = (props) => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>Schedule</title>
      </Head>
      <div className="w-3/5 m-auto text-center">
        <div className="w-full text-left m-auto">
          <p>will be able to view/add/delete/update from this page</p>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
