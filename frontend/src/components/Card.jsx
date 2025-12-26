import { CiLocationOn, CiSettings } from "react-icons/ci";
import { SlSpeedometer } from "react-icons/sl";
import { MdAirlineSeatReclineNormal, MdOutlineLocalGasStation } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ car }) => {
    const {_id, photo, title, location, price, fuelType, seats, speed } = car;


    return (
        <div>
            <div className="relative border rounded-xl">
                {price >= 500 && <h3 className="font-semibold text-green-600 bg-white px-3 py-1 rounded-full absolute right-2 top-2">Best Sale</h3>}
                <img src={photo} alt="" className="rounded-t-xl w-full h-72 object-cover" />

                <div className="p-5">
                    <h3 className="text-2xl font-semibold py-2">{title}</h3>
                    <div className="flex items-center space-x-2 text-[#aba8a8] mb-2">
                        <CiLocationOn />
                        <span>{location}</span>
                    </div>
                    <hr />
                    <div className="grid grid-cols-2 mt-2">
                        <div>
                            <div className="flex items-center space-x-2 text-[#aba8a8] mb-2 font-semibold">
                                <SlSpeedometer />
                                <span>{speed}</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 text-[#aba8a8] mb-2 font-semibold">
                                <MdOutlineLocalGasStation />
                                <span>{fuelType}</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 text-[#aba8a8] mb-2 font-semibold">
                                <CiSettings />
                                <span>Automatic</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 text-[#aba8a8] mb-2 font-semibold">
                                <MdAirlineSeatReclineNormal />
                                <span>{seats}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-end space-x-1">
                            <h1 className="text-3xl font-semibold">${price} </h1>
                            <span className="text-[#aaa8a8]">/ day</span>
                        </div>
                        <Link to={`/carDetails/${_id}`} className=" bg-[#f2f2ff] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#e5e5fc]">Book Now</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;