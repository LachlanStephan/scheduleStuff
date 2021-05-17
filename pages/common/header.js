import Link from "next/link";
import DateTime from "../../components/common/dateTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookOpen,
  faCog,
  faPlus,
  faUserCog,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Header = (props) => {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const bookIcon = <FontAwesomeIcon icon={faBookOpen} />;
  const settingsIcon = <FontAwesomeIcon icon={faCog} />;
  const addEventIcon = <FontAwesomeIcon icon={faPlus} />;
  const adminIcon = <FontAwesomeIcon icon={faUserCog} />;

  // Check if admin
  const [adminLink, setAdminLink] = useState("");
  useEffect(() => {
    let url = "http://localhost:5000/checkAdmin";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "GET",
    }).then((res) => {
      console.log(res.status, "checkAdmin");
      if (res.status === 403) {
        setAdminLink("");
      }
      if (res.status === 201) {
        setAdminLink("/admin/admin");
      }
    });
  }, []);

  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="h-autuo w-full text-left m-auto flex flex-col pt-2 fixed bottom-0 bg-gray-300 dark:bg-gray-800">
      <main className="text-xl m-2 flex p-1 flex-row py-2 justify-evenly">
        <Link href="/home/home">
          <a className="h-5 w-5 hover:text-gray-300 foucs:text-gray-300">
            {homeIcon}
          </a>
        </Link>
        <Link href="/schedule/schedule">
          <a className="h-5 w-5 hover:text-gray-300 foucs:text-gray-300">
            {bookIcon}
          </a>
        </Link>
        <Link href="/schedule/addSchedule/addSchedule">
          <a className="h-5 w-5 hover:text-gray-300 foucs:text-gray-300">
            {addEventIcon}
          </a>
        </Link>
        <Link href="/settings/settings">
          <a className="h-5 w-5 hover:text-gray-300 foucs:text-gray-300">
            {settingsIcon}
          </a>
        </Link>
        <div>
          <Link href={adminLink}>
            <a className="h-5 w-5 hover:text-gray-300 focus:text-gray-300">
              {adminLink.length > 0 ? adminIcon : ""}
            </a>
          </Link>
        </div>
        <div>
          <div
            onClick={() => {
              setShowHelp(!showHelp);
            }}
          >
            ?
          </div>
          {!showHelp ? <div></div> : <div>show silly tips</div>}
        </div>
      </main>
      <main className="flex flex-row ml-1 mb-1">
        <DateTime />
      </main>
    </div>
  );
};

export default Header;
