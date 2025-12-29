import { Users, CheckSquare, DollarSign, UserPlus } from "lucide-react";
import DashboardCard from "../components/dashboardCard";
import AnalyticsChart from "../components/AnalyticsCard";
import RecentActivity from "../components/recentActivity";
import DashboardFilters from "../components/dashboardFilters";

function Dashboard(){

    const cards = [
        {title: "Total Users", value: "1,245", icon: <Users size={20} className="text-indigo-600"/>},
        {title: "New Signups", value: "320", icon: <UserPlus size={20} className="text-indigo-600"/>},
        {title: "Total Sales", value: "$24,300", icon: <DollarSign size={20} className="text-indigo-600"/>},
        {title: "Open Tasks", value: "87", icon: <CheckSquare size={20} className="text-indigo-600"/>},
    ]

    const ChartData = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 500 },
        { name: 'Apr', value: 200 },
        { name: 'May', value: 600 },
        { name: 'Jun', value: 400 },
    ]
    const recentActivity = [
        {user : 'John Doe', activity: 'Logged in', date: '2024-06-01', status: 'Completed'},
        {user : 'Jane Smith', activity: 'Updated profile', date: '2024-06-02', status: 'Pending'},
        {user : 'Mike Johnson', activity: 'Made a purchase', date: '2024-06-03', status: 'Completed'},
        {user : 'Emily Davis', activity: 'Logged out', date: '2024-06-04', status: 'Failed'},
    ]

    const handlleFilterChange = ({startDate, endDate}) => {
        console.log("Filters applied:", startDate, endDate);
    } //future use to filter chart & table data
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-gray-500 mt-2">Overview of key metrics</p>
            {/* Filters */}
            <DashboardFilters onFilterChange={handlleFilterChange}/>
            {/* kpi cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card)=>(
                    <DashboardCard 
                        key={card.title}
                        title={card.title}
                        value={card.value}
                        icon={card.icon}
                    />
                ))}
                {/* charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <AnalyticsChart data={ChartData} title="Monthly Revenue"/>
                    <AnalyticsChart data={ChartData} title="Active users"/>
                </div>
                {/* recent activity */}
                <RecentActivity data={recentActivity}/>
                </div>
        </div>
    )
}

export default Dashboard;
