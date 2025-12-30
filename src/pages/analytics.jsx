import { useState } from "react";
import { 
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Cell, PieChart, Pie
} from "recharts";
import { 
    TrendingUp, Users, DollarSign, ArrowUpRight, ArrowDownRight, 
    Download, Filter, Calendar as CalendarIcon 
} from "lucide-react";

const REVENUE_DATA = [
    { month: "Jan", revenue: 4500, users: 1200 },
    { month: "Feb", revenue: 5200, users: 1500 },
    { month: "Mar", revenue: 4800, users: 1400 },
    { month: "Apr", revenue: 6100, users: 1800 },
    { month: "May", revenue: 5900, users: 2100 },
    { month: "Jun", revenue: 7200, users: 2500 },
];

const CUSTOMER_TYPE_DATA = [
    { name: "Enterprise", value: 400, color: "#6366f1" },
    { name: "SME", value: 300, color: "#818cf8" },
    { name: "Individual", value: 300, color: "#c7d2fe" },
];

function Analytics() {
    return (
        <div className="max-w-[1600px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* Header section with Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Analytics Overview</h2>
                    <p className="text-gray-500 mt-1 text-sm font-medium">Detailed insights into your business performance.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                        <CalendarIcon size={16} /> Last 6 Months
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
                        <Download size={16} /> Export Report
                    </button>
                </div>
            </div>

            {/* KPI Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Revenue" value="$45,231.89" trend="+12.5%" isPositive icon={<DollarSign size={20}/>} />
                <StatCard title="Active Users" value="12,405" trend="+8.2%" isPositive icon={<Users size={20}/>} />
                <StatCard title="Conversion Rate" value="3.42%" trend="-1.1%" isPositive={false} icon={<TrendingUp size={20}/>} />
                <StatCard title="Avg. Order Value" value="$128.50" trend="+4.3%" isPositive icon={<ArrowUpRight size={20}/>} />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Main Area Chart (Takes 2/3 width) */}
                <div className="xl:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Revenue Growth</h3>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">Monthly Financials</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
                                <div className="w-2 h-2 rounded-full bg-indigo-600"></div> Revenue
                            </span>
                        </div>
                    </div>
                    
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={REVENUE_DATA}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area 
                                    type="monotone" 
                                    dataKey="revenue" 
                                    stroke="#6366f1" 
                                    strokeWidth={3}
                                    fillOpacity={1} 
                                    fill="url(#colorRev)" 
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pie Chart (Takes 1/3 width) */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Base</h3>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-8">Segmentation</p>
                    
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={CUSTOMER_TYPE_DATA}
                                    innerRadius={70}
                                    outerRadius={90}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {CUSTOMER_TYPE_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        
                        {/* Custom Legend */}
                        <div className="w-full space-y-3 mt-4">
                            {CUSTOMER_TYPE_DATA.map((item) => (
                                <div key={item.name} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                        <span className="text-gray-600 font-medium">{item.name}</span>
                                    </div>
                                    <span className="font-bold text-gray-900">{item.value} users</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, trend, isPositive, icon }) {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-gray-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {icon}
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1 ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                    {isPositive ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>}
                    {trend}
                </span>
            </div>
            <h4 className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">{title}</h4>
            <p className="text-2xl font-bold text-gray-900 tracking-tight">{value}</p>
        </div>
    );
}

export default Analytics;