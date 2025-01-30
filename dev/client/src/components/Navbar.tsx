import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import API_ENDPOINT from "../api/config";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

function Navbar() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  async function logout() {
    try {
      const resp = await axios.post(
        `${API_ENDPOINT}/logout`,
        { email: userInfo.email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(resp);
      setUserInfo({});
    } catch (error) {
      console.error("Logout failed", error);
    }
  }

  return (
    <nav className="bg-[#0A192F] text-white py-4 px-8 md:px-16 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-[#FFD700]">
        CXO India
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center text-lg">
        <Link
          to="/how-it-works"
          className="hover:text-[#FFD700] transition-colors duration-300"
        >
          How It Works
        </Link>
        <Link
          to="/services"
          className="hover:text-[#FFD700] transition-colors duration-300"
        >
          Services
        </Link>
        <Link
          to="/profile"
          className="hover:text-[#FFD700] transition-colors duration-300"
        >
          Profile
        </Link>

        {userInfo.email ? (
          <button
            onClick={logout}
            className="bg-[#0047AB] text-white px-5 py-2 rounded-md hover:bg-[#00838F] transition"
          >
            Sign Out
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="text-white px-5 py-2 border border-[#FFD700] rounded-md hover:bg-[#FFD700] hover:text-black transition"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-[#0047AB] px-5 py-2 rounded-md hover:bg-[#00838F] transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0A192F] text-white flex flex-col items-center gap-6 py-6 shadow-md">
          <Link to="/how-it-works" onClick={() => setMenuOpen(false)}>
            How It Works
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)}>
            Profile
          </Link>

          {userInfo.email ? (
            <button
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="bg-[#0047AB] text-white px-5 py-2 rounded-md hover:bg-[#00838F] transition"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white px-5 py-2 border border-[#FFD700] rounded-md hover:bg-[#FFD700] hover:text-black transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-[#0047AB] px-5 py-2 rounded-md hover:bg-[#00838F] transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
