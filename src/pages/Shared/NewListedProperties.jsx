import { useEffect, useState } from "react";
import icon from "../../assets/icons/fi-bs-marker.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const NewListedProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("property.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div className="max-w-[1216px] mx-auto">
      <div className="flex justify-between pb-6">
        <h1 className="font-semibold text-[32px]">New Listed Properties</h1>
        <Link to="/properties">
          <a className="text-[#0059B1] text[18px] font-semibold underline">
            See all properties
          </a>
        </Link>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <div>
          {properties.map((property) => (
            <>
              <SwiperSlide>
                <Link to="/property-details">
                  <div className="bg-[#F9FAFB]">
                    <img src={property.image} alt="" />
                    <div className="p-4">
                      <div className="flex justify-between pb-2">
                        <p className="bg-[#C5E2FF] py-1 px-2 text-sm">
                          Apartment
                        </p>
                        <p>
                          {" "}
                          <span className="text-red-600 font-medium">
                            {" "}
                            ●{" "}
                          </span>{" "}
                          {property.status}
                        </p>
                      </div>
                      <hr />

                      <div>
                        <div className="mb-5">
                          <h1 className="text-[20px] my-1 font-semibold">
                            {property.name}
                          </h1>
                          <p className="text-[#6B7280] flex items-center gap-2">
                            {" "}
                            <img src={icon} alt="" /> {property.location}
                          </p>
                        </div>
                        <div>
                          <p className="text-2xl font-semibold">
                            $ {property.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default NewListedProperties;
