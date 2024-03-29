import Layout from "../../../components/layout/layout";
import Head from "next/head";
import PageContent from "../../common/pageContent";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { urlConfig } from "../../../components/common/constants";

const AddSchedule = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const router = useRouter();
  const [addEventErrMsg, setaddEventErrMsg] = useState("");

  const onSubmit = (data) => {
    let url = urlConfig.url.API_URL_ADDSCHEDULE;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res)
      .then((data) => {
        console.log(data.status);
        if (data.status === 400) {
          router.push("/schedule/addSchedule/addSchedule");
          setaddEventErrMsg("Something went wrong, try again");
        }
        if (data.status === 422) {
          setaddEventErrMsg("You have entered invalid input");
        }
        if (data.status === 201) {
          router.push("/schedule/schedule");
        }
      });
  };

  return (
    <Layout>
      {" "}
      <Head>
        <title>Add schedule</title>{" "}
        <link rel="manifest" href="/manifest.json"></link>;
      </Head>
      <PageContent heading="Add event" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lex flex-col justify-center w-full h-auto overflow-auto"
      >
        <div className="relative sm:max-w-xl sm:mx-auto h-auto overflow-auto">
          <div className="text-red-300 pl-5">{addEventErrMsg}</div>
          <div className="relative px-4 pb-4 md:mx-0 shadow sm:p-10 w-full">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-2 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Event Title</label>
                    <input
                      name="eventTitle"
                      ref={register({ required: true })}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                      placeholder="Event title"
                    />
                    <div className="text-red-300">
                      {errors.eventTitle && "Event title is required"}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Start time</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          name="startTime"
                          type="text"
                          ref={register({ required: true })}
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="09:00:00"
                        />
                        <div className="text-red-300">
                          {errors.startTime && "Start time is required"}
                        </div>
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose">End time</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          name="endTime"
                          type="text"
                          ref={register({ required: true })}
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="14:00:00"
                        />

                        <div className="text-red-300">
                          {errors.endTime && "End time is required"}
                        </div>
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Start date</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          name="startDate"
                          type="text"
                          ref={register({ required: true })}
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="2021-03-15"
                        />
                        <div className="text-red-300">
                          {errors.startDate && "Start date is required"}
                        </div>
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose">End date</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          name="endDate"
                          type="text"
                          ref={register({ required: true })}
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="2020-03-15"
                        />
                        <div className="text-red-300">
                          {errors.endDate && "End date is requred"}
                        </div>
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Event Description</label>
                    <input
                      name="eventDesc"
                      type="text"
                      ref={register({ required: true })}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                    <div className="text-red-300">
                      {errors.eventDesc && "Event description is required"}
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                    <Link href="/schedule/schedule">
                      <a>
                        <svg
                          className="w-6 h-6 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                          Cancel
                        </svg>{" "}
                      </a>
                    </Link>
                  </button>
                  <button className="bg-indigo-400 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default AddSchedule;
