import { useState } from "react";
import Footer from "../../Common/components/Footer";
import { styles } from "../../Style";
import axios from "axios";
import { useForm } from "react-hook-form";
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const handleFormSubmitData = async (e) => {
    try {
      await axios.post("http://localhost:3000/api/createuserrequest", formData);
      alert("Data saved successfully");
      setFormData({});
    } catch (err) {
      if (err.response) {
        setError(err.response.data.errors);
      } else {
        setError([{ msg: "An error occurred. Please try again later." }]);
      }
    }
  };
  // const handleError = (errors) => {};
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const validationOptions = {
    firstName: {
      required: "First Name is required",
      minLength: {
        value: 3,
        message: "First Name should be greater than 3 letters",
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value:
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gm,
        message: "Invalid Email",
      },
    },
    phoneNumber: {
      required: "Phone number is required",
      pattern: {
        value:
          /^\s*(?:\+(\d{1,3}))[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})$/gm,
        message: "Invalid Phone Number, include country code too.",
      },
    },
    pickupAddress: {
      required: "Pickup Address is required",

      minLength: {
        value: 5,
        message: "Enter Full Pickup address",
      },
    },
    dropAddress: {
      required: "Drop Address is required",

      minLength: {
        value: 5,
        message: "Enter Full Drop address",
      },
    },

    // password: {
    //   required: "Password is required",
    //   minLength: {
    //     value: 8,
    //     message: "Password must have at least 8 characters"
    //   }
    // }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleError = (errors) => {};

  return (
    <>
      <div className="w-[100%] m-0 lg:w-[70%] lg:mx-[15%] ">
        <div className="text-center">
          <h2 className={`${styles.forResponsive}font-sans font-bold mt-8`}>
            Contact Us
          </h2>
          <p
            className={`${styles.forResponsive}text-gray-500 font-semibold mt-5 tracking-wider`}
          >
            Any question or remarks? Just write us a message!
          </p>
        </div>

        {/* from dev */}

        <div className="flex-row lg:flex mt-16">
          <div className="mx-4 h-auto bg-primary rounded-xl p-4  shadow-3xl lg:w-[40%] md:mx-4">
            <h4 className="text-3xl font-semibold tracking-wider text-white">
              Contact Information
            </h4>

            <p className="mt-4 text-lg font-extralight tracking-widest text-white ">
              Say something to start a live chat!
            </p>
            <div className="mt-24 flex items-center text-white">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="pb-1 ml-4 text-lg font-thin">
                <p>+91–9465342092</p>
              </div>
            </div>
            <div className="mt-10  flex items-center text-white">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </div>
              <div className="pb-1 ml-4 text-lg font-thin">
                <p>parvinderlidder8092@gmail.com</p>
              </div>
            </div>
            <div className="mt-10 flex items-center text-white">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="pb-1 ml-4 text-lg font-thin">
                  Seunk, Mullanpur Garibdass, New Chandigarh, 140901
                </p>
              </div>
            </div>
            <div className="flex mt-40 ml-8 ">
              <div className="bg-[#1B1B1B] h-7 w-7 rounded-full mr-6"></div>
              <div className="bg-[#FFFFFF] h-7 w-7 rounded-full mr-6"></div>
              <div className="bg-[#1B1B1B] h-7 w-7 rounded-full"></div>
            </div>
          </div>

          {/* From */}

          <div className="w-[100%] mt-4 p-3 lg:w-[60%] lg:mt-10 lg:pl-10">
            {/* <form onSubmit={()=>handleSubmitFromHook(handleSubmit, handleError)} className="text-gray-500"> */}
            <form onSubmit={handleSubmit(handleFormSubmitData, handleError)}>
              <div className="flex lg:w-[100%] gap-[10%]">
                <div className="mb-4 text-lg w-[45%]">
                  <label htmlFor="First Name">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || ""}
                    {...register("firstName", validationOptions.firstName)}
                    onChange={handleChange}
                    className="border-b-2 border-gray- h-10 outline-none text-base w-full"
                  />
                  <small className="text-red-600">
                    {errors?.firstName && errors.firstName.message}
                  </small>
                </div>

                <div className="mb-4 text-lg w-[45%]">
                  <label htmlFor="Last Name">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    {...register("lastName", validationOptions.lastName)}
                    value={formData.lastName || ""}
                    onChange={handleChange}
                    className="border-b-2 border-gray- h-10 outline-none text-base w-full"
                  />
                  <small className="text-red-600">
                    {errors?.lastName && errors.lastName.message}
                  </small>
                </div>
              </div>

              <div className="flex lg:w-[100%] gap-[10%]">
                <div className="mb-4 text-lg w-[45%]">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    {...register("email", validationOptions.email)}
                    value={formData.email || ""}
                    onChange={handleChange}
                    className="border-b-2 border-gray- h-10 outline-none text-base w-full"
                  />
                  <small className="text-red-600">
                    {errors?.email && errors.email.message}
                  </small>
                </div>

                <div className="mb-4 text-lg w-[45%]">
                  <label htmlFor="Phone no">Phone no</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber || ""}
                    {...register("phoneNumber", validationOptions.phoneNumber)}
                    onChange={handleChange}
                    inputMode="numeric"
                    className="border-b-2 border-gray- h-10 outline-none text-base w-full "
                  />
                  <small className="text-red-600">
                    {errors?.phoneNumber && errors.phoneNumber.message}
                  </small>
                </div>
              </div>

              <div className="mb-4 text-lg w-full">
                <label htmlFor="Journey Type" className="block my-2">Journey Type</label>
                <div className="flex justify-cenjter gap-24">
           
                <div>

                <input
                  type="radio"
                  name="journeyType"
                      value="Single"
                      className="h-6 w-6 align-top m-0 mx-2"
                  onChange={handleChange}
                  ></input>
                 <label htmlFor="Single" className="">Single</label>
                  </div>
                <div>

                <input
                  type="radio"
                  name="journeyType"
                      value="Double"
                      className="h-6 w-6 align-top m-0 mx-2 "
                      
                  onChange={handleChange}
                  ></input>
                 <label htmlFor="Double">Double</label>
                </div>
                </div>
                {/* <input
                  type="text"
                  name="journeyType"
                  value={formData.journeyType || ""}
                  onChange={handleChange}
                  className="border-b-2 border-gray- h-10 outline-none text-base w-full"
                /> */}
              </div>

              <div className="mb-4 text-lg w-full">
                <label htmlFor="PickUpAddress">Pick up Address *</label>
                <input
                  type="text"
                  name="pickupAddress"
                  value={formData.pickupAddress || ""}
                  {...register(
                    "pickupAddress",
                    validationOptions.pickupAddress
                  )}
                  onChange={handleChange}
                  className="border-b-2 border-gray- h-10 outline-none text-base w-full"
                />
                <small className="text-red-600">
                  {errors?.pickupAddress && errors.pickupAddress.message}
                </small>
              </div>
              <div className="mb-4 text-lg w-full">
                <label htmlFor="DropAddress">Drop Address *</label>
                <input
                  type="text"
                  name="dropAddress"
                  {...register("dropAddress", validationOptions.dropAddress)}
                  value={formData.dropAddress || ""}
                  onChange={handleChange}
                  className="border-b-2 border-gray- h-10 outline-none text-base w-full"
                />
                <small className="text-red-600">
                  {errors?.dropAddress && errors.dropAddress.message}
                </small>
              </div>

              <div className=" mt-14  flex justify-center lg:justify-end">
                <button
                  className="bg-primary text-white rounded-md text-lg shadow-lg px-5 py-4 hover:bg-white hover:text-primary"
                  // onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className=" text-red-500">
              {error &&
                error.map((err) => {
                  return (
                    <div key={err} className="">
                      {err.msg}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* from end */}

        <div>
          <h2
            className={`${styles.forResponsive}mt-16 text-center font-extrabold`}
          >
            24/7 available for customer support
          </h2>
          <p className="text-center text-md font-medium tracking-wider mt-5 lg:text-xl">
            At “The Taxi Guru”, we understand that travel plans can change at
            any time. That’s why our customer support team is available 24/7 to
            assist you.
          </p>
        </div>
        <div className="my-[50px] mx-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3493555.2081052708!2d77.29792690784531!3d31.229732122009537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711449045541!5m2!1sen!2sin"
            className="w-full md:h-[600px] h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* <img src={Map} alt="" className="w-full h-30" /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
