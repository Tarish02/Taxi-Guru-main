import about1 from "/images/about us/about1.png";
import about2 from "/images/about us/about2.png";
import gallery1 from "/images/about us/gallery1.png";
import gallery2 from "/images/about us/gallery2.png";
import gallery3 from "/images/about us/gallery3.png";
import section1 from "/images/about us/section1.png";
import section2 from "/images/about us/section2.png";
import Footer from "../../Common/components/Footer";
import HowItWorks from "./components/HowItWorks";
function AboutPage() {
  return (
    <>
      <div className="md:w-[70%] w-[90%] mx-[5%] md:mx-[15%]">
        <div className="h-auto w-[100%] lg:flex gap-4 border-4 p-4 rounded-lg my-16">
          <div className="lg:flex-1 p-5">
            <h1 className="text-primary font-bold md:text-4xl text-3xl text-center">
              Who we are?
            </h1>

            <p className="mt-4 drop-shadow-lg text-md md:text-xl ">
              At “the taxi guru”, we rethink travel in Seunk Mullanpur, New
              Chandigarh, with a promise to somewhere safe and secure, comfort,
              and reasonableness. Our different fleet of sedans, SUVs, and
              hatchbacks guarantees custom-made answers for each explorer. Book
              effortlessly through our easy to use application or a basic call,
              and trust “the taxi guru” for a dependable, secure, and pleasant
              excursion.
            </p>
          </div>

          <div className=" lg:flex-1">
            <img className="h-[100%] w-[100%]" src={about1} alt="" />
          </div>
        </div>
        <div className="h-auto w-[100%] lg:flex-row gap-4 border-4 p-2 rounded-lg flex  flex-col-reverse md:">
          <div className="lg:flex-1 p-5">
            <img className="h-[100%] w-[100%]" src={about2} alt="maskgroup1" />
          </div>
          <div className="lg:flex-1">
            <h1 className=" text-primary font-bold  md:text-4xl text-3xl text-center">
              Our Mission
            </h1>

            <p className=" drop-shadow-lg text-xl mt-4">
              “At “the taxi guru”, our mission is to give protected, dependable,
              and advantageous transportation arrangements in Seunk Mullanpur,
              New Chandigarh, and beyond. <br />
              <br /> We are focused on guaranteeing the prosperity of our
              travelers by keeping an fleet of well-equipped vehicles driven by
              proficient and respectful drivers.
              <br />
              <br /> Through straightforward valuing, and a devotion to consumer
              loyalty, we mean to reclassNameify the movement experience for
              people and families. <br />
              <br /> At “the taxi guru”, we don’t simply drive; we prepare for
              consistent, charming excursions, making each ride with us a vital
              encounter.”
            </p>
          </div>
        </div>

        {/*next sec */}
        <h1 className="text-primary font-bold  md:text-4xl text-3xl text-center my-8">
          Why choose us
        </h1>

        <div className="   gap-4  md:flex text-center  mb-4">
          <div className="my-4 md:my-0 flex-1">
            <img
              src={gallery1}
              alt="gallery"
              className="w-full h-auto object-fit"
            />
            <h3 className=" my-3 text-2xl">Safety Assurance</h3>

            <p className="text-lg px-4">
              For us, your security is our first concern. Our fleet goes through
              customary support, and our expert drivers, dependent upon thorough
              historical verifications, focus on your prosperity.
            </p>
          </div>
          <div className="my-4 md:my-0 flex-1">
            <img src={gallery2} alt="gallery" className="w-full  object-fit" />
            <h3 className=" my-3 text-2xl">Reliable Service</h3>

            <p className="text-lg px-4">
            Rely on “the taxi guru” for reliable and trustworthy transportation. Our obligation to provoke administration guarantees you arrive at your objective on time, without fail. 
            </p>
          </div>
          <div className="my-4 md:my-0 flex-1">
            <img src={gallery3} alt="gallery" className="w-full  object-fit" />
            <h3 className=" my-3 text-2xl">Affordability</h3>

            <p className="text-lg px-4">
            we have confidence in conveying quality transportation at open rates. Our obligation to moderateness guarantees you partake in an agreeable and solid excursion without settling for less on help greatness.
            </p>
          </div>
        </div>

        {/*section*/}

        <div className="  flex flex-wrap lg:flex-nowrap gap-4 justify-around  ">
          <img className="flex-1 md:w-[45%]" src={section1} alt="section" />
          <img className="flex-1 md:w-[45%]" src={section2} alt="section" />
        </div>

        {/*book*/}

        <div>
          <h1 className="text-4xl text-primary text-center my-6 font-bold lg:text-[50px] ">
            How to Book
          </h1>

          <p className=" w-[100%]  mt-2 p-2 text-center  sm:text-2xl  ">
            Booking a ride with “the taxi guru” is fast and hassle-free. Choose
            the method that suits you best - use our easy to use user-friendly
            app for consistent online appointments, visit our site to reserve a
            spot, or essentially call us. Our devoted client support group is
            prepared to help you. Partake in the accommodation of efficient
            booking, and trust us to give a reliable and agreeable excu ion
            custom-made to your inclinations. Any place you’re going, “the taxi
            guru” is here to make your movement experience smooth and peaceful.
          </p>
        </div>

        {/*how it work*/}
        <HowItWorks />
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
