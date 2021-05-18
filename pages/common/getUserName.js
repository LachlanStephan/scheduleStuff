import { react, useEffect, useState } from "react";

const getUserName = (props) => {
  let url = "http://localhost:5000/getUserName";
  let prodUrl = process.env.getUser_Name;
  const [userName, setuserName] = useState("");
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
        if (data.status === 400) {
          setuserName("unknown");
        }
        if (data.status === 200) {
          data.json().then((data) => {
            setuserName(data.fName);
          });
        }
      });
  }, []);

  return userName;
};
export default getUserName;
