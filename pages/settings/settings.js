import Layout from "../../components/layout/layout";
import PageContent from "../common/pageContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush, faMoon, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

const Settings = () => {
  const darkmodeIcon = <FontAwesomeIcon icon={faMoon} />;
  const changeThemeIcon = <FontAwesomeIcon icon={faBrush} />;
  const updateNameIcon = <FontAwesomeIcon icon={faUserAlt} />;

  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const [updateName, setUpdateName] = useState("");

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
  return (
    <Layout>
      <PageContent
        heading="Settings"
        subHeading=""
        text="Adjust your settings here"
      />
      <div className="min-h-screen text-left">
        <div className="pl-5">
          <hr className="pb-2"></hr>
          <h4 className="pb-2">Dark mode</h4>
          <button className="hover:opacity-10 focus:opacity-10 ease-in duration-300">
            {darkmodeIcon}
          </button>
          <hr className="pb-2"></hr>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="pl-5">
          <hr className="pb-2"></hr>
          <h4 className="pb-2">Change your name</h4>
          {updateNameIcon}
          <input
            className="border-2 border-indigo-400 rounded-xl pl-2 pr-2 shadow-md placeholder-gray-200: ml-2"
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
          <div className="text-black">{updateName}</div>
          <hr className="pb-2"></hr>
        </form>
        <div className="pl-5">
          <hr className="pb-2"></hr>
          <h4 className="pb-2">Change theme</h4>
          <button className="hover:opacity-10 focus:opacity-10 ease-in duration-300 text-red-400">
            {changeThemeIcon}
          </button>
          <button className="hover:opacity-10 focus:opacity-10 ease-in duration-300 text-green-400 ml-2">
            {changeThemeIcon}
          </button>
          <button className="hover:opacity-10 focus:opacity-10 ease-in duration-300 text-indigo-400 ml-2">
            {changeThemeIcon}
          </button>
          <hr className="pb-2"></hr>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
