import { useEffect, useState } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanUp() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-row text-gray-500 justify-left">
      <div className="text-sm p-1">{date.toLocaleDateString()}</div>
      <div className="text-sm p-1">{date.toLocaleTimeString()}</div>
    </div>
  );
};

export default DateTime;
