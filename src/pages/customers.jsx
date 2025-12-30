import { useState } from "react";
import { 
    Search, Filter, MoreHorizontal, Mail, Phone, 
    UserPlus, Download, ChevronLeft, ChevronRight 
} from "lucide-react";

const CUSTOMERS = [
    { id: 1, name: "Alex Rivera", email: "alex@example.com", status: "Active", spent: "$1,200", country: "USA", initial: "AR", color: "bg-indigo-500" },
    { id: 2, name: "Sarah Chen", email: "sarah.c@tech.io", status: "Active", spent: "$4,550", country: "Canada", initial: "SC", color: "bg-emerald-500" },
    { id: 3, name: "Marcus Wright", email: "m.wright@gmail.com", status: "Inactive", spent: "$0", country: "UK", initial: "MW", color: "bg-amber-500" },
    { id: 4, name: "Elena Petrova", email: "elena@petrova.ru", status: "Active", spent: "$2,100", country: "Germany", initial: "EP", color: "bg-rose-500" },
    { id: 5, name: "Jordan Smith", email: "jordan@company.com", status: "Pending", spent: "$150", country: "Australia", initial: "JS", color: "bg-purple-500" },
];

function Customers() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCustomers = CUSTOMERS.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        c.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in duration-500">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Customers</h2>
                    <p className="text-gray-500 mt-1 font-medium">Manage your customer relationships and data.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all bg-white">
                        <Download size={18} /> Export
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
                        <UserPlus size={18} /> Add Customer
                    </button>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                
                {/* Search and Filters Bar */}
                <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search by name or email..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
                            <Filter size={20} />
                        </button>
                        <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>
                </div>

                {/* The Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Customer</th>
                                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Country</th>
                                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Spent</th>
                                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-indigo-50/20 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-full ${customer.color} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                                                {customer.initial}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-900">{customer.name}</p>
                                                <p className="text-xs text-gray-500 font-medium">{customer.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <StatusBadge status={customer.status} />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">{customer.country}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{customer.spent}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                                                <Mail size={16} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                                                <Phone size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Bar */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Showing 1 to {filteredCustomers.length} of {filteredCustomers.length} entries
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
                            <ChevronLeft size={16} />
                        </button>
                        <button className="p-2 border border-indigo-200 bg-indigo-50 rounded-lg text-indigo-600 font-bold text-xs">1</button>
                        <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }) {
    const styles = {
        Active: "bg-emerald-50 text-emerald-600 ring-emerald-100",
        Inactive: "bg-gray-100 text-gray-500 ring-gray-200",
        Pending: "bg-amber-50 text-amber-600 ring-amber-100",
    };

    return (
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ring-1 ring-inset ${styles[status]}`}>
            {status}
        </span>
    );
}

export default Customers;