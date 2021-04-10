import Link from "next/link";
import DateTime from "../../components/common/dateTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookOpen,
  faCog,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const bookIcon = <FontAwesomeIcon icon={faBookOpen} />;
  const settingsIcon = <FontAwesomeIcon icon={faCog} />;
  const addEventIcon = <FontAwesomeIcon icon={faPlus} />;

  return (
    <div className="h-autuo sticky w-full text-left m-auto flex flex-col pt-2 text-gray-500 bottom-0 bg-gray-200">
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
      </main>
      <main className="flex flex-row ml-1 mb-1">
        <DateTime />
      </main>
    </div>
  );
};

export default Header;
