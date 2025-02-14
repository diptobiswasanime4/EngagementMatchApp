// @ts-nocheck
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import API_ENDPOINT from "../api/config";

function FirmForm() {
  const { userInfo } = useContext(UserContext);
  const [engagement, setEngagement] = useState({});
  async function addEngagement() {
    console.log(engagement);

    const resp = await axios.post(
      `${API_ENDPOINT}/addEngagement`,
      { ...engagement, postedBy: userInfo.email },
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
            placeholder="Engagement Role"
            value={engagement.engagementRole}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
                engagementRole: e.target.value,
              }))
            }
          />
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Engagement Type"
            value={engagement.engagementType}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
                engagementType: e.target.value,
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
            placeholder="Department"
            value={engagement.department}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
                department: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex gap-12">
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Educational Requirements"
            value={engagement.educationalRequirements}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
                educationalRequirements: e.target.value,
              }))
            }
          />
          <input
            className="bg-white w-1/2 text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
            type="text"
            placeholder="Required Experience"
            value={engagement.requiredExperience}
            onChange={(e) =>
              setEngagement((initEngagement) => ({
                ...initEngagement,
                requiredExperience: e.target.value,
              }))
            }
          />
        </div>
        <input
          className="bg-white text-black rounded-full text-2xl p-2 border-2 border-yellow-400"
          type="text"
          placeholder="Skills Required"
          value={engagement.skills}
          onChange={(e) =>
            setEngagement((initEngagement) => ({
              ...initEngagement,
              skills: e.target.value,
            }))
          }
        />
        <textarea
          className="bg-white text-black h-32 rounded-2xl text-2xl p-2 border-2 border-yellow-400"
          type="text"
          placeholder="Engagement Description"
          value={engagement.engagementDescription}
          onChange={(e) =>
            setEngagement((initEngagement) => ({
              ...initEngagement,
              engagementDescription: e.target.value,
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
