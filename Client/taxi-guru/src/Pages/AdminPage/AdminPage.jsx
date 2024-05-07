import axios from "axios";
import { useEffect, useState } from "react";
function AdminPageDataView() {
  const [data, setData] = useState([]);
  const [Refresh, setRefresh] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/all-requests")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [Refresh]);

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-primary px-4 py-2 rounded-lg m-4"
        onClick={() => {
          setRefresh(Refresh + 1);
        }}
      >
        Refresh
      </button>
      {data.map((item) => {
        return (
          <div
            key={item._id}
            className="border-2 m-4 p-4 rounded-lg shadow-md md:w-1/2 lg:w-1/3"
          >
            <h2 className="text-xl font-semibold mb-2">
              Name: {item.firstName} {item.lastName}
            </h2>
            <p className="text-gray-700">Date and Time: {item.dateTime}</p>
            <p className="text-gray-700">Email: {item.email}</p>
            <p className="text-gray-700">
              PickUp Address: {item.pickupAddress}
            </p>
            <p className="text-gray-700">Drop Address: {item.dropAddress}</p>
            <p className="text-gray-700">Phone Number: {item.phoneNumber}</p>
            <p className="text-gray-700">Journey Type: {item.journeyType}</p>
          </div>
        );
      })}
    </div>
  );
}
export default function AdminPage() {
  const [allowView, setAllowView] = useState(false);
  const [passCode, setPassCode] = useState("");
  const [error, setError] = useState("");
  const checkPasscode = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/verify-password",
        { passCode }
      );
      if (response.status === 200) {
        setAllowView(true);
      }
    } catch (err) {
      if (err.response) {
        try {
          setError(err.response.data.message);
        }
        catch (err) {
        setError("An error occurred. Please try again later.");
          
        }
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <>
      {!allowView && (
        <div>
          <div className="w-96 flex m-4">
            <input
              type="text"
              name="passcode"
              value={passCode || ""}
              onChange={(e) => {
                setPassCode(e.target.value);
              }}
              className="border-b-2 border-gray h-12 text-base w-full px-2"
            />
            <button
              className="mx-4 py-2 px-4 bg-primary rounded-lg"
              onClick={checkPasscode}
            >
              Login
            </button>
          </div>
          <div>{error && <p>{error}</p>}</div>
        </div>
      )}
      {allowView && <AdminPageDataView />}
    </>
  );
}
