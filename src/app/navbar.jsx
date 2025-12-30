import { Bell, Search, User, Command } from "lucide-react";

function Navbar() {
    return (
        <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="flex items-center justify-between h-20 px-4 md:px-8">
                
                <div className="flex items-center gap-4 flex-1">
                    <div className="hidden md:flex items-center bg-gray-100/80 px-4 py-2 rounded-2xl w-full max-w-sm group focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 transition-all border border-transparent focus-within:border-indigo-200">
                        <Search size={15} className="text-gray-300 right-3 group-focus-within:text-indigo-500" />
                        <input 
                            type="text" 
                            placeholder="Search anything..." 
                            className="bg-transparent border-none focus:outline-none ml-3 text-sm w-full placeholder:text-gray-500"
                        />
                        <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded border border-gray-200 bg-white text-[10px] font-medium text-gray-400">
                            <Command size={10} /> K
                        </kbd>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <button className="relative p-2.5 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 rounded-xl transition-all">
                        <Bell size={20} />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                    </button>
                    
                    <div className="h-8 w-[1px] bg-gray-100 mx-2 hidden sm:block"></div>
                    
                    <div className="flex items-center gap-3 pl-2 cursor-pointer group">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Admin User</p>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Premium</p>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] shadow-md shadow-indigo-100">
                            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-indigo-600">
                                <User size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;