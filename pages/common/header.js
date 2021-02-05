import Link from "next/link";
import DateTime from "../../components/common/dateTime";

const Header = (props) => {
  return (
    <div className="w-4/5 lg:w-2/5 text-left m-auto flex flex-col mt-7 mb-7 rounded-xl text-gray-500 sticky top-0 bg-white">
      <main className="flex flex-row mb-2 py-4">
        <Link href="/">
          <a className="p-2 hover:text-gray-300 foucs:text-gray-300">Home</a>
        </Link>
        <Link href="/login/login">
          <a className="p-2 hover:text-gray-300 foucs:text-gray-300">Login</a>
        </Link>
        <Link href="/register/register">
          <a className="p-2 hover:text-gray-300 foucs:text-gray-300">
            Register
          </a>
        </Link>
        <Link href="/schedule/schedule">
          <a className="p-2 hover:text-gray-300 foucs:text-gray-300">
            Schedule
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
