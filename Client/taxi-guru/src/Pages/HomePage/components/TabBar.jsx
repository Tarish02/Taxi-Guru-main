import { useState } from "react";

function TabBar() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const handleChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="relative bottom-28">
      <div className="flex flex-row justify-center text-white text-center text-3xl">
        <div
          className={`${
            activeTab === "tab1" ? "bg-primary" : "bg-black"
          }  rounded-tl-3xl md:w-48 `}
        >
          <button
            className=" w-full h-full py-2 px-4 "
            onClick={() => handleChange("tab1")}
          >
            Rental
          </button>
        </div>
        <div
          className={`${
            activeTab === "tab2" ? "bg-primary" : "bg-black"
          }  md:w-48`}
        >
          <button
            className=" w-full h-full py-2 px-4"
            onClick={() => handleChange("tab2")}
          >
            Daily
          </button>
        </div>
        <div
          className={`${
            activeTab === "tab3" ? "bg-primary" : "bg-black"
          }  rounded-tr-3xl md:w-48`}
        >
          <button
            className=" w-full h-full py-2 px-4"
            onClick={() => handleChange("tab3")}
          >
            Outstation
          </button>
        </div>
      </div>
      <div>
        {activeTab === "tab1" && (
          <div className="bg-primary h-36 ">
            <div className="flex flex-wrap justify-around  items-center w-full h-full">
              <select
                value={start} // ...force the select's value to match the state variable...
                onChange={(e) => setStart(e.target.value)} // ... and update the state variable on any change!
              >
                <option value="candigarh">Chandigarh</option>
                <option value="punjab">Punjab</option>
                <option value="haryana">Haryana</option>
                <option value="himachal">Himachal</option>
              </select>
              <select
                value={end} // ...force the select's value to match the state variable...
                onChange={(e) => setEnd(e.target.value)} // ... and update the state variable on any change!
              >
                <option value="chandigarh">Chandigarh</option>
                <option value="punjab">Punjab</option>
                <option value="haryana">Haryana</option>
                <option value="himachal">Himachal</option>
              </select>
              <input type="datetime-local" />
              <button className="bg-black px-4 py-2 text-white">
                Book Now
              </button>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="bg-primary h-36  flex justify-around items-center">
            TAB 2
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="bg-primary h-36  flex justify-around items-center">
            {" "}
            TAB 3
          </div>
        )}
      </div>
    </div>
  );
}

export default TabBar;
