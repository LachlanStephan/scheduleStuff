import { useState, useEffect } from "react";
import { urlConfig } from "./constants";

const getID = () => {
  let url = urlConfig.url.API_URL_GETUSERID;

  const [id, setID] = useState("");
  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      credentials: "include",
    })
      .then((res) => res)
      .then((data) => {
        if (data.status === 400) {
          setID("unknown");
        }
        if (data.status === 200) {
          data.json().then((data) => {
            setID(data);
          });
        }
      });
  }, []);
  return id;
};

export default getID;
