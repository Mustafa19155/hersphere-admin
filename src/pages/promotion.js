import React, { useEffect, useState } from "react";
import { getPromotion } from "../api/main";
import { useNavigate, useParams } from "react-router-dom";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import moment from "moment";
import StarIcon from "../assets/icons/star.svg";

const Promotion = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);
  const [promotion, setpromotion] = useState(null);

  const handleGetPromotion = () => {
    setloading(true);
    getPromotion(params.id)
      .then((res) => {
        console.log(res);
        setpromotion(res);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  };

  useEffect(() => {
    handleGetPromotion();
  }, []);

  return (
    <div>
      {promotion && (
        <div className="flex gap-[2%]">
          <div className="w-[65%] gap-5 flex flex-col">
            <div className="p-3 border rounded-lg flex flex-col gap-3 shadow-md">
              <div>
                <p className="font-bold text-lg">Description</p>
                <p>{promotion.description}</p>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Platforms</p>
                  <div className="flex gap-2">
                    {promotion.platforms?.map((platform, index) => (
                      <img
                        src={
                          platform == "facebook"
                            ? FacebookIcon
                            : platform == "instagram"
                            ? InstagramIcon
                            : YoutubeIcon
                        }
                        className="w-[30px] h-[30px]"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Duration</p>
                  <div className="flex gap-2">
                    {promotion.requirements.days} days
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold">Requirements</p>
                <div className="flex items-center gap-5">
                  <p className="text-gray-500 font-medium">
                    {promotion.requirements.likes} Likes
                  </p>
                  <p className="text-gray-500 font-medium">
                    {promotion.requirements.comments} Comments
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Status</p>
                  <p
                    className={`font-medium text-${
                      promotion.status == "started"
                        ? "black"
                        : promotion.status == "rejected"
                        ? "red"
                        : promotion.status == "completed"
                        ? "green"
                        : "gray-500"
                    }`}
                  >
                    {promotion.status}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  {promotion.status == "started" && (
                    <>
                      <p className="font-bold">Started On</p>
                      <p>
                        {moment(promotion.updatedAt).format("DD MMM, YYYY")}
                      </p>
                    </>
                  )}
                  {promotion.status == "completed" && (
                    <>
                      <p className="font-bold">Completed On</p>
                      <p>
                        {moment(promotion.updatedAt).format("DD MMM, YYYY")}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="p-3 border rounded-lg flex flex-col gap-3 shadow-md">
              <p className="text-lg font-bold">Content</p>
              {promotion.allowInfluencerToAddData ? (
                <p className="text-center text-gray-500 font-medium">
                  No content to show
                </p>
              ) : (
                <div>
                  <div className="flex flex-col gap-2">
                    <p className="text-md font-bold">
                      {promotion.platforms.includes("facebook") &&
                      promotion.platforms.includes("instagram")
                        ? "Facebook & Instagram"
                        : promotion.platforms.includes("facebook")
                        ? "Facebook"
                        : "Instagram"}
                    </p>
                    <div className="flex items-center gap-5">
                      <img
                        src={promotion.content.facebook.content}
                        className="w-[100px] h-[100px]"
                      />
                      <p>{promotion.content.facebook.caption}</p>
                    </div>
                  </div>
                  {promotion.content.youtube && (
                    <div>
                      <p className="text-lg font-bold">Youtube</p>
                      <div className="flex items-center gap-5">
                        <video
                          src={promotion.content.youtube.content}
                          className="w-[100px] h-[100px]"
                        />
                        <p>{promotion.content.youtube.caption}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="p-3 border rounded-lg w-[33%] flex flex-col gap-10 shadow-md">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">About Startup</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={promotion.userID?.profileImage}
                    className="h-[60px] w-[60px] rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold">
                      {promotion.userID?.username}
                    </p>
                    <p className="text-sm font-bold text-gray-500">
                      {promotion.userID?.email}
                    </p>
                  </div>
                </div>
                <button
                  className="bg-green text-white px-3 py-2 rounded-lg w-fit"
                  onClick={() => {
                    navigate(`/users/${promotion.userID._id}`);
                  }}
                >
                  Visit Profile
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">About Influencer</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={promotion.influencerID?.profileImage}
                    className="h-[60px] w-[60px] rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold">
                      {promotion.influencerID?.username}
                    </p>
                    <p className="text-sm font-bold text-gray-500">
                      {promotion.influencerID?.email}
                    </p>
                  </div>
                </div>
                <button
                  className="bg-green text-white px-3 py-2 rounded-lg w-fit"
                  onClick={() => {
                    navigate(`/users/${promotion.influencerID?._id}`);
                  }}
                >
                  Visit Profile
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Review</p>
              {promotion.reviewID ? (
                ""
              ) : (
                <p className="text-gray-500">No review given</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Promotion;
