import banner from "../assets/Banner.png";
import home from "../assets/icons/fi-bs-home-location.png";
import location from "../assets/icons/fi-bs-marker.png";
import search from "../assets/icons8-search.svg";
import budget from "../assets/icons/Dollar Minimalistic.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FlatCount from "./Shared/FlatCount";
import Testimonials from "./Shared/Testimonials";
import PopularProperties from "./Shared/PopularProperties";
import NewListedProperties from "./Shared/NewListedProperties";

const BuySell = () => {
  return (
    <div>
      <div className="relative">
        <img className="mx-auto mb-60 -z-20" src={banner} alt="" />
        <div className="mx-auto max-w-[984px]  ">
          <div className=" p-8 top-20 w-[948px] absolute bg-white rounded-lg shadow-xl">
            <Tabs>
              <TabList>
                <Tab>Buy</Tab>
                <Tab>Rent</Tab>
                <Tab>PG</Tab>
                <Tab>Plot</Tab>
                <Tab>Commercial</Tab>
              </TabList>

              <TabPanel>
                <div>
                  <label className="input rounded-none input-bordered flex items-center gap-2 py-3 my-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="text"
                      className="grow rounded-none "
                      placeholder="Search Properties"
                    />
                  </label>
                  <div className="grid grid-cols-3 gap-8 mb-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <img src={location} alt="" />
                        <h3 className="text-lg font-semibold">Your Location</h3>
                      </div>
                      <select className="select rounded-none bg-[#ECF5FF] w-full max-w-xs border-none outline-none">
                        <option>Dhaka</option>
                        <option>Bogura</option>
                        <option>Dhaka</option>
                        <option>Dhaka</option>
                        <option>Dhaka</option>
                        <option>Bangladesh</option>
                      </select>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <img src={home} alt="" />
                        <h3 className="text-lg font-semibold">Property Type</h3>
                      </div>
                      <select className="select rounded-none bg-[#ECF5FF] w-full max-w-xs border-none outline-none">
                        <option>Premium</option>
                        <option>Silver</option>
                        <option>Gold</option>
                        <option>Bronze</option>
                        <option>Iron</option>
                      </select>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <img src={budget} alt="" />
                        <h3 className="text-lg font-semibold">Budget</h3>
                      </div>
                      <select className="select rounded-none bg-[#ECF5FF] w-full max-w-xs border-none outline-none">
                        <option>4000000</option>
                        <option>5000000</option>
                        <option>6000000</option>
                        <option>7000000</option>
                        <option>8000000</option>
                        <option>9000000</option>
                      </select>
                    </div>
                  </div>
                  <button className="text-white gap-3 py-3 rounded bg-[#0059B1] w-full justify-center flex items-center font-semibold text-base">
                    <img src={search} alt="" />
                    Find Property
                  </button>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <FlatCount></FlatCount>
      <PopularProperties></PopularProperties>
      <div className="border-t border-gray-200 mt-10 max-w-[1216px] mx-auto pb-16"></div>
      <NewListedProperties></NewListedProperties>
      <Testimonials></Testimonials>
    </div>
  );
};

export default BuySell;
