import Footer from "../../Common/components/Footer";
import ServiceData from "./data/ServiceData";
import { Link } from "react-router-dom";

export default function Services() {
  const data = ServiceData["main"];
  return (
    <div>
      <div className=" ">
        <img
          src={data["div1"]["imgPath"]}
          className="h-[100%] w-full bg-cover object-cover md:h-[60vh]"
          alt="error"
        />
      </div>
      <div className="flex flex-col items-center relative bottom-16  ">
        <div className=" flex flex-col gap-8 w-[90%] md:w-[80%] bg-white rounded-full">
          <div className="flex gap-4 border-4 p-4 rounded-3xl lg:flex-row flex-col bg-white ">
            <div className="flex-1 ">
              <img
                className="w-full h-full  object-center object-cover"
                src={data["div2"]["imgPath"]}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className=" flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-center ">
                  {data["div2"]["text1"]}
                </h1>

                <p className="text-center text-xl md:text-2xl  ">
                  {data["div2"]["text2"]}
                </p>
                <div className="text-center">
                <Link to="/contact-us">
                  <button className="bg-primary text-black px-8 py-4 rounded-full text-3xl font-medium">
                    Learn More
                    </button>
                    </Link>

                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 border-4 p-4 rounded-3xl lg:flex-row flex-col ">
            <div className="flex-1">
              <div className=" flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-center ">
                  {data["div3"]["text1"]}
                </h1>

                <p className="text-center text-xl md:text-2xl  ">
                  {data["div3"]["text2"]}
                </p>
                <div className="text-center">
                <Link to="/contact-us">
                  <button className="bg-primary text-black px-8 py-4 rounded-full text-3xl font-medium">
                    Learn More
                    </button>
                    </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 ">
              <img
                className="w-full h-full  object-center object-cover"
                src={data["div3"]["imgPath"]}
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-4 border-4 p-4 rounded-3xl lg:flex-row flex-col ">
            <div className="flex-1 ">
              <img
                className="w-full h-full  object-center object-cover"
                src={data["div1"]["imgPath"]}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className=" flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-center ">
                  {data["div4"]["text1"]}
                </h1>

                <p className="text-center text-xl md:text-2xl  ">
                  {data["div4"]["text2"]}
                </p>
                <div className="text-center">
                <Link to="/contact-us">
                  <button className="bg-primary text-black px-8 py-4 rounded-full text-3xl font-medium">
                    Learn More
                    </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
}
