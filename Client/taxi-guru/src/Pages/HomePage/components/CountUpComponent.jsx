
import CountUp from "react-countup";
export default function CountUpComponent(props) {
  return (
    <div className="flex flex-col md:flex-row m-8 gap-4 items-center justify-center">
      <div>
        <div className="h-20 w-20 transform rotate-45 border border-black flex flex-col items-center justify-center m-4 bg-white">
          <div className="transform -rotate-45 ">
            <img src={props.image} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="">
        <div className=" text-center">
          <CountUp
            start={0}
            end={props.end}
              enableScrollSpy={true}
            className="font-bold text-5xl text-white  "
            suffix="+"
          ></CountUp>
        </div>
        <div className="uppercase text-3xl font-bold text-primary text-center" >
          {props.title}
        </div>
      </div>
    </div>
  );
}
