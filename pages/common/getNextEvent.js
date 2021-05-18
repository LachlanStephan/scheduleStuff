import { useEffect, useState } from "react";
import { urlConfig } from "./constants";

const getUserEvent = (props) => {
  let url = urlConfig.url.API_URL_GETUSEREVENT;
  const [userEvent, setUserEvent] = useState("");

  useEffect(() => {
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res)
      .then((data) => {
        console.log(data.status, "getEvent");
        if (data.status === 400) {
          setUserEvent("No upcoming events");
        }
        if (data.status === 204) {
          setUserEvent("No upcoming events");
        }
        if (data.status === 200) {
          data.json().then((data) => {
            setUserEvent(data.eventName);
          });
        }
      });
  }, []);

  return userEvent;
};
export default getUserEvent;
