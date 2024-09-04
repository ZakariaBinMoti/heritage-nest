
import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="max-w-[1216px] mx-auto my-24">
        <h1 className="text-[40px] font-bold text-center pb-20">Testimonials</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={32}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center text-center p-8 bg-[#ECF5FF]">
            <Rating style={{ maxWidth: 180 }} value={3} readOnly />
            <p className="text-[18px] text-[#818181] py-8">
              The level of Security provided by the Cypherplay is unmatched. I
              feel confident using my card for both everyday purchases and
              travel. Its the peace of mind i was looking for.{" "}
            </p>
            <img className="h-12 w-12 rounded-full" src={man1} alt="" />
            <h1 className="text-[20px] font-semibold pt-2">Tony Stark</h1>
            <p className="text-[#6B7280]">Marketing Manager, XYZ</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center text-center p-8 bg-[#ECF5FF]">
            <Rating style={{ maxWidth: 180 }} value={3} readOnly />
            <p className="text-[18px] text-[#818181] py-8">
              The level of Security provided by the Cypherplay is unmatched. I
              feel confident using my card for both everyday purchases and
              travel. Its the peace of mind i was looking for.{" "}
            </p>
            <img className="h-12 w-12 rounded-full" src={man2} alt="" />
            <h1 className="text-[20px] font-semibold pt-2">Mark Stuard</h1>
            <p className="text-[#6B7280]">Legal Advisor, ABC</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center p-8 bg-[#ECF5FF]">
            <Rating style={{ maxWidth: 180 }} value={3} readOnly />
            <p className="text-[18px] text-[#818181] py-8">
              The level of Security provided by the Cypherplay is unmatched. I
              feel confident using my card for both everyday purchases and
              travel. Its the peace of mind i was looking for.{" "}
            </p>
            <img className="h-12 w-12 rounded-full" src={man1} alt="" />
            <h1 className="text-[20px] font-semibold pt-2">Tony Stark</h1>
            <p className="text-[#6B7280]">Marketing Manager, XYZ</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center p-8 bg-[#ECF5FF]">
            <Rating style={{ maxWidth: 180 }} value={3} readOnly />
            <p className="text-[18px] text-[#818181] py-8">
              The level of Security provided by the Cypherplay is unmatched. I
              feel confident using my card for both everyday purchases and
              travel. Its the peace of mind i was looking for.{" "}
            </p>
            <img className="h-12 w-12 rounded-full" src={man2} alt="" />
            <h1 className="text-[20px] font-semibold pt-2">Mark Stuard</h1>
            <p className="text-[#6B7280]">Legal Advisor, ABC</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center p-8 bg-[#ECF5FF]">
            <Rating style={{ maxWidth: 180 }} value={3} readOnly />
            <p className="text-[18px] text-[#818181] py-8">
              The level of Security provided by the Cypherplay is unmatched. I
              feel confident using my card for both everyday purchases and
              travel. Its the peace of mind i was looking for.{" "}
            </p>
            <img className="h-12 w-12 rounded-full" src={man2} alt="" />
            <h1 className="text-[20px] font-semibold pt-2">Mark Stuard</h1>
            <p className="text-[#6B7280]">Legal Advisor, ABC</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center p-8 bg-[#ECF5FF]">
            <Rating style={{ maxWidth: 180 }} value={3} readOnly />
            <p className="text-[18px] text-[#818181] py-8">
              The level of Security provided by the Cypherplay is unmatched. I
              feel confident using my card for both everyday purchases and
              travel. Its the peace of mind i was looking for.{" "}
            </p>
            <img className="h-12 w-12 rounded-full" src={man1} alt="" />
            <h1 className="text-[20px] font-semibold pt-2">Tony Stark</h1>
            <p className="text-[#6B7280]">Marketing Manager, XYZ</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
