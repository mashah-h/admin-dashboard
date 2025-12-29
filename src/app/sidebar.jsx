import { 
    LayoutDashboard,
    BarChart3,
    CheckSquare,
    Calendar,
    Users,
    UserCog,
    Settings,    

} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menu = [
    {label :"Dashboard", icon: LayoutDashboard, path:"/"},
    {label:"Analytics", icon: BarChart3, path:"/analytics"},
    {label:"Tasks", icon: CheckSquare, path:"/tasks"},
    {label:"Calendar", icon: Calendar, path:"/calendar"},
    {label:"Customers", icon: Users, path:"/customers"},
    {label:"Employees", icon: UserCog, path:"/employees"},
    {label:"Settings", icon: Settings, path:"/settings"},
];

function Sidebar() {
    const[active, setActive] = useState("Dashboard");

    return (
        <aside className="w-64 bg-white border-r h-screen fixed left-0 top-0">
            {/* logo  */}
            <div className="h-16 flex items-center px-6 border-b">
                <span className="text-xl font-bold text-indigo-600">APEX</span>
            </div>
            {/* menu */}
            <nav className="p-4 space-y-1">
                {menu.map(({label,icon:Icon, path})=> (
                    <NavLink 
                        to={path}
                        key={label}
                        onClick={() => setActive (label)}
                        className= {`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition
                        ${
                            active === label
                            ?"bg-indigo-50 text-indigo-600 font-medium"
                            :"text-gray-600 hover:bg-gray-100"
                        }
                        `}
                        >
                        <Icon size={18}/>
                        <span>{label}</span>
                        </NavLink>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar;