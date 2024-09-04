
import line from "../../assets/icons8-line-50.png"
import search from "../../assets/icons8-search (1).svg"
import first1 from "../../assets/Home Image/firstSeg-1.png"
import first2 from "../../assets/Home Image/firstSeg-2.png"
import playicon from "../../assets/Home Image/playerIcon.png"
import second1 from "../../assets/Home Image/secondSeg-1.png"
import second2 from "../../assets/Home Image/secondSeg-2.png"
import third1 from "../../assets/Home Image/thirdSeg-1.png"
import third2 from "../../assets/Home Image/thirdSeg-2.png"

const PropertyBuying = () => {
  return (
    <div className="max-w-[1216px] my-20 mx-auto">
      {/* 1st section  */}
      <div className="grid grid-cols-2 gap-8">
        <div className="relative">
            <img className="" src={first1} alt="" />
            <img className="absolute -bottom-24 right-5" src={first2} alt="" />
            <img className="absolute right-20 bottom-20" src={playicon} alt="" />
        </div>
        <div className="">
            <h3 className="text-[18px] flex items-center font-semibold text-[#F06711]"><img src={line} alt="" />Property Buying</h3>
            <h1 className="text-[40px] leading-tight font-bold text-[#111827]">Efficient and Transparent <br /> Home Buying Solutions</h1>
            <p className="poppins py-8 drop-shadow-2xl text-base font-medium text-[#667085]">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout.</p>
            <button className="text-[#0059B1] gap-3 py-4 px-6 rounded bg-[#ECF5FF] flex items-center font-medium text-[18px]"><img className="text-[#0059B1]" src={search} alt="" />Find Property</button>

        </div>
      </div>

      {/* 2nd section  */}
      <div className="grid grid-cols-2 gap-8 mt-52">
        <div className="">
            <h3 className="text-[18px] flex items-center font-semibold text-[#F06711]"><img src={line} alt="" />Property Buying</h3>
            <h1 className="text-[40px] leading-tight font-bold text-[#111827]">Efficient and Transparent <br /> Home Buying Solutions</h1>
            <p className="poppins py-8 drop-shadow-2xl text-base font-medium text-[#667085]">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout.</p>
            <button className="text-[#0059B1] gap-3 py-4 px-6 rounded bg-[#ECF5FF] flex items-center font-medium text-[18px]"><img className="text-[#0059B1]" src={search} alt="" />Find Property</button>
        </div>
        <div className="relative">
            <img className="absolute right-0 top-0" src={second2} alt="" />
            <img className="absolute -z-10 top-32" src={second1} alt="" />
            <img className="absolute top-20 left-10" src={playicon} alt="" />
        </div>
      </div>

      {/* 3rd section  */}
      <div className="grid grid-cols-2 gap-8 mt-80">
        <div className="relative">
            <img className="" src={third1} alt="" />
            <img className="absolute -bottom-32 right-5" src={third2} alt="" />
            <img className="absolute right-20 bottom-16" src={playicon} alt="" />
        </div>
        <div className="">
            <h3 className="text-[18px] flex items-center font-semibold text-[#F06711]"><img src={line} alt="" />Property Buying</h3>
            <h1 className="text-[40px] leading-tight font-bold text-[#111827]">Efficient and Transparent <br /> Home Buying Solutions</h1>
            <p className="poppins py-8 drop-shadow-2xl text-base font-medium text-[#667085]">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout.</p>
            <button className="text-[#0059B1] gap-3 py-4 px-6 rounded bg-[#ECF5FF] flex items-center font-medium text-[18px]"><img className="text-[#0059B1]" src={search} alt="" />Find Property</button>

        </div>
      </div>
    </div>
  );
};

export default PropertyBuying;
