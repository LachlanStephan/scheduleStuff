const PageContent = (props) => {
  return (
    <div className="text-center w-full m-auto">
      <main className="my-3 py-1 w-full m-auto rounded-xl justify-center">
        <div className="">
          <h1 className="p-2 font-extrabold text-3xl" id="heading">
            {props.heading}
          </h1>
        </div>
        <div className="text-xl p-2 font-bold">
          <h5>{props.subHeading}</h5>
        </div>
        <div className="p-2 font-bold text-md" id="text">
          {props.text}
        </div>
      </main>
    </div>
  );
};

export default PageContent;
