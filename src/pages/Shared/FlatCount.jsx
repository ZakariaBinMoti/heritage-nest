
import arrow1 from "../../assets/icons/icons8-circled-down-left-arrow-50.png"
import arrow2 from "../../assets/icons/icons8-circled-down-left-arrow-50 (1).png"

const FlatCount = () => {
    return (
        <div className="grid grid-cols-4 gap-8 my-16 max-w-[1216px] mx-auto">
            <div className="p-6 bg-[#FDF0E7]">
                <h1 className="text-[#D95D0F] text-[40px] font-bold">2k+</h1>
                <p className="mb-8">New Flat Listed</p>
                <div className="flex justify-between">
                    <a className="text-[#EE6611] underline">View all</a>
                    <img className="-rotate-45" src={arrow1} alt="" />
                </div>
            </div>
            <div className="p-6 bg-[#ECF5FF]">
                <h1 className="text-[#0051A1] text-[40px] font-bold">2k+</h1>
                <p className="mb-8">New Flat Listed</p>
                <div className="flex justify-between">
                    <a className="text-[#0059B1] underline">View all</a>
                    <img className="-rotate-45" src={arrow2} alt="" />
                </div>
            </div>
            <div className="p-6 bg-[#FDF0E7]">
                <h1 className="text-[#D95D0F] text-[40px] font-bold">2k+</h1>
                <p className="mb-8">New Flat Listed</p>
                <div className="flex justify-between">
                    <a className="text-[#EE6611] underline">View all</a>
                    <img className="-rotate-45" src={arrow1} alt="" />
                </div>
            </div>
            <div className="p-6 bg-[#ECF5FF]">
                <h1 className="text-[#0051A1] text-[40px] font-bold">2k+</h1>
                <p className="mb-8">New Flat Listed</p>
                <div className="flex justify-between">
                    <a className="text-[#0059B1] underline">View all</a>
                    <img className="-rotate-45" src={arrow2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FlatCount;