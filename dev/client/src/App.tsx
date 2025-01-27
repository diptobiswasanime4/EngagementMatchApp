import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CXOForm from "./components/CXOForm";
import FirmForm from "./components/FirmForm";
import CXODashboard from "./components/CXODashboard";
import FirmDashboard from "./components/FirmDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
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
    <div className="relative">
      <img className="opacity-50" src="bg-1.png" alt="" />
      <div className="absolute inset-0 border-2 mx-auto my-16 bg-black opacity-75 w-2/3 h-1/2">
        <div className="absolute inset-0 text-yellow-400 flex flex-col items-center gap-12">
          <div className="text-4xl font-semibold mt-16">
            Join Our Network as a CXO or a Firm
          </div>
          <div className="flex">
            <div className="mx-12">
              <div className="flex flex-col items-center">
                <div className="">Join us as a CXO to become part of the</div>
                <div className="">largest network of CXOs</div>
              </div>
              <div
                className="bg-yellow-400 text-black text-2xl text-center rounded my-8 p-2 cursor-pointer border-2 hover:bg-black hover:text-yellow-500 transition-colors duration-500"
                onClick={() => setLink("/cxo-form")}
              >
                Join as Expert
              </div>
            </div>
            <div className="mx-12">
              <div className="flex flex-col items-center">
                <div className="">Join us as a Firm to get access to the</div>
                <div className="">largest network of CXOs</div>
              </div>
              <div
                className="bg-yellow-400 text-black text-2xl text-center rounded my-8 p-2 cursor-pointer border-2 hover:bg-black hover:text-yellow-500 transition-colors duration-500"
                onClick={() => setLink("/firm-form")}
              >
                Find your Expert
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
