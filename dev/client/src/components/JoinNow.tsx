import { useState } from "react";
import { Navigate } from "react-router-dom";

function JoinNow() {
  const [link, setLink] = useState("/");
  if (link != "/") {
    return <Navigate to={`${link}`} />;
  }
  return (
    <div className="relative">
      <img className="opacity-50 w-full object-cover" src="bg-1.png" alt="" />
      <div className="absolute inset-0 border-2 mx-auto my-16 bg-black opacity-75 w-2/3 h-1/2">
        <div className="absolute inset-0 text-white flex flex-col items-center gap-12">
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

export default JoinNow;
