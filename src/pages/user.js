import React, { useEffect, useState } from "react";
import { blockUser, getUser, unblockUser } from "../api/users";
import { useParams } from "react-router-dom";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import capitalizeFirst from "../utils/CapitalizeFirst";
import Workplaces from "../components/User/Workplaces";
import Jobs from "../components/User/Jobs";
import Promotions from "../components/User/Promotions";

const User = () => {
  const params = useParams();
  const [loading, setloading] = useState(false);
  const [user, setuser] = useState(null);
  const [apiCalled, setapiCalled] = useState(false);

  const handleBlock = () => {
    setapiCalled(true);
    blockUser(params.id)
      .then((res) => {
        setuser({
          ...user,
          isBlocked: true,
        });
        setapiCalled(false);
      })
      .catch((err) => {
        setapiCalled(false);
      });
  };

  const handleUnblock = () => {
    setapiCalled(true);
    unblockUser(params.id)
      .then((res) => {
        setuser({
          ...user,
          isBlocked: false,
        });
        setapiCalled(false);
      })
      .catch((err) => {
        setapiCalled(false);
      });
  };

  const handleGetUser = () => {
    setloading(true);
    getUser(params.id)
      .then((res) => {
        setuser(res);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div>
      {loading ? (
        <p></p>
      ) : user ? (
        <>
          <div className="flex justify-end mb-5">
            {user.isBlocked ? (
              <button
                className="bg-green text-white px-5 py-2 rounded-lg"
                disabled={apiCalled}
                onClick={handleUnblock}
              >
                Unblock User
              </button>
            ) : (
              <button
                className="bg-red text-white px-5 py-2 rounded-lg"
                disabled={apiCalled}
                onClick={handleBlock}
              >
                Block User
              </button>
            )}
          </div>
          <div className="flex gap-[4%]">
            <div className="bg-[rgba(255,255,255,0.5)] shadow-lg p-8 rounded-xl flex flex-col gap-6 justify-center items-center w-[32%]">
              <img
                src={user.profileImage}
                className="w-[100px] h-[100px] rounded-full"
              />
              <p className="text-xl font-bold">{user.username}</p>
              <p className="">{user.email}</p>
              <p className="text-md text-gray-500">({user.userType})</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.5)] shadow-lg p-8 rounded-xl flex flex-col gap-6 justify-center items-center w-[32%]">
              {/* <p className="text-xl font-bold">Business Details</p> */}
              {user.userType == "startup" ? (
                <>
                  <div className="flex flex-col items-center gap-2 shadow-md p-3 rounded-lg w-[250px]">
                    <p className="font-bold text-lg">Business Title</p>
                    <p>{user.businessDetails.title}</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 shadow-md p-3 rounded-lg w-[250px]">
                    <p className="font-bold text-lg">Business Category</p>
                    <p>{user.businessDetails.category}</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 shadow-md p-3 rounded-lg w-[250px]">
                    <p className="font-bold text-lg">Business Description</p>
                    <p>{user.businessDetails.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center gap-2 shadow-md p-3 rounded-lg w-[250px]">
                    <p className="font-bold text-lg">Business Description</p>
                    <p>{user.businessDetails.description}</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 shadow-md p-3 rounded-lg w-[250px]">
                    <p className="font-bold text-lg">Target Audience</p>
                    <div className="flex flex-wrap gap-5">
                      {user.businessDetails.targetAudience.map((audience) => (
                        <p className="bg-gray-500 text-white p-2 rounded-lg text-sm">
                          {audience}
                        </p>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="bg-[rgba(255,255,255,0.5)] shadow-lg p-8 rounded-xl flex flex-col gap-6 justify-center items-center w-[32%]">
              {/* <p className="text-xl font-bold">Business Details</p> */}
              <>
                <div className="flex flex-col items-center gap-2 shadow-md p-3 rounded-lg w-[250px]">
                  <p className="font-bold text-lg">Platforms</p>
                  <div className="flex items-center gap-5">
                    {user.facebookPage ||
                    user.instagramPage ||
                    user.youtubeChannel ? (
                      <>
                        {user.facebookPage && <img src={FacebookIcon} />}
                        {user.instagramPage && <img src={InstagramIcon} />}
                        {user.youtubeChannel && <img src={YoutubeIcon} />}
                      </>
                    ) : (
                      <p className="text-sm text-gray-500">No Platforms</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 shadow-md p-3 rounded-lg w-[250px]">
                  {user.userType == "startup" ? (
                    <>
                      <p className="font-bold text-lg">Total Workplaces</p>
                      <p>{user.workplaces.length}</p>
                    </>
                  ) : (
                    <>
                      <p className="font-bold text-lg">Total Jobs</p>
                      <p>{user.jobs.length}</p>
                    </>
                  )}
                </div>
                <div className="flex flex-col items-center gap-2 shadow-md p-3 rounded-lg w-[250px]">
                  <p className="font-bold text-lg">Total Earnings</p>
                  <p>$0</p>
                </div>
              </>
            </div>
          </div>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default User;
