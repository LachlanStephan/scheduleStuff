import Layout from "../../components/layout/layout";
import PageContent from "../common/pageContent";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import getID from "../common/getUserID";
import Head from "next/head";
import { useTheme } from "next-themes";
import { urlConfig } from "../../components/common/constants";

const Settings = () => {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const [updateName, setUpdateName] = useState("");
  const [logoutFail, setLogoutFail] = useState("");

  const onSubmit = (data) => {
    let url = urlConfig.url.API_URL_UPDATENAME;
    fetch(url, {
      method: "PATCH",
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
          router.push("/settings/settings");
          setUpdateName("sorry something went wrong");
        }
        if (data.status === 201) {
          router.push("/settings/settings");
          setUpdateName("Your name has been successfully changed");
        }
      });
  };

  const logout = () => {
    let url = urlConfig.url.API_URL_LOGOUT;
    fetch(url, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res)
      .then((data) => {
        console.log(data.status);
        if (data.status === 200) {
          router.push("/login/login");
        }
        if (data.status === 400) {
          router.push("/settings/settings");
          setLogoutFail("We couldn't log you out, try again later");
        }
      });
  };

  const [addMsg, setAddMsg] = useState("");
  const [friendID, setFriendID] = useState([]);
  const addFriend = () => {
    let url = urlConfig.url.API_URL_ADDFRIEND;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify([friendID]),
      credentials: "include",
    })
      .then((res) => res)
      .then((data) => {
        console.log(data.status);
        if (data.status === 400) {
          router.push("/settings/settings");
          setAddMsg("We couldn't add your friend right now, try again later");
        }
        if (data.status === 200) {
          setAddMsg("Your request has been sent");
        }
      });
  };

  const [valFriendIDmsg, setValFriendIDmsg] = useState("");
  const valFriendID = () => {
    if (friendID.length > 4) {
      setValFriendIDmsg("Please enter a valid freind request");
    } else {
      setValFriendIDmsg("");
    }
  };
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Layout>
      <Head>
        <title>Settings</title>{" "}
        <link rel="manifest" href="/manifest.json"></link>;
      </Head>
      <PageContent
        heading="Settings"
        subHeading=""
        text="Adjust your settings here"
      />

      <div className="min-h-screen pl-5 text-left">
        {" "}
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="h-5 w-5 text-xl hover:opacity-10 ease-in duration-300 ml-2 rounded my-2"
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        <div className="my-2">
          <h4 className="pb-2">{`Your user id: ${getID()}`}</h4>
        </div>
        <div className="my-2">
          <h4 className="pb-2">Add a friend by entering their userID below</h4>
          <form>
            <input
              className="border-2 border-indigo-400 rounded-xl pl-2 pr-2 shadow-md placeholder-gray-500"
              type="number"
              name="friendID"
              value={friendID}
              onBlur={valFriendID}
              required={true}
              ref={register({ required: true })}
              onChange={(e) => {
                setFriendID(e.target.value);
              }}
              placeholder="enter friend id"
            />
            <button
              className="w-14 pl-2 pr-2 shadow-md mb-2 border-2 border-indigo-400 rounded-xl"
              type="submit"
              onClick={() => addFriend()}
            >
              Go
            </button>
            <div>
              {addMsg}
              {valFriendIDmsg}
            </div>
          </form>
        </div>
        <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="pb-2">Change your name</h4>
          <input
            className="border-2 border-indigo-400 rounded-xl pl-2 pr-2 shadow-md placeholder-gray-500"
            type="text"
            name="newName"
            ref={register({ required: true })}
            placeholder="enter new name"
          />
          <button
            className="w-14 pl-2 pr-2 shadow-md mb-2 border-2 border-indigo-400 rounded-xl"
            type="submit"
          >
            Go
          </button>
          {errors.newName && "This cannot be blank"}
          <div className="text-black">{updateName}</div>
        </form>
        {/* <div className="my-2">
          <h4 className="pb-2">Change theme</h4>
          <button className="h-5 text-md w-5 hover:opacity-10 focus:opacity-30 ease-in duration-300 text-red-100">
            {changeThemeIcon}
          </button>
          <button className="h-5 w-5 text-md hover:opacity-10 focus:opacity-30 ease-in duration-300 text-green-100 ml-2">
            {changeThemeIcon}
          </button>
          <button className="h-5 w-5 text-md hover:opacity-10 focus:opacity-30 ease-in duration-300 text-blue-100 ml-2">
            {changeThemeIcon}
          </button>
          <hr className="pb-2 w-4/5 my-2"></hr>
        </div> */}
        <div className="pb-2">
          <button
            onClick={logout}
            className="border-2 rounded-xl p-1 bg-indigo-100"
          >
            Logout
          </button>
          <div className="text-red-300">{logoutFail}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
