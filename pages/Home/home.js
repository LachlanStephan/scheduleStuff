import { useState } from "react";

const Home = (props) => {
  return (
    <div className="w-3/5 m-auto flex flex-col">
      <main className="my-9 p-2 w-full m-auto rounded-xl text-green-500 bg-gray-100">
        <h2>{props.title}</h2>
      </main>
      <div className="w-full m-auto text-center">
        <h2>hi there</h2>
        <p>something about the app</p>
      </div>
    </div>
  );
};

export default Home;
