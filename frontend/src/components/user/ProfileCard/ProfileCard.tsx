import React from "react";
import Profile from "../../../assets/user.png";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard rounded-xl flex flex-col relative gap-4 overflow-x-auto bg-cardColor">
      <div className="ProfileImages relative flex flex-col items-center justify-center">
        <img src={Profile} alt="" className="w-24 rounded-full bottom-0 -mb-12 shadow-profileShadow"/>
      </div>

      <div className="ProfileName flex flex-col items-center mt-12 gap-2">
        <span className="font-bold">Bossy Ben</span>
      </div>

      <div className="followStatus flex flex-col items-center justify-center gap-3">
        <hr className="w-5/6 border border-hrColor"/>
        <div className="flex gap-4 w-4/5 justify-center items-center">
          <div className="follow flex flex-col items-center justify-center">
            <span className="font-bold">72M</span>
            <span className="text-gray text-xs">Followers</span>
          </div>
          <div className="vl h-24 border-l border-hrColor"></div>
          <div className="follow flex flex-col items-center justify-center">
            <span className="font-bold">1</span>
            <span className="text-gray text-xs">Following</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl h-24 border-l border-hrColor"></div>
              <div className="follow flex flex-col items-center justify-center">
                <span className="font-bold">9</span>
                <span className="text-gray text-xs">Posts</span>
              </div>
            </>
          )}
        </div>
        <hr className="w-5/6 border border-hrColor"/>
      </div>
      {ProfilePage ? "" : <span className="font-bold text-orange self-center mb-4 cursor-pointer">My Profile</span>}
    </div>
  );
};

export default ProfileCard;
