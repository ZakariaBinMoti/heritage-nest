import { FaBook, FaElevator, FaHouse, FaLifeRing, FaPlay, FaSection, FaShoePrints, FaSuperpowers, FaTree } from "react-icons/fa6";
import icon from "../assets/icons/fi-bs-marker.png";
import { FaBath, FaBed, FaParking } from "react-icons/fa";
import RangeSlider from "react-range-slider-input";
import NewListedProperties from "./Shared/NewListedProperties";
import Services from "./Home/Services";

const PropertyDetails = () => {
  return (
    <div className="max-w-[1216px] mx-auto mt-10">
      <div className="flex gap-10 pb-5">
        <div>
          <h1 className="text-2xl font-semibold">
            3 BHK Builder Floor Sale in Site in Site Ram Bazar Hydrabad
          </h1>
          <p className="text-[#6B7280] flex items-center gap-2">
            <img src={icon} alt="" /> Meadowshire Park, Greenfield, USA
          </p>
        </div>
        <h1 className="text-3xl font-extrabold">$300</h1>
      </div>
      <hr />
      <div className="pt-5 grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-5">
            <img
              className="col-span-3 w-full"
              src="https://i.ibb.co/KhF2kLf/large-room-with-large-window-couch-with-pillows-it-188544-27425.jpg"
              alt=""
            />

            <img
              className=" max-w-[250px]"
              src="https://i.ibb.co/Wv2mpMm/entrance-area-staircase-have-spacious-mirror-affixed-wall-complemented-by-stunning-410516-114125.png"
              alt=""
            />
            <img
              className=" max-w-[250px]"
              src="https://i.ibb.co/4N8MGSD/interior-design-living-room-73899-2826.png"
              alt=""
            />
            <img
              className=" max-w-[250px]"
              src="https://i.ibb.co/KhF2kLf/large-room-with-large-window-couch-with-pillows-it-188544-27425.jpg"
              alt=""
            />
          </div>
          <div className="bg-[#F9FAFB] border border-gray-200 p-6 rounded-lg mt-10">
            <h1 className="text-2xl mb-5 font-semibold ">Overview</h1>
            <div className="font-semibold flex p-5 justify-between bg-white border border-gray-150">
              <p className="flex gap-3">
                <FaBed /> 2 Beds
              </p>
              <p className="flex gap-3">
                <FaBath /> 2 Bath
              </p>
              <p className="flex gap-3">
                <FaHouse /> 2 Balcony
              </p>
              <p className="flex gap-3">
                <FaBed /> 2 Fully Furnished
              </p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10">
              <div>
                <p className="text-[#5C5C5C]">Carpet Area</p>
                <p className="font-medium">2000sqft</p>
                <p className="text-[#5C5C5C]">$225/sqft</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Floor</p>
                <p className="font-medium">Second(out of 6th floor)</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Transaction Type</p>
                <p className="font-medium">Ready to move</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Facing</p>
                <p className="font-medium">North-East</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Additional Rooms</p>
                <p className="font-medium">1 servent room and 1 guest rooms</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Age of contruction</p>
                <p className="font-medium">New Contruction</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#ECF5FF] p-6">
            <p className="text-[#6B7280]">Property Value</p>
            <h1 className="text-2xl py-3 font-bold">$300k - $310k</h1>
            <p className="text-[#6B7280] mb-5">
              Your bid cant be more than 10% of the <br /> property Minimum
              value.
            </p>

            <label className="form-control outline-none w-full max-w-xs">
              <div className="label outline-none">
                <span className="label-text font-semibold">Min</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input outline-none rounded-none input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control outline-none w-full max-w-xs">
              <div className="label outline-none">
                <span className="label-text font-semibold">Max</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input outline-none rounded-none input-bordered w-full max-w-xs"
              />
            </label>
            <RangeSlider
              className="mt-5 single-thumb"
              defaultValue={[0, 100]}
              thumbsDisabled={[true, false]}
              rangeSlideDisabled={true}
            />
            <div className="flex items-center w-full justify-center mt-10">
              <button className="bg-[#0059B1] py-3 rounded-lg px-6 text-white font-semibold">
                Bid Property
              </button>
            </div>
          </div>

          <div className="mt-10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4851008789506!2d90.42419807602333!3d23.76573408818622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85209416197%3A0xf5f359e239846b22!2sbdCalling%20IT%20Ltd.!5e0!3m2!1sen!2sbd!4v1725468008783!5m2!1sen!2sbd" width="384" height="510" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>



     <div className="p-6 bg-[#F9FAFB] border border-gray-200 mt-12">
            <h1 className="text-2xl font-semibold pb-8">Amenities</h1>
            <div className="font-medium grid grid-cols-4 gap-8">
                <div className="flex gap-3 py-4 items-center">
                    <FaSuperpowers></FaSuperpowers> <p>Power Back Up</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaElevator></FaElevator> <p>Lift</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaHouse></FaHouse> <p>Club House</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaTree></FaTree> <p>Garden</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaLifeRing></FaLifeRing> <p>Gymnasium</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaElevator></FaElevator> <p>intercorn</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaShoePrints></FaShoePrints> <p>jogging space</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaPlay></FaPlay> <p>Kids playground</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaBook></FaBook> <p>learning center</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaSection></FaSection> <p>maintenance</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaParking></FaParking> <p>reserved Park</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaParking></FaParking> <p>privateParking</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaSuperpowers></FaSuperpowers> <p>Water Storage</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                <FaSection></FaSection> <p>Visitors Parking</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                <FaLifeRing></FaLifeRing> <p>Power Back Up</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaSuperpowers></FaSuperpowers> <p>wifi/internet</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                <FaLifeRing></FaLifeRing> <p>Water Storage</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaSuperpowers></FaSuperpowers> <p>Water Disposal</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                <FaSection></FaSection> <p>badminton playground</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                <FaLifeRing></FaLifeRing> <p>tennis Playground</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaSuperpowers></FaSuperpowers> <p>Power Back Up</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                <FaSection></FaSection> <p>piped Gas</p>
                </div>
                <div className="flex gap-3 py-4 items-center">
                    <FaSuperpowers></FaSuperpowers> <p>vastu</p>
                </div>
            </div>
     </div>

     <div className="mt-20">
        <Services></Services>
     </div>

<div className="my-16">
<NewListedProperties></NewListedProperties>    
</div>


    </div>
  );
};

export default PropertyDetails;
