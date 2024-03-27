import React, { useEffect, useState } from "react";
import { getPromotions } from "../api/main";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

const Promotions = () => {
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);
  const [promotions, setpromotions] = useState([]);

  const handleGetPromotions = () => {
    setloading(true);
    getPromotions()
      .then((res) => {
        console.log(res);
        setpromotions(res);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetPromotions();
  }, []);

  return (
    <div>
      <p className="text-3xl font-bold">Promotions</p>
      <div className="mt-10 flex flex-wrap gap-[3%]">
        {promotions.map((job, index) => (
          <div
            className="flex flex-col gap-3 w-[97%] md:w-[30%] mb-10 bg-white p-5 rounded-xl shadow-lg cursor-pointer"
            onClick={() => {
              navigate(`/promotions/${job._id}`);
            }}
          >
            <div className="flex items-center gap-3 border-b pb-5">
              <img
                src={job.userID?.profileImage}
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="font-bold">{job.userID?.username}</p>
                <p className="font-medium">{job.category}</p>
              </div>
            </div>
            <div className="h-[50px]">
              <p className="truncate line-clamp-2">{job.description}</p>
            </div>
            <div className="flex justify-between">
              <p
                className={`font-medium text-${
                  job.status == "started"
                    ? "black"
                    : job.status == "rejected"
                    ? "red"
                    : job.status == "completed"
                    ? "green"
                    : "gray-500"
                }`}
              >
                {job.status}
              </p>
              <div className="flex items-center gap-2">
                {job.platforms.includes("facebook") && (
                  <img src={FacebookIcon} className="w-[20px] h-[20px]" />
                )}
                {job.platforms.includes("instagram") && (
                  <img src={InstagramIcon} className="w-[20px] h-[20px]" />
                )}
                {job.platforms.includes("youtube") && (
                  <img src={YoutubeIcon} className="w-[20px] h-[20px]" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;