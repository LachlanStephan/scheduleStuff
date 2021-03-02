const PageContent = (props) => {
  return (
    <div className="text-left w-full m-auto ml-5">
      <main className="my-9 py-1 w-full m-auto rounded-xl justify-center">
        <div className="text-green-600">
          <h1 className="p-2 font-extrabold text-3xl">{props.heading}</h1>
        </div>
        <div className="text-green-400 text-xl p-2 font-bold">
          <h5>{props.subHeading}</h5>
        </div>
        <div className="text-black p-2 font-bold text-md">{props.text}</div>
      </main>
    </div>
  );
};

export default PageContent;
