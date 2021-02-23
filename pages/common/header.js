import Link from "next/link";
import DateTime from "../../components/common/dateTime";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faSignInAlt,
  faUserAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const bookIcon = <FontAwesomeIcon icon={faBook} />;
  const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />;
  const regIcon = <FontAwesomeIcon icon={faUserAlt} />;
  const settingsIcon = <FontAwesomeIcon icon={faCog} />;

  return (
    <div className="w-4/5 lg:w-2/5 text-left m-auto flex flex-col mt-0 mb-7 rounded-xl text-gray-500 sticky top-0 bg-white">
      <main className="flex flex-row mb-2 py-4">
        <Link href="/">
          <a className="p-2 hover:text-gray-300 foucs:text-gray-300">
            {homeIcon}
          </a>
        </Link>
        <Link href="/schedule/schedule">
          <a className="p-2 hover:text-gray-300 foucs:text-gray-300">
            {bookIcon}
          </a>
        </Link>
        <Link href="/login/login">
          <a className="p-2 hover:text-gray-300 foucs:text-gray-300">
            {loginIcon}
          </a>
        </Link>
        <Link href="/register/register">
          <a className="p-2 hover:text-gray-300 foucs:text-gray-300">
            {regIcon}
          </a>
        </Link>
        <Link href="/settings/settings">
          <a className="p-2 hover:text-gray-300 foucs:text-gray-300">
            {settingsIcon}
          </a>
        </Link>
      </main>
      <main className="flex flex-row mb-2 py-1">
        <DateTime />
      </main>
    </div>
  );
};

export default Header;
