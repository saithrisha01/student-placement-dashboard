import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import Interviews from "./pages/Interviews";
import Notifications from "./pages/Notifications";
import Selection from "./pages/Selection";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/applications" element={<Applications />} />

        <Route path="/interviews" element={<Interviews />} />

        <Route path="/notifications" element={<Notifications />} />

        <Route path="/selection" element={<Selection />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;