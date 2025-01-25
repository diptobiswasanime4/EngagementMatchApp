import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CXOForm from "./components/CXOForm";
import FirmForm from "./components/FirmForm";
import CXODashboard from "./components/CXODashboard";
import FirmDashboard from "./components/FirmDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cxo-form" element={<CXOForm />}></Route>
      <Route path="/firm-form" element={<FirmForm />}></Route>
      <Route path="/cxo-dashboard" element={<CXODashboard />}></Route>
      <Route path="/firm-dashboard" element={<FirmDashboard />}></Route>
    </Routes>
  );
}

function Home() {
  return <div className="text-2xl">Hello World</div>;
}

export default App;
