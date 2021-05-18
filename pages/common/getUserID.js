import { useState, useEffect } from "react";
const getID = () => {
  let url = "http://localhost:5000/getID";
  let prodUrl = process.env.get_ID;
  const [id, setID] = useState("");
  useEffect(() => {
    fetch(prodUrl || url, {
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
