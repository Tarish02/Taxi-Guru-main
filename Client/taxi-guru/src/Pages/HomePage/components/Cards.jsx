export default function Cards(props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 lg:px-4 md:px-20 mt-20">
        <div className="border border-black transform rotate-45">
          <div className=" h-32 w-32 border-8  border-primary hover:border-white  hover:bg-primary flex flex-col items-center justify-center">
            <div className="transform -rotate-45 ">
              <img src={props.image} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="mt-4 font-extrabold text-3xl text-shadow-lg">
          {props.title}
        </div>
        <div className="lg:text-2xl text-xl text-center ">
          {props.description}
        </div>
      </div>
    </>
  );
}
