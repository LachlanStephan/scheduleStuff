import Link from "next/link";
import DateTime from "../../components/common/dateTime";

const Header = (props) => {
  return (
    <div className="w-3/5 m-auto flex flex-col p-2 rounded-xl">
      <main className="flex flex-row m-auto">
        <Link href="/">
          <a className="p-2 hover:text-gray-300 text-green-500">Home</a>
        </Link>
        <Link href="/login/login">
          <a className="p-2 hover:text-gray-300 text-green-500">Login</a>
        </Link>
        <Link href="/register/register">
          <a className="p-2 hover:text-gray-300 text-green-500">Register</a>
        </Link>
      </main>
      <main className="flex flex-row m-auto">
        <Link href="/schedule/schedule">
          <a className="p-2 hover:text-gray-300 text-green-500">Schedule</a>
        </Link>
      </main>
      <div className="w-full">
        <DateTime />
      </div>
    </div>
  );
};

export default Header;
