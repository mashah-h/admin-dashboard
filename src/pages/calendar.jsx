import { useState, useMemo } from "react";
import { 
    format, addMonths, subMonths, startOfMonth, endOfMonth, 
    startOfWeek, endOfWeek, isSameMonth, isSameDay, eachDayOfInterval 
} from "date-fns";
import { 
    ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, 
    Clock, Filter, Download, MoreHorizontal, CheckCircle2 
} from "lucide-react";

function CalendarApp() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { days, monthStart } = useMemo(() => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        
        return {
            days: eachDayOfInterval({ start: startDate, end: endDate }),
            monthStart
        };
    }, [currentMonth]);

    // Mock data for UI demonstration
    const tasks = [
        { id: 1, title: "Product Launch", date: new Date(), type: "work", priority: "High" },
        { id: 2, title: "Meeting with Stakeholders", date: new Date(), type: "meeting", priority: "Medium" }
    ];

    return (
        <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in duration-500">
            
            {/* 1. TOP STATS BAR */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-500 rounded-2xl p-4 text-white flex items-center justify-between shadow-lg shadow-indigo-200">
                    <div>
                        <p className="text-indigo-100 text-xs font-bold uppercase tracking-wider">Upcoming Tasks</p>
                        <h4 className="text-2xl font-bold">12 Active</h4>
                    </div>
                    <CalendarIcon className="opacity-40" size={32} />
                </div>
                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Completed Today</p>
                        <h4 className="text-2xl font-bold text-gray-800">4 Tasks</h4>
                    </div>
                    <CheckCircle2 className="text-emerald-500" size={32} />
                </div>
                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Efficiency</p>
                        <h4 className="text-2xl font-bold text-gray-800">92%</h4>
                    </div>
                    <div className="w-10 h-10 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin-slow"></div>
                </div>
            </div>

            {/* 2. MAIN HEADER ACTIONS */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold text-gray-900">
                        {format(currentMonth, "MMMM yyyy")}
                    </h2>
                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-1.5 hover:bg-white hover:shadow-sm rounded-md transition-all">
                            <ChevronLeft size={16} />
                        </button>
                        <button onClick={() => setCurrentMonth(new Date())} className="px-3 text-xs font-bold text-gray-600">Today</button>
                        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-1.5 hover:bg-white hover:shadow-sm rounded-md transition-all">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                        <Download size={16} /> Export
                    </button>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-2">
                        <Plus size={18} /> New Event
                    </button>
                </div>
            </div>

            {/* 3. CALENDAR & SIDEBAR WRAPPER */}
            <div className="flex flex-col xl:flex-row gap-6">
                
                {/* CALENDAR BODY */}
                <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50/50">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
                            <div key={d} className="py-3 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest border-r border-gray-100 last:border-0">
                                {d}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-px bg-gray-100">
                        {days.map((day, idx) => {
                            const isCurrentMonth = isSameMonth(day, monthStart);
                            const isToday = isSameDay(day, new Date());
                            const isSelected = isSameDay(day, selectedDate);
                            const dayTasks = tasks.filter(t => isSameDay(t.date, day));

                            return (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedDate(day)}
                                    className={`relative min-h-[120px] p-2 transition-all cursor-pointer group flex flex-col
                                        ${isCurrentMonth ? "bg-white" : "bg-gray-50/30 text-gray-300"}
                                        ${isSelected ? "bg-indigo-50/20" : "hover:bg-gray-50/80"}
                                    `}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-lg
                                            ${isToday ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" : "text-gray-500"}
                                            ${isSelected && !isToday ? "bg-gray-900 text-white" : ""}
                                        `}>
                                            {format(day, "d")}
                                        </span>
                                        {dayTasks.length > 0 && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>}
                                    </div>

                                    <div className="flex-1 space-y-1 overflow-hidden">
                                        {dayTasks.map(task => (
                                            <div key={task.id} className="text-[10px] px-2 py-1 rounded-md bg-indigo-50 text-indigo-700 font-bold border border-indigo-100 truncate">
                                                {task.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT SIDEBAR (Schedule) */}
                <div className="w-full xl:w-96 flex flex-col gap-6">
                    <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Day Schedule</h3>
                                <p className="text-sm text-gray-500">{format(selectedDate, "EEEE, MMMM do")}</p>
                            </div>
                            <button className="p-2 hover:bg-gray-50 rounded-xl transition-all">
                                <MoreHorizontal size={20} className="text-gray-400" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {tasks.filter(t => isSameDay(t.date, selectedDate)).length > 0 ? (
                                tasks.filter(t => isSameDay(t.date, selectedDate)).map(task => (
                                    <div key={task.id} className="relative pl-6 py-1 group">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-full group-hover:w-1.5 transition-all"></div>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-500 uppercase tracking-tighter mb-1">
                                            <Clock size={12} /> 09:00 AM - 10:30 AM
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-800 mb-1">{task.title}</h4>
                                        <p className="text-xs text-gray-500 line-clamp-1">Reviewing the latest sprint results.</p>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CalendarIcon size={24} className="text-gray-300" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-400">No events for this day</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* MINI CARD */}
                    <div className="bg-gray-900 rounded-3xl p-6 text-white overflow-hidden relative shadow-xl shadow-gray-200">
                        <div className="relative z-10">
                            <h4 className="font-bold mb-2">Apex Premium</h4>
                            <p className="text-xs text-gray-400 mb-4 leading-relaxed">Upgrade to unlock advanced team collaboration tools.</p>
                            <button className="text-xs font-bold bg-white text-gray-900 px-4 py-2 rounded-xl">Learn More</button>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarApp;