// @ts-nocheck
import { useContext } from "react";
import { UserContext } from "../../UserContext";

function Profile() {
  const { userInfo } = useContext(UserContext);
  return (
    <div className="py-8 text-4xl">
      <div className="">Name - {userInfo.name}</div>
      <div className="">Email - {userInfo.email}</div>
    </div>
  );
}

export default Profile;
