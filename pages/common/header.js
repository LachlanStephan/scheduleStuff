import Link from "next/link";
import DateTime from "../../components/common/dateTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faCog,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const bookIcon = <FontAwesomeIcon icon={faBook} />;
  const settingsIcon = <FontAwesomeIcon icon={faCog} />;
  const addEventIcon = <FontAwesomeIcon icon={faPlus} />;

  return (
    <div className="h-autuo sticky w-full text-left m-auto flex flex-col pt-2 text-gray-500 bottom-0 bg-gray-200">
      <main className="flex ml-1 flex-row py-2 justify-evenly">
        <Link href="/home/home">
          <a className="hover:text-gray-300 foucs:text-gray-300">{homeIcon}</a>
        </Link>
        <Link href="/schedule/schedule">
          <a className="hover:text-gray-300 foucs:text-gray-300">{bookIcon}</a>
        </Link>
        <Link href="/schedule/addSchedule/addSchedule">
          <a className="hover:text-gray-300 foucs:text-gray-300">
            {addEventIcon}
          </a>
        </Link>
        <Link href="/settings/settings">
          <a className="hover:text-gray-300 foucs:text-gray-300">
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
