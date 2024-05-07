import Customercare from "/images/home/CustomerCare.png";
import home_taxi from "/images/home/Taxi.png";
import home_taxi2 from "/images/home/taxi2.png";

export default function HowItWorks() {
  return (
    <div className="my-8">
      <div className="bg-black text-primary">
        <div className="text-3xl p-4 font-bold text-center">HOW IT WORKS</div>
        <div className="flex justify-around py-4 pb-8 flex-col md:flex-row gap-y-8">
          <div className="flex flex-col items-center justify-center  gap-3 text-center   ">
            <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center p-2">
              <img src={Customercare} alt="" />
            </div>
            <div className="text-xl">Call</div>
          </div>
          <div className="flex flex-col items-center justify-center  gap-3">
            <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center p-2">
              <img src={home_taxi} alt="" />
            </div>
            <div className="text-xl">Choose a car</div>
          </div>
          <div className="flex flex-col items-center justify-center  gap-3">
            <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center p-2">
              <img src={home_taxi2} className="scale-110" alt="" />
            </div>
            <div className="text-xl">Enjoy the ride</div>
          </div>
        </div>
      </div>
    </div>
  );
}
