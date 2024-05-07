export default function DiamondComponent(props) {
  return (
    <div className="flex-col justify-center lg:mx-8  mt-8">
      <div className=" flex justify-center items-center"></div>
      <div className=" flex justify-center">
        <div className="h-20 w-20 transform rotate-45  flex flex-col items-center justify-center bg-white">
          <div className="transform -rotate-45 ">
            <img src={props.image} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="mx-4  mt-8 ">
        <div className=" uppercase text-3xl font-bold   text-white text-center text-[25px] md:text-[32px]">
        {/* {props.title} */}
          <p className="xs:text-[20px] ">{props.title} </p>
        </div>
      </div>
    </div>
  );
}
