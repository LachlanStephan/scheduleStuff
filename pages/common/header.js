import Link from "next/link";
import DateTime from "../../components/common/dateTime";

const Header = (props) => {
  return (
    <div className="w-4/5 m-auto flex flex-row justify-evenly p-2 rounded-xl ">
      <DateTime />
      <main className="flex flex-row">
        <Link href="/">
          <a className="p-2 hover:text-gray-300 text-green-500">Home</a>
        </Link>
        <Link href="/login/login">
          <a className="p-2 hover:text-gray-300 text-green-500">Login</a>
        </Link>
      </main>
    </div>
  );
};

export default Header;
