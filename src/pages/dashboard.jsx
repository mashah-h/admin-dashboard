import { Users, CheckSquare, DollarSign, UserPlus, TrendingUp, Calendar } from "lucide-react";
import DashboardCard from "../components/dashboardCard";
import AnalyticsChart from "../components/AnalyticsCard";
import RecentActivity from "../components/recentActivity";
import DashboardFilters from "../components/dashboardFilters";

function Dashboard() {
    // Enhanced card data with growth indicators
    const cards = [
        { title: "Total Users", value: "1,245", trend: "+12%", icon: <Users size={20} /> },
        { title: "New Signups", value: "320", trend: "+5%", icon: <UserPlus size={20} /> },
        { title: "Total Sales", value: "$24,300", trend: "+18%", icon: <DollarSign size={20} /> },
        { title: "Open Tasks", value: "87", trend: "-2%", icon: <CheckSquare size={20} /> },
    ];

    const chartData = [
        { name: 'Jan', value: 400 }, { name: 'Feb', value: 300 }, { name: 'Mar', value: 500 },
        { name: 'Apr', value: 200 }, { name: 'May', value: 600 }, { name: 'Jun', value: 400 },
    ];

    const recentActivity = [
        { user: 'John Doe', activity: 'Logged in', date: '2024-06-01', status: 'Completed' },
        { user: 'Jane Smith', activity: 'Updated profile', date: '2024-06-02', status: 'Pending' },
        { user: 'Mike Johnson', activity: 'Made a purchase', date: '2024-06-03', status: 'Completed' },
    ];

    return (
        <div className="max-w-[1600px] mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
            
            {/* 1. WELCOME & FILTER BAR */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div>
                    <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-1">
                        <TrendingUp size={14} /> System Live
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Apex Insights</h2>
                    <p className="text-gray-500 text-sm font-medium">Your business performance is up <span className="text-emerald-500 font-bold">14%</span> this week.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <DashboardFilters onFilterChange={(d) => console.log(d)} />
                    <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-xl">
                        <Calendar size={18} /> Generate Report
                    </button>
                </div>
            </div>

            {/* 2. KPI GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {cards.map((card) => (
                    <div key={card.title} className="group relative overflow-hidden bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
                        <div className="flex justify-between items-start relative z-10">
                            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl group-hover:scale-110 transition-transform">
                                {card.icon}
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-lg ${card.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                                {card.trend}
                            </span>
                        </div>
                        <div className="mt-5 relative z-10">
                            <h3 className="text-gray-400 dark:text-gray-500 text-xs font-black uppercase tracking-widest">{card.title}</h3>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1 tracking-tighter">{card.value}</p>
                        </div>
                        {/* Subtle background decoration */}
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full blur-2xl group-hover:bg-indigo-100 transition-colors" />
                    </div>
                ))}
            </div>

            {/* 3. CHARTS & TABLES SECTION */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* Main Revenue Chart */}
                <div className="xl:col-span-2 space-y-4">
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Revenue Stream</h3>
                            <select className="bg-gray-50 dark:bg-gray-800 border-none text-xs font-bold px-3 py-1.5 rounded-lg outline-none cursor-pointer">
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                        <div className="h-[300px]">
                            <AnalyticsChart data={chartData} />
                        </div>
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="xl:col-span-1">
                    <div className="bg-white dark:bg-gray-900 h-full rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col overflow-hidden">
                        <div className="p-8 border-b border-gray-50 dark:border-gray-800 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Activity</h3>
                            <button className="text-indigo-600 text-xs font-bold hover:underline">View All</button>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            <RecentActivity data={recentActivity} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;