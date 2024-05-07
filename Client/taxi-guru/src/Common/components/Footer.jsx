import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="justify-between bg-black h-48 mt-20">
      <div className=" flex  justify-between items-center bg-primary p-6  sm:mx-10 lg:mx-44 font-bold text-2xl md:text-4xl relative -top-12 opacity-90">
        <div className="h-22 font-black py-4">Need Taxi ?</div>
        <Link to="/contact-us">
          <button className="bg-black uppercase text-white rounded-sm px-6 font-bold text-sm py-2">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}
