import Header from "./Header";
import PropertyBuying from "./PropertyBuying";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <PropertyBuying></PropertyBuying>
            <div className="mt-56">
                <Services></Services>
            </div>
            
        </div>
    );
};

export default Home;