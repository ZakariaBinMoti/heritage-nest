import home from "../../assets/Home Image/HomeIcon.png"

const Services = () => {
    return (
        <div className=" mb-20 max-w-[1216px] mx-auto">
            <h1 className="text-center text-[40px] font-bold pb-14">Other Services</h1>
            <div className="grid grid-cols-3 gap-8">
                <div className="bg-[#ECF5FF] flex p-6 gap-5">
                    <div className="bg-[#EE6611] h-12 w-12 px-2 grow rounded flex items-center justify-center">
                        <img src={home} alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Advanced Property <br /> Search</h3>
                        <p className="font-medium text-[#6B7280] pt-4">Effortlessly find your dream property with advanced search filters.</p>
                    </div>
                </div>
                <div className="bg-[#ECF5FF] flex p-6 gap-5">
                    <div className="bg-[#EE6611]  h-12 px-2 rounded w-12 flex items-center justify-center">
                        <img className="h-6 w-6" src={home} alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Virtual Tours and Multimedia</h3>
                        <p className="font-medium text-[#6B7280] pt-4">Experience properties like never before with immersive virtual tours.</p>
                    </div>
                </div>
                <div className="bg-[#ECF5FF] flex p-6 gap-5">
                    <div className="bg-[#EE6611] px-2 h-12 rounded w-12 flex items-center justify-center">
                        <img className="h-6 w-6" src={home} alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Secure Online Transactions </h3>
                        <p className="font-medium text-[#6B7280] pt-4">Ensure safe and secure transactions with our online payment system.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;