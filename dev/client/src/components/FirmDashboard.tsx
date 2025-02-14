// @ts-nocheck
import { Button } from "@radix-ui/themes";
import { Bookmark } from "lucide-react";
import API_ENDPOINT from "../api/config";
import axios from "axios";
import { UserContext } from "../UserContext";
import { useEffect, useContext, useState } from "react";

function FirmDashboard() {
  const { userInfo } = useContext(UserContext);
  const [myEngagements, setMyEngagements] = useState([]);
  const dataObj = { name: "ABCD Company" };
  async function getEngagements() {
    const resp = await axios.get(
      `${API_ENDPOINT}/engagements?email=${userInfo.email}`
    );
    console.log(resp);
    setMyEngagements(resp.data.engagements);
  }

  useEffect(() => {
    getEngagements();
  }, []);
  return (
    <div className="relative bg-[#0A192F] text-white py-24 text-center">
      <h1 className="text-5xl font-bold">Welcome Back!</h1>
      <h1 className="text-4xl font-bol mt-2">{dataObj.name}</h1>
      <p className="mt-10 text-[#FFD700]">
        Let's get started with your posted engagements
      </p>
      <div className="grid grid-cols-2 gap-10 ml-15">
        {myEngagements.map((engagement, index) => {
          return (
            <div className=" my-4 mt-20 py-2 px-2 w-lg rounded-lg shadow-lg bg-white border border-gray-200 transition-transform hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-500">2 days ago</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Bookmark />
                </Button>
              </div>

              <div className="flex items-center gap-4 mb-4">
                {/* <Avatar className="w-12 h-12">
            <AvatarImage src="https://dynamic.brandcrowd.com/preview/logodraft/1527c3de-563a-4222-b8fa-9a523e0dc59f/image/large.png" />
          </Avatar> */}
              </div>

              <div className="mb-4">
                <h2 className="font-semibold text-3xl text-gray-800">
                  {engagement.engagementRole}
                </h2>
                <p className="font-semibold text-lg text-gray-800">
                  {engagement.engagementDescription}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mt-2"></p>
              </div>

              <div className="flex items-center gap-3 mt-20">
                <Button className="bg-gray-800 hover:bg-[#FFD700] text-white font-medium px-4 py-2 rounded-full transition-colors">
                  CXOs matched
                </Button>
                <Button className="bg-[#FFD700] hover:bg-gray-800 hover:text-white text-black font-medium px-4 py-2 rounded-full transition-colors">
                  Remove
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FirmDashboard;
