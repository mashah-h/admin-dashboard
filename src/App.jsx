import AppLayout from "./app/AppLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Analytics from "./pages/analytics";
import Tasks from "./pages/tasks";
import Calendar from "./pages/calendar";
import Customers from "./pages/customers";
import Employees from "./pages/employees";
import Settings from "./pages/settings";


function App() {
  return(
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/settings" element={<Settings />} />
    
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
