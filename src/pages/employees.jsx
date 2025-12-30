import { useState } from "react";
import { UserPlus, Search, Mail, ShieldCheck, MoreVertical, MapPin } from "lucide-react";

const EMPLOYEES = [
    { id: 1, name: "Sarah Connor", role: "Product Manager", team: "Design", joined: "Jan 2024", status: "In-Office", avatar: "SC" },
    { id: 2, name: "James Howlett", role: "Lead Engineer", team: "Engineering", joined: "Mar 2023", status: "Remote", avatar: "JH" },
    { id: 3, name: "Natasha Romanoff", role: "UX Designer", team: "Design", joined: "June 2024", status: "Hybrid", avatar: "NR" },
];

function Employees() {
    return (
        <div className="max-w-[1600px] mx-auto space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Employee Directory</h2>
                <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-100 hover:bg-indigo-700">
                    <UserPlus size={18} /> Add Employee
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {EMPLOYEES.map((emp) => (
                    <div key={emp.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xl">
                                {emp.avatar}
                            </div>
                            <button className="p-2 hover:bg-gray-50 rounded-xl transition-colors">
                                <MoreVertical size={18} className="text-gray-400" />
                            </button>
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900">{emp.name}</h4>
                        <div className="flex items-center gap-1.5 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
                            <ShieldCheck size={14} /> {emp.role}
                        </div>

                        <div className="space-y-3 pt-4 border-t border-gray-50 text-sm text-gray-500">
                            <div className="flex justify-between">
                                <span>Team</span>
                                <span className="font-bold text-gray-800">{emp.team}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Joined</span>
                                <span className="font-bold text-gray-800">{emp.joined}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Status</span>
                                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-md">{emp.status}</span>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-2">
                            <button className="flex-1 py-2 bg-gray-50 text-gray-600 rounded-xl text-xs font-bold hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                                Profile
                            </button>
                            <button className="p-2 bg-gray-50 text-gray-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
                                <Mail size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Employees;