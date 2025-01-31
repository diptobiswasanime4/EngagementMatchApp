import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CXOForm from "./components/CXOForm";
import FirmForm from "./components/FirmForm";
import CXODashboard from "./components/CXODashboard";
import FirmDashboard from "./components/FirmDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/auth/Profile";
import { useState } from "react";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cxo-form" element={<CXOForm />}></Route>
        <Route path="/firm-form" element={<FirmForm />}></Route>
        <Route path="/cxo-dashboard" element={<CXODashboard />}></Route>
        <Route path="/firm-dashboard" element={<FirmDashboard />}></Route>
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

function Home() {
  const [link, setLink] = useState("/");
  if (link != "/") {
    return <Navigate to={`${link}`} />;
  }
  return (
    <div className="bg-[#E5E5E5] text-[#1E1E1E]">
      {/* Hero Section */}
      <div className="relative bg-[#0A192F] text-white py-24 text-center">
        <h1 className="text-5xl font-bold">ExecBridge</h1>
        <p className="text-lg mt-4 text-[#FFD700]">
          Unlock Confidential, High-Impact Opportunities with Ease
        </p>
        <p className="mt-2 text-gray-300">
          Flexible, Confidential, and Efficient Advisory Services
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <button
            className="bg-[#0047AB] text-white px-6 py-3 rounded-md text-lg hover:bg-[#00838F] transition"
            onClick={() => setLink("/register")}
          >
            Join Now
          </button>
          <button
            className="border-2 border-[#FFD700] text-[#FFD700] px-6 py-3 rounded-md text-lg hover:bg-[#FFD700] hover:text-black transition"
            onClick={() => setLink("/how-it-works")}
          >
            How ExecBridge Works
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center">How ExecBridge Works</h2>
        <div className="flex justify-center gap-12 mt-8">
          <div className="bg-white shadow-md p-6 rounded-md w-1/3 text-center">
            <img src="image_1.jpg" alt="Post Requirements" className="mx-auto h-32" />
            <h3 className="text-xl font-semibold mt-4">Post Your Requirements</h3>
            <p className="text-[#545E75] mt-2">Easily submit projects and needs for expert CXO advisors.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md w-1/3 text-center">
            <img src="image_2.jpg" alt="Matchmaking" className="mx-auto h-32" />
            <h3 className="text-xl font-semibold mt-4">Get Matched with CXOs</h3>
            <p className="text-[#545E75] mt-2">Our smart algorithm connects you with the right experts.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md w-1/3 text-center">
            <img src="image_3.jpg" alt="Engage with Experts" className="mx-auto h-32" />
            <h3 className="text-xl font-semibold mt-4">Engage with Experts</h3>
            <p className="text-[#545E75] mt-2">Confidential, efficient, and hassle-free advisory services.</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>

        {/* CXO Benefits */}
        <div className="mt-12 flex justify-between items-center">
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold">For CXOs</h3>
            <ul className="list-disc mt-4 ml-6 text-[#545E75]">
              <li>💼 <strong>Flexibility</strong>: Engage in short-term projects without commitments.</li>
              <li>🌐 <strong>Exclusive Network</strong>: Connect with top-tier advisory opportunities.</li>
              <li>🔒 <strong>Privacy</strong>: Guaranteed confidentiality in all engagements.</li>
            </ul>
          </div>
          <img src="image_5.jpg" alt="For CXOs" className="w-1/3 rounded-md shadow-md" />
        </div>

        {/* Business Benefits */}
        <div className="mt-12 flex justify-between items-center flex-row-reverse">
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold">For Businesses</h3>
            <ul className="list-disc mt-4 ml-6 text-[#545E75]">
              <li>📊 <strong>Access to Expertise</strong>: Connect with seasoned professionals.</li>
              <li>⏳ <strong>Time Efficiency</strong>: Rapid onboarding for quick advisory services.</li>
              <li>🔏 <strong>Discreet Service</strong>: Full privacy and confidentiality assured.</li>
            </ul>
          </div>
          <img src="image_4.jpg" alt="For Businesses" className="w-1/3 rounded-md shadow-md" />
        </div>
      </div>

      {/* Trust & Security Section */}
      <div className="py-16 bg-[#0A192F] text-white text-center">
        <h2 className="text-3xl font-bold text-[#FFD700]">Trust & Security</h2>
        <p className="mt-4 text-gray-300">ExecBridge ensures a safe and confidential environment for all users.</p>
        <div className="flex justify-center gap-12 mt-8">
          <div className="bg-[#1E1E1E] shadow-md p-6 rounded-md w-1/3 text-center">
            <h3 className="text-xl font-semibold text-[#FFD700]">User Verification</h3>
            <p className="mt-2 text-gray-300">Strict vetting process for CXOs and businesses.</p>
          </div>
          <div className="bg-[#1E1E1E] shadow-md p-6 rounded-md w-1/3 text-center">
            <h3 className="text-xl font-semibold text-[#FFD700]">Matchmaking Algorithm</h3>
            <p className="mt-2 text-gray-300">AI-powered matching for optimal connections.</p>
          </div>
          <div className="bg-[#1E1E1E] shadow-md p-6 rounded-md w-1/3 text-center">
            <h3 className="text-xl font-semibold text-[#FFD700]">Privacy Settings</h3>
            <p className="mt-2 text-gray-300">Customizable settings for anonymity and security.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-12 text-center">
        <h2 className="text-3xl font-bold">Join ExecBridge Today</h2>
        <p className="mt-4 text-[#545E75]">Connect with top CXOs or get exclusive advisory opportunities.</p>
        <button
          className="mt-6 bg-[#0047AB] text-white px-8 py-3 rounded-md text-lg hover:bg-[#00838F] transition"
          onClick={() => setLink("/register")}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default App;
