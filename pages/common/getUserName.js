import { react, useEffect, useState } from "react";

const getUSerName = (props) => {
  let url = "http://localhost:5000/getUserName";
  const [userName, setuserName] = useState("");
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
        if (data.status === 400) {
          setuserName("Sorry we couldn't get your user name");
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
export default getUSerName;
