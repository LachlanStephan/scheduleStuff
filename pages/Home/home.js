import Layout from "../../components/layout/layout";
import PageContent from "../common/pageContent";
import getUSerName from "../common/getUserName";
import getUserEvent from "../common/getNextEvent";

const Home = (props) => {
  return (
    <Layout>
      <title>Home</title>
      <PageContent
        heading="Schedule stuff"
        subHeading={`Hello  ${getUSerName()}`}
        text={`Your next event is ${getUserEvent()}`}
      />
      <div className="min-h-screen"></div>
    </Layout>
  );
};

export default Home;
