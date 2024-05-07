import Cards from "./components/Cards";
import home_taxi from "/images/home/home_taxi.png";
import CountUpComponent from "./components/CountUpComponent";
import Footer from "../../Common/components/Footer";
import TabBar from "./components/TabBar";
import about_img from "/images/home/Customer.png";
import { Link } from "react-router-dom";
import services_img from "/images/home/Taxi.png";
import Contactform_img from "/images/home/Contactform.png";
import rupi from "/images/home/Rupee.png";
import Speed from "/images/home/Speed.png";
import Customercare from "/images/home/CustomerCare.png";
import car1 from "/images/home/sedan.png";
import car2 from "/images/home/suv.png";
import car3 from "/images/home/hatchback.png";
export default function HomePage() {
  return (
    <div>
      <div>
        <div
          className={`bg-cover bg-center md:h-screen  h-[35vh]   bg-no-repeat bg-[url('/images/home/home_1.jpeg')] flex justify-center items-center`}
        >
          <div className="font-extrabold lg:text-8xl md:text-6xl text-5xl text-white  text-center">
            &ldquo;Let&apos;s roll! Book your taxi!&rdquo;
          </div>
        </div>
        {/* TAB  */}
        <div>
          <TabBar />
        </div>

        <div className="items-center text-center ">
          <div className=" flex justify-center my-3 lg:my-4  ">
            <img
              src={home_taxi}
              alt=""
              className="lg:h-[100px] lg:w-[250px] w-[180px] h-[70px]"
            />
          </div>
          <p className="md:text-4xl text-2xl font-bold text-shadow-lg  py-4">
            BOOK YOUR CARS WE SERVE
          </p>
          <p className="md:text-3xl text-xl px-1 text-wrap text-shadow-lg ">
            Ready to hit the road? At the taxi guru, your journey begins with a
            simple click.
          </p>
        </div>

        <div className="lg:flex justify-around   lg:px-10 px-5 items-start lg:gap-x-20">
          <Cards
            image={about_img}
            title="About Us"
            description="Who We Are?  At “the taxi guru”, we rethink travel in Seunk Mullanpur, New Chandigarh, with a promise to somewhere safe and secure, comfort,..."
          ></Cards>
          <Cards
            image={services_img}
            title="Services"
            description="SEDAN Enjoy the exemplification of solace and style with our Sedans. Our cutting edge fleet guarantees a smooth ride, including , environment control,..."
          ></Cards>
          <Cards
            image={Contactform_img}
            title="Contact Us"
            description="Thanks for contacting us!! Thank you for reaching out to “The Taxi Guru”. We value your feedback, inquiries, and suggestions. Get in touch with..."
          ></Cards>
        </div>

        <div className=" bg-black flex flex-col justify-center pt-10 gap-2 text-white mt-6">
          <div className="flex justify-center items-center ">
            <img src={home_taxi} alt="" className="h-12" />
          </div>
          <div className="flex justify-center items-center ">
            <p className="text-primary  text-xl md:text-2xl	 ">WHAT WE OFFER </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-black text-white text-4xl md:text-6xl">
              OUR SERVICES
            </p>
          </div>
          <p className="text-white text-2xl md:text-4xl text-center">
            Book Your Ride in Only a Couple of clicks!
          </p>
          <div className="lg:flex flex-wrap items-center justify-center  mt-4  gap-16">
                <Link to="/contact-us">
            <div className="flex flex-col justify-center items-center  ">
              <div className="h-[80px] bg-primary w-[224px] rounded-3xl z-0"></div>
              <div className="relative bottom-12 w-[350px] h-[250px] z-10 group overflow-hidden">
                <img className="h-[100%] w-[100%]" src={car1} alt="" />

                <p className=" overflow-hidden w-full  text-center bg-right-bottom bg-gradient-to-l font-bold text-3xl absolute top-[40%]  -translate-x-96     bg-no-repeat group-hover:translate-x-0   transition-all duration-500 ease-out  ">
                  SEDAN
                  </p>

              </div>
              <div className="h-[30px] relative  bottom-20 bg-primary w-[224px] rounded-t-3xl z-20"></div>
            </div>
                  </Link>
                <Link to="/contact-us">
            <div className="flex flex-col justify-center items-center">
              <div className="h-[80px] bg-primary w-[224px] rounded-3xl z-0"></div>
              <div className="relative bottom-12 w-[350px] h-[250px] z-10 group overflow-hidden ">
                <img className="h-[100%] w-[100%]" src={car2} alt="" />

                <p className=" overflow-hidden w-full  text-center bg-right-bottom bg-gradient-to-l font-bold text-3xl absolute top-[40%]  -translate-x-96     bg-no-repeat group-hover:translate-x-0   transition-all duration-500 ease-out  ">
                  SUV
            
                </p>
            
              </div>
              <div className="h-[30px] relative  bottom-20 bg-primary w-[224px] rounded-t-3xl z-20"></div>
            </div>
                </Link>
                <Link to="/contact-us">
            <div className="flex flex-col justify-center items-center  ">
              <div className="h-[80px] bg-primary w-[224px] rounded-3xl z-0"></div>
              <div className="relative bottom-12 w-[350px] h-[250px] z-10 group overflow-hidden">
                <img className="h-[100%] w-[100%]" src={car3} alt="" />
                <p className="overflow-hidden w-full  text-center bg-right-bottom bg-gradient-to-l font-bold text-3xl absolute top-[40%]  -translate-x-96     bg-no-repeat group-hover:translate-x-0   transition-all duration-500 ease-out  ">
                  HATCHBACK
                </p>
               
              </div>
              <div className="h-[30px] relative  bottom-20 bg-primary w-[224px] rounded-t-3xl z-20"></div>
            </div>
                    </Link>
          </div>
        </div>

        <div className="items-center text-center py-10 mb-8 ">
          <p className="md:text-4xl text-2xl font-bold text-shadow-lg ">
            MEET THE FLEET
          </p>
          <div className=" flex   justify-center my-8 items-center">
            <div className="bg-black h-0.5  text-center">
              <div className="w-12 mx-4 "></div>
            </div>
            <img src={home_taxi} alt="" className="h-12" />
            <div className="bg-black h-0.5  text-center">
              <div className="w-12  mx-4 "></div>
            </div>
          </div>
          <p className="md:text-3xl  text-xl text-wrap text-shadow-lg ">
            Meet the Fleet, Your Ticket to Tailored Travels – the taxi guru,
            Where Every Ride is a Signature Experience..
          </p>
        </div>
        <div className=" bg-black py-16 flex justify-center items-center ">
          <div className=" justify-center items-center">
            <div className="flex"></div>
            <div className="text-center">
              <p className="text-white font-bold text-3xl">THETAXIGURU</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white h-0.5  text-center">
                <div className="w-12 mx-4 "></div>
              </div>
              <img src={home_taxi} alt="" className="h-8" />
              <div className="bg-white h-0.5  text-center">
                <div className="w-12 mx-4 "></div>
              </div>
            </div>
            <p className="text-white text-xl text-center px-2">
              Counting on us for your travels – precision, reliability, and
              comfort at every turn with us
            </p>

            <div className=" mt-8 justify-center items-center flex flex-wrap ">
              <CountUpComponent
                image={services_img}
                end={100}
                title="CLIENTS"
              ></CountUpComponent>
              <CountUpComponent
                image={rupi}
                end={500}
                title="TRIPS DAILY"
              ></CountUpComponent>
              <CountUpComponent
                image={Customercare}
                end={10000}
                title="KILOMETERS"
              ></CountUpComponent>
              <CountUpComponent
                image={Speed}
                end={100}
                title="CARS"
              ></CountUpComponent>
            </div>
          </div>
        </div>

        {/* footer */}

        <Footer />
      </div>
    </div>
  );
}
