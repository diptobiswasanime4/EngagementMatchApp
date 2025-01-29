import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import API_ENDPOINT from "../api/config";

function Navbar() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  async function logout() {
    const resp = await axios.post(
      `${API_ENDPOINT}/logout`,
      { email: userInfo.email },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(resp);

    setUserInfo({});
  }

  if (userInfo.email) {
    return (
      <div className="bg-black h-32 py-4 px-16 flex justify-between">
        <Link className="text-white text-6xl" to={"/"}>
          CXO
        </Link>
        <div className="flex gap-4">
          <Link
            className="text-white text-4xl hover:text-yellow-400 transition-colors duration-500 cursor-pointer"
            to={"/profile"}
          >
            Profile
          </Link>
          <div
            className="text-white text-4xl hover:text-yellow-400 transition-colors duration-500 cursor-pointer"
            onClick={logout}
          >
            Sign Out
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-black h-32 py-4 px-16 flex justify-between">
        <Link className="text-white text-6xl" to={"/"}>
          CXO
        </Link>
        <div className="flex gap-4">
          <Link
            className="text-white text-4xl hover:text-yellow-400 transition-colors duration-500 cursor-pointer"
            to={"/login"}
          >
            Sign In
          </Link>
          <Link
            className="text-white text-4xl hover:text-yellow-400 transition-colors duration-500 cursor-pointer"
            to={"/register"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
