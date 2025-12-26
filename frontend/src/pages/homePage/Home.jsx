import Banner from "./Banner";
// import Sub_banner from "./Sub_banner";
// import Review from "./Review";
import Sponsored from "./Sponsored";
import Cars from "./Cars";
import Sub_banner from "./Sub_banner";
import About_car from "./About_car";
import Services from "./Services";
import Review from "./Review";
import Clients from "./Clients";
import FaQ from "./FaQ";

const Home = () => {
    return (
        <div>
            <Banner />
            <Sponsored />
            <Cars />
            <Sub_banner />
            <About_car />
            <Services />
            <Review />
            <Clients />
            <FaQ />
        </div>
    );
};

export default Home;