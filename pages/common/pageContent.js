const PageContent = (props) => {
  return (
    <div className="text-left w-4/5 lg:w-2/5 m-auto">
      <main className="my-9 py-1 w-full m-auto rounded-xl justify-center">
        <div className="text-black">
          <h1 className="p-2 font-extrabold text-3xl">{props.heading}</h1>
        </div>
        <div className="text-black text-xl p-2 font-semibold">
          <h5>{props.subHeading}</h5>
        </div>
        <div className="text-gray-500 p-2 font-light text-lg">{props.text}</div>
      </main>
    </div>
  );
};

export default PageContent;
