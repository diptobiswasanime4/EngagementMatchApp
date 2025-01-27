import React, { useState } from "react";

function FirmForm() {
  const [user, setUser] = useState({});
  async function updateCXO() {}
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="text-4xl my-12">Post A New Engagement On ExecBridge</div>
      <input
        className="bg-black text-yellow-300 text-xl p-1"
        type="text"
        placeholder="Firstname"
        value={user.firstname}
        onChange={(e) =>
          setUser((initUser) => ({ ...initUser, firstname: e.target.value }))
        }
      />
      <input
        className="bg-black text-yellow-300 text-xl p-1"
        type="text"
        placeholder="Lastname"
        value={user.lastname}
        onChange={(e) =>
          setUser((initUser) => ({ ...initUser, lastname: e.target.value }))
        }
      />
      <input
        className="bg-black text-yellow-300 text-xl p-1"
        type="text"
        placeholder="Email"
        value={user.email}
        onChange={(e) =>
          setUser((initUser) => ({ ...initUser, email: e.target.value }))
        }
      />
      <input
        className="bg-black text-yellow-300 text-xl p-1"
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) =>
          setUser((initUser) => ({ ...initUser, password: e.target.value }))
        }
      />
      <div
        className="bg-yellow-400 text-2xl text-center rounded p-2 cursor-pointer w-1/6 hover:bg-black hover:text-yellow-400 transition-colors duration-500"
        onClick={updateCXO}
      >
        Submit
      </div>
    </div>
  );
}

export default FirmForm;
