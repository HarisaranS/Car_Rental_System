
const DashboardTitle = ({title, desc}) => {
    return (
        <div className="text-center space-y-3 py-10">
            <h1 className="text-4xl font-semibold ">{title}</h1>
            <p className="text-sm font-light">{desc}</p>
        </div>
    );
};

export default DashboardTitle;