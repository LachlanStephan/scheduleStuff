import { useEffect, useState } from "react";

const getUserEvent = (props) => {
  let url = "http://localhost:5000/getUserEvent";
  let prodUrl = "https://schedule-stuff.herokuapp.com/getUserEvent";
  const [userEvent, setUserEvent] = useState("");

  useEffect(() => {
    fetch(prodUrl || url, {
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
