import icon from "../../assets/icons/fi-bs-marker.png";
import rec from "../../assets/icons/Rectangle 2.png";
import total from "../../assets/icons/totalArea.png";
import statusicon from "../../assets/icons/statusIcon.png";
import { Link } from "react-router-dom";

const SingleProperty = ({ property }) => {
  const { image, price, name, status, location, total_area } = property;
  return (
    <div className="flex gap-8 rounded-md p-6 bg-[#F9FAFB] mb-5 max-w-[800px]">
      <img className="h-[184px] w-[152px]" src={image} alt="" />
      <div className="grow">
        <div className="flex  justify-between ">
          <div>
            <h1 className="text-[18px] font-semibold mb-2">{name}</h1>
            <p className="text-[#6B7280] flex items-center gap-2">
              {" "}
              <img src={icon} alt="" /> {location}
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-2">${price}</h1>
            <Link to="/property-details">
              <button className="py-2 px-4 rounded hover:bg-orange-600 font-semibold hover:text-white border border-r-gray-500">
                Bid Property
              </button>
            </Link>
          </div>
        </div>
        <p className="mt-5">
          Property details <hr />
        </p>
        <div className="grid mt-3 grid-cols-3">
          <div className="flex gap-3">
            <div className="relative">
              <img src={rec} alt="" />
              <img className="absolute top-3 left-3" src={total} alt="" />
            </div>
            <div>
              <h2 className="font-semibold">Total Area</h2>
              <p>{total_area}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <img src={rec} alt="" />
              <img className="absolute top-3 left-3" src={statusicon} alt="" />
            </div>
            <div>
              <h2 className="font-semibold">Status</h2>
              <p>{status}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <img src={rec} alt="" />
              <img className="absolute top-3 left-3" src={total} alt="" />
            </div>
            <div>
              <h2 className="font-semibold">Total Area</h2>
              <p>{total_area}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
