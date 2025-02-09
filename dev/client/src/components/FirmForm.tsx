import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import API_ENDPOINT from "../api/config";

function FirmForm() {
  const [engagement, setEngagement] = useState({});
  async function addEngagement() {
    const resp = await axios.post(
      `${API_ENDPOINT}/addEngagement`,
      { ...engagement, email: userInfo.email },
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
      <div className="text-5xl mt-12 mb-8">
        Post A New Engagement On ExecBridge
      </div>
      <div className="flex flex-col gap-8 w-2/3 bg-[#0A192F] py-12 px-8 rounded-2xl border-2 border-yellow-500">
        <div className="flex gap-12">
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Phone"
            value={engagement.phone}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
                phone: e.target.value,
              }))
            }
          />
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Highest Qualification"
            value={engagement.highestQualification}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
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
            value={engagement.yearsOfExp}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
                yearsOfExp: e.target.value,
              }))
            }
          />
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Current Organization"
            value={engagement.currentOrg}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
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
            value={engagement.industry}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
                industry: e.target.value,
              }))
            }
          />
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Domain of Expertise"
            value={engagement.domainOfExpertise}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
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
            value={engagement.curTitle}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
                curTitle: e.target.value,
              }))
            }
          />
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Location Preference"
            value={engagement.locationPreference}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
                locationPreference: e.target.value,
              }))
            }
          />
        </div>
        <input
          className="bg-white text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
          type="text"
          placeholder="Skills"
          value={engagement.skills}
          onChange={(e) =>
            setEngagement((initEngagement) => ({
              ...initEngagement,
              skills: e.target.value,
            }))
          }
        />
        <div
          className="bg-yellow-400 text-3xl text-center rounded-lg p-2 cursor-pointer mx-auto w-1/2 border-2 hover:bg-black hover:text-yellow-400 transition-colors duration-500"
          onClick={addEngagement}
        >
          Submit
        </div>
      </div>
    </div>
  );
}

export default FirmForm;
