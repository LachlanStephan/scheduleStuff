import { useEffect, useState } from "react";
import { urlConfig } from "../../components/common/constants";

const getUserName = (props) => {
  let url = urlConfig.url.API_URL_GETUSERNAME;
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
