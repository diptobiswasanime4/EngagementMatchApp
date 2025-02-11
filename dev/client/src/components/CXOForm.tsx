// @ts-nocheck
import { useContext, useState } from "react";
import API_ENDPOINT from "../api/config";
import axios from "axios";
import { UserContext } from "../UserContext";

function CXOForm() {
  const { userInfo } = useContext(UserContext);

  const [user, setUser] = useState({});
  async function updateCXO() {
    const resp = await axios.post(
      `${API_ENDPOINT}/updateCXO`,
      { ...user, email: userInfo.email },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(resp);
  }
  return (
    <div className="flex flex-col gap-6 items-center mb-24">
      <div className="text-6xl mt-12">Submit Your Profile On ExecBridge</div>
      <div className="flex flex-col items-center mb-4">
        <div className="text-2xl">
          Be part of the largest network of CXOs in India looking for
          personalized
        </div>
        <div className="text-2xl">engagements with Industry defining Firms</div>
      </div>
      <div className="flex flex-col gap-8 w-2/3 bg-black py-12 px-8 rounded-2xl border-2 border-yellow-500">
        <div className="flex gap-12">
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Name"
            value={userInfo.name}
            readOnly
          />
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Email"
            value={userInfo.email}
            readOnly
          />
        </div>
        <div className="flex gap-12">
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Phone"
            value={user.phone}
            onChange={(e) =>
              setUser((initUser) => ({ ...initUser, phone: e.target.value }))
            }
          />
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Highest Qualification"
            value={user.highestQualification}
            onChange={(e) =>
              setUser((initUser) => ({
                ...initUser,
                highestQualification: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex gap-12">
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Years of Experience"
            value={user.yearsOfExp}
            onChange={(e) =>
              setUser((initUser) => ({
                ...initUser,
                yearsOfExp: e.target.value,
              }))
            }
          />
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Current Organization"
            value={user.currentOrg}
            onChange={(e) =>
              setUser((initUser) => ({
                ...initUser,
                currentOrg: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex gap-12">
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Industry"
            value={user.industry}
            onChange={(e) =>
              setUser((initUser) => ({
                ...initUser,
                industry: e.target.value,
              }))
            }
          />
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Domain of Expertise"
            value={user.domainOfExpertise}
            onChange={(e) =>
              setUser((initUser) => ({
                ...initUser,
                domainOfExpertise: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex gap-12">
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Current Title"
            value={user.curTitle}
            onChange={(e) =>
              setUser((initUser) => ({
                ...initUser,
                curTitle: e.target.value,
              }))
            }
          />
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Location Preference"
            value={user.locationPreference}
            onChange={(e) =>
              setUser((initUser) => ({
                ...initUser,
                locationPreference: e.target.value,
              }))
            }
          />
        </div>
        <input
          className="bg-white text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
          type="text"
          placeholder="Skills"
          value={user.skills}
          onChange={(e) =>
            setUser((initUser) => ({
              ...initUser,
              skills: e.target.value,
            }))
          }
        />
        <div
          className="bg-yellow-400 text-3xl text-center rounded-lg p-2 cursor-pointer mx-auto w-1/2 border-2 hover:bg-black hover:text-yellow-400 transition-colors duration-500"
          onClick={updateCXO}
        >
          Submit
        </div>
      </div>
    </div>
  );
}

export default CXOForm;
