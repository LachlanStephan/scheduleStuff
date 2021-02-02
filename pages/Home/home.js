import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { useState } from "react";

const Home = (props) => {
  return (
    <div>
      <main className="my-9 p-2 w-4/5 m-auto rounded-xl text-green-500 bg-gray-100">
        <h2>{props.title}</h2>
      </main>
    </div>
  );
};

export default Home;
