import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './Pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './Pages/Profile';
import { useState } from 'react';

// ✅ Create a wrapper layout so we can use useLocation
function Layout({ open, setOpen }) {
  const location = useLocation(); // 🔎 get current path

  // 🚫 Routes where we do NOT want the Header to show
  const hiddenHeaderPaths = ["/", "/profile"];

  return (
    <div className="w-full flex">
      {/* Sidebar is always shown */}
      <Sidebar open={open} setOpen={setOpen} />

      <div className="h-screen flex-1 bg-zinc-100">
        {/* ✅ Conditionally render Header */}
        {!hiddenHeaderPaths.includes(location.pathname) && <Header />}

        {/* Main routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(true);

  return (
    <Router>
      {/* ✅ Pass state to Layout */}
      <Layout open={open} setOpen={setOpen} />
    </Router>
  );
}

export default App;