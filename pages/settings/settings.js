import Layout from "../../components/layout/layout";
import PageContent from "../common/pageContent";

const Settings = () => {
  return (
    <Layout>
      <PageContent
        heading="Settings"
        subHeading=""
        text="Adjust your settings here"
      />
      <div class="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul class="flex flex-col p-4">
          <li class="border-gray-400 flex flex-row mb-2">
            <div class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-green-400">
              <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">dark mode</div>
              </div>
              <div class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-indigo-500 justify-center items-center mr-10 p-2">
                on
              </div>
            </div>
          </li>{" "}
          <li class="border-gray-400 flex flex-row mb-2">
            <div class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-green-400">
              <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">dark mode</div>
              </div>
              <div class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-indigo-500 justify-center items-center mr-10 p-2">
                on
              </div>
            </div>
          </li>{" "}
          <li class="border-gray-400 flex flex-row mb-2">
            <div class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-green-400">
              <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">dark mode</div>
              </div>
              <div class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-indigo-500 justify-center items-center mr-10 p-2">
                on
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Settings;
