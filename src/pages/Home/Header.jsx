import search from "../../assets/icons8-search.svg"

const Header = () => {
    return (
        <div>
            <div className="flex gap-10 flex-col justify-center items-center min-h-[544px] bg-cover bg-[url('https://i.ibb.co/n3Y43wx/milin-john-ot-C9-Rp-W7o2-U-unsplash.jpg')]">
                <h1 className="text-[64px] font-bold text-white">Your Portal to India's <br />  Exquisite Real Estate</h1> 
                <p className="font-medium text-base poppins text-white">Seamlessly connecting you to the heartbeat of Indias prime properties.</p>
                <button className="text-white gap-3 py-4 px-6 rounded bg-[#0059B1] flex items-center font-medium text-[18px]"><img src={search} alt="" />Find Property</button>
            </div>
        </div>
    );
};

export default Header;