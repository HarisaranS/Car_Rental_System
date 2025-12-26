import { FaCaravan, FaUsers } from "react-icons/fa";
import DashboardTitle from "../Shared/DashboardTitle";
import { GiProfit } from "react-icons/gi";
import { Chart } from "react-google-charts";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import useUsers from "../hooks/useUsers";


const Statistics = () => {

    const [users] = useUsers();

    const data = [
        ["Year", "Sales", "Expenses"],
        ["2014", 1000, 400],
        ["2015", 1170, 460],
        ["2016", 660, 1120],
        ["2017", 1030, 540],
    ]

    const options = {
        title: "Monthly Sales",
        colors: ["#07c204", "#ed11c1"],  // Custom bar color
        chartArea: { width: "70%" },
        hAxis: {
            title: "Total Sales",
            minValue: 0,
        },
        vAxis: {
            title: "Month",
        },
    };


    return (
        <div>
            <DashboardTitle title="Statistics" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam." />

            <div className="max-w-2xl mx-auto py-20">
                <Chart
                    chartType="Bar"
                    data={data}
                    options={options}
                />
            </div>

            <div className="grid grid-cols-4 gap-6">

                <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <GiProfit className="text-5xl" />
                    <div>
                        <h3 className="text-4xl font-semibold">1000</h3>
                        <p>Revenue</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <FaUsers className="text-5xl" />
                    <div>
                        <h3 className="text-4xl font-semibold">{users.length}</h3>
                        <p>Customers</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-cyan-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <MdOutlineProductionQuantityLimits className="text-5xl" />
                    <div>
                        <h3 className="text-4xl font-semibold">55</h3>
                        <p>Products</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <FaCaravan className="text-5xl" />
                    <div>
                        <h3 className="text-4xl font-semibold">255</h3>
                        <p>Orders</p>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Statistics;