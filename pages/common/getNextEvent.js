import { useEffect, useState } from "react";

const getUserEvent = (props) => {
  let url = "http://localhost:5000/getUserEvent";
  const [userEvent, setUserEvent] = useState("");
  useEffect(() => {
    fetch(url, {
      method: "GET",
      credentials: "include",
      headerser: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res)
      .then((data) => {
        if (data.status === 400) {
          setUserEvent("Sorry we couldn't get your next event");
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
