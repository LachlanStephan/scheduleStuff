import Layout from "../../components/layout/layout";
import PageContent from "../common/pageContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush, faMoon, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import getID from "../common/getUserID";

const Settings = () => {
  const darkmodeIcon = <FontAwesomeIcon icon={faMoon} />;
  const changeThemeIcon = <FontAwesomeIcon icon={faBrush} />;
  const updateNameIcon = <FontAwesomeIcon icon={faUserAlt} />;

  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const [updateName, setUpdateName] = useState("");
  const [logoutFail, setLogoutFail] = useState("");

  const onSubmit = (data) => {
    let url = "http://localhost:5000/updateName";
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
    let url = "http://localhost:5000/logout";
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
    let url = "http://localhost:5000/addFriend";
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

  return (
    <Layout>
      <PageContent
        heading="Settings"
        subHeading=""
        text="Adjust your settings here"
      />
      {/* got rid of dark mode - tailwind offers in built based off system settings */}
      <div className="min-h-screen pl-5 text-left">
        <div className="">
          <hr className="pb-2"></hr>
          <h4 className="pb-2">{`Your user id: ${getID()}`}</h4>
          <hr className="pb-2"></hr>
        </div>
        <div>
          <h4 className="pb-2">Add a friend by entering their userID below</h4>
          <input
            className="border-2 border-indigo-400 rounded-xl pl-2 pr-2 shadow-md placeholder-gray-300"
            type="number"
            name="friendID"
            value={friendID}
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
          <div>{addMsg}</div>
        </div>

        <hr className="pb-2"></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="pb-2">Change your name</h4>
          <input
            className="border-2 border-indigo-400 rounded-xl pl-2 pr-2 shadow-md placeholder-gray-300"
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
        <div className="">
          <hr className="pb-2"></hr>
          <h4 className="pb-2">Change theme</h4>
          <button className="h-5 text-xl w-5 hover:opacity-10 focus:opacity-30 ease-in duration-300 text-red-400">
            {changeThemeIcon}
          </button>
          <button className="h-5 w-5 text-xl hover:opacity-10 focus:opacity-30 ease-in duration-300 text-green-400 ml-2">
            {changeThemeIcon}
          </button>
          <button className="h-5 w-5 text-xl hover:opacity-10 focus:opacity-30 ease-in duration-300 text-indigo-400 ml-2">
            {changeThemeIcon}
          </button>
          <hr className="pb-2"></hr>
        </div>
        <div className="pb-2">
          <button
            onClick={logout}
            className="border-2 rounded-xl p-1 bg-indigo-100"
          >
            Logout
          </button>
          <div className="text-red-300">{logoutFail}</div>
        </div>
        <hr className="py-2"></hr>
      </div>
    </Layout>
  );
};

export default Settings;
