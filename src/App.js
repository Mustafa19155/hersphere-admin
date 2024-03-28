import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Users from "./pages/users";
import Settings from "./pages/settings";
import Categories from "./pages/categories";
import Warnings from "./pages/warnings";
import User from "./pages/user";
import Jobs from "./pages/Jobs";
import Promotions from "./pages/promotions";
import Promotion from "./pages/promotion";
import Job from "./pages/job";

function App() {
  return (
    <div>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="relative w-[calc(100vw_-_267px)] pl-8 py-8 pr-3 bg-white2 left-[calc(250px)] overflow-hidden">
          <div className="max-w-[1400px]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/warnings" element={<Warnings />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/promotions/:id" element={<Promotion />} />
              <Route path="/jobs/:id" element={<Job />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
