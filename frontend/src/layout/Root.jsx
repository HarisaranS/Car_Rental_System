import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Root = () => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-3">
                <div className="h-[80px]">
                    <Nav />
                </div>
                <ScrollToTop />
                <Outlet />
                <div className="mt-16">
                    <Footer />
                </div>

            </div>



        </div>
    );
};

export default Root;