import { useState, useEffect } from "react";
import { User, Bell, Lock, Moon, Sun, Globe, Save, Camera } from "lucide-react";

function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState("profile");

    // Effect to handle theme switching
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const tabs = [
        { id: "profile", label: "Profile", icon: <User size={18} /> },
        { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
        { id: "security", label: "Security", icon: <Lock size={18} /> },
    ];

    return (
        <div className="max-w-[1000px] mx-auto space-y-6 animate-in fade-in duration-500">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Settings</h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium">Manage your account preferences and system settings.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Tabs */}
                <div className="w-full md:w-64 space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all
                                ${activeTab === tab.id 
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-8 shadow-sm">
                    {activeTab === "profile" && (
                        <div className="space-y-8">
                            {/* Profile Header */}
                            <div className="flex items-center gap-6">
                                <div className="relative group">
                                    <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-3xl font-bold text-indigo-600 border-4 border-white dark:border-gray-800 shadow-md">
                                        JD
                                    </div>
                                    <button className="absolute bottom-0 right-0 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-100 dark:border-gray-600 text-gray-600 dark:text-gray-300">
                                        <Camera size={14} />
                                    </button>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">John Doe</h4>
                                    <p className="text-sm text-gray-500">Administrator • San Francisco, CA</p>
                                </div>
                            </div>

                            <hr className="border-gray-100 dark:border-gray-800" />

                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                                    <input type="text" defaultValue="John Doe" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                                    <input type="email" defaultValue="john@apex-design.com" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white" />
                                </div>
                            </div>

                            {/* Appearance Section */}
                            <div className="space-y-4 pt-4">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Globe size={18} /> Preferences
                                </h4>
                                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${darkMode ? 'bg-indigo-500 text-white' : 'bg-white text-gray-400'}`}>
                                            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-800 dark:text-white">Dark Mode</p>
                                            <p className="text-xs text-gray-500">Switch between light and dark themes</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => setDarkMode(!darkMode)}
                                        className={`w-12 h-6 rounded-full transition-colors relative ${darkMode ? 'bg-indigo-600' : 'bg-gray-300'}`}
                                    >
                                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${darkMode ? 'translate-x-7' : 'translate-x-1'}`} />
                                    </button>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
                                <Save size={18} /> Save Changes
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Settings;