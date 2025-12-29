import Sidebar from "./sidebar";
import Navbar from "./navbar";

function AppLayout({ children }) {
    return (
        <div>
        <Sidebar />
        <div className="ml-64">
            <Navbar />
            <main className="p-6 bg-gray-100 min-h-[calc(100vh-4rem)]">
                {children}
            </main>
        </div>
        </div>

    );
}

export default AppLayout;