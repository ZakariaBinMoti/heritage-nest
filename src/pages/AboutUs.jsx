import banner from "../assets/slider-1.jpg";
import house1 from "../assets/houseBuild.jpg";
import househand from "../assets/houseInHand.png";
import handshake from "../assets/handshake.png";
import FlatCount from "./Shared/FlatCount";
import line from "../assets/icons8-line-50.png";
import img1 from "../assets/man1.png";
import img2 from "../assets/man2.png";
import img3 from "../assets/man3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Testimonials from "./Shared/Testimonials";

const AboutUs = () => {
  return (
    <div>
      <img className="max-h-[320px] mx-auto object-cover" src={banner} alt="" />
      <div className="max-w-[1216px] mx-auto">
      <FlatCount></FlatCount>
      <div className="relative">
        <img className="pb-56" src={house1} alt="" />
        <div className="p-8 bg-[#ECF5FF] absolute right-0 top-80">
          <h3 className="text-[18px] flex items-center font-semibold text-[#F06711]">
            <img src={line} alt="" />
            Our Story
          </h3>
          <h1 className="text-[36px] leading-tight font-bold text-[#111827]">
            Efficient and Transparent <br /> Home Buying Solutions
          </h1>
          <p className="poppins pt-8 drop-shadow-2xl text-base font-medium text-[#667085]">
            It is a long established fact that a reader will be distracted by
            the <br /> readable content of a page when looking at its layout.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-end">
          <img className="pb-56 flex" src={handshake} alt="" />
        </div>
        <div className="p-8 bg-[#FDF0E7] absolute left-0 top-80">
          <h3 className="text-[18px] flex items-center font-semibold text-[#F06711]">
            <img src={line} alt="" />
            Mission Statement
          </h3>
          <h1 className="text-[36px] leading-tight font-bold text-[#111827]">
            Efficient and Transparent <br /> Home Buying Solutions
          </h1>
          <p className="poppins pt-8 drop-shadow-2xl text-base font-medium text-[#667085]">
            It is a long established fact that a reader will be distracted by
            the readable <br /> content of a page when looking at its layout. To
            bridge all the networks i <br /> have been working.
          </p>
        </div>
      </div>
      <div className="mb-16">
        <h3 className="text-[18px] flex items-center font-semibold text-[#F06711]">
          <img src={line} alt="" />
          Our Team
        </h3>
        <h1 className="text-[36px] mb-16 leading-tight font-bold text-[#111827]">
          Discover the Faces behind our success
        </h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={32}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-[18px] flex items-center font-semibold text-[#F06711]">
              <img src={line} alt="" />
              Meet the team for book consultation
            </h3>
            <h1 className="text-[36px] leading-tight font-bold text-[#111827]">
              Meet the stewards of your <br /> heritage journey
            </h1>
            <p className="poppins pt-6 drop-shadow-2xl text-base font-medium text-[#667085]">
              Each member an embodiment of expertise and warmth, dedicated to
              guiding you <br />
              home, every step of the way.
            </p>
          </div>
          <button className="text-white bg-[#0059B1] text-[18px] font-semibold py-[14px] px-6">
            Book Consultation Now
          </button>
        </div>
        <div>
          <img className="max-h-[304px]" src={househand} alt="" />
        </div>
      </div>
      <Testimonials></Testimonials>
      </div>

    </div>
  );
};

export default AboutUs;
