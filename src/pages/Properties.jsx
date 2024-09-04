import "react-tabs/style/react-tabs.css";
import { Tabs } from "antd";
import { useEffect, useState } from "react";
import SingleProperty from "./Shared/SingleProperty";
import Testimonials from "./Shared/Testimonials";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("property.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div className="max-w-[1216px] mx-auto">
      <Tabs className="mt-8">
        <Tabs.Tabpane tab="Properties (400)" key="tab1">
          <div>
            <h1 className="text-2xl mt-4 mb-8 font-medium">
              400 Results for rental
            </h1>
            <div>
              {properties.map((property) => (
                <SingleProperty
                  key={property.id}
                  property={property}
                ></SingleProperty>
              ))}
            </div>
          </div>
        </Tabs.Tabpane>
        <Tabs.Tabpane tab="New Project (400)" key="tab2">
          <div>TAb 2</div>
        </Tabs.Tabpane>
        <Tabs.Tabpane tab="Pre-launched Offer" key="tab3">
          <div>TAb 3</div>
        </Tabs.Tabpane>
      </Tabs>
      <hr />
      <div className="join gap-3  mt-5 mb-20">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="01"
          defaultChecked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="02"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="Next"
        />
      </div>
      <div className="p-8 bg-[#ECF5FF] flex items-center gap-8">
        <div>
          <h1 className="text-3xl font-semibold">Need a Home Load?</h1>
          <p className="text-[#535353] mt-2">
            Select How much loan you can <br /> take
          </p>
        </div>
        <div className="grow">
          {" "}
          <RangeSlider
            className="single-thumb"
            defaultValue={[0]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
          />
        </div>
      </div>

      <Testimonials></Testimonials>
    </div>
  );
};

export default Properties;
