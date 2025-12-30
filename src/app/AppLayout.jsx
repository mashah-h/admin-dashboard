import Sidebar from "./sidebar";
import Navbar from "./navbar";

function AppLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all duration-300">
                <Navbar />
                
                <main className="p-4 md:p-8 flex-1 overflow-x-hidden">
                    <div className="max-w-[1600px] mx-auto">
                        {children}
                    </div>
                </main>

                <footer className="p-4 text-center text-gray-400 text-xs">
                    © 2025 Apex Dashboard v1.0
                </footer>
            </div>
        </div>
    );
}

export default AppLayout;