import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
    LayoutDashboard, Calendar, CheckSquare, Users, 
    Settings, BarChart3, Menu, X, Briefcase 
} from "lucide-react";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/" },
        { icon: <BarChart3 size={20} />, label: "Analytics", path: "/analytics" },
        { icon: <Calendar size={20} />, label: "Calendar", path: "/calendar" },
        { icon: <CheckSquare size={20} />, label: "Tasks", path: "/tasks" },
        { icon: <Users size={20} />, label: "Customers", path: "/customers" },
        { icon: <Briefcase size={20} />, label: "Employees", path: "/employees" },
    ];

    return (
        <>
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="lg:hidden fixed top-4 left-4 z-[60] p-2.5 bg-white border border-gray-200 text-gray-900 rounded-xl shadow-xl active:scale-90 transition-all"
                >
                    <Menu size={20} />
                </button>
            )}

            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Drawer */}
            <aside className={`
                fixed top-0 left-0 h-screen bg-white border-r z-50 flex flex-col transition-transform duration-300 ease-in-out
                w-72 lg:w-64 lg:translate-x-0 
                ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
            `}>
                <div className="px-6 py-6 flex items-center justify-between">
                    <span className="text-2xl font-black text-indigo-600 tracking-tighter">Apex</span>
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-400"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                                ${isActive 
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100 font-bold" 
                                    : "text-gray-500 hover:bg-indigo-50 hover:text-indigo-600"}
                            `}
                        >
                            {item.icon}
                            <span className="text-sm tracking-wide">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-50">
                    <NavLink
                        to="/settings"
                        className={({ isActive }) => `
                            flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                            ${isActive ? "bg-indigo-600 text-white font-bold" : "text-gray-500 hover:bg-gray-50"}
                        `}
                    >
                        <Settings size={20} />
                        <span className="text-sm">Settings</span>
                    </NavLink>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;