function DashboardCard({title, value, icon}) {
    return(
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
            <div className="p-3 bg-indigo-50 rounded-full">{icon}</div>
            <div>
                <h3 className="text-sm text-gray-500">{title}</h3>
                <p className="text-2xl font-semibold">{value}</p>
            </div>

        </div>
    );

}

export default DashboardCard;