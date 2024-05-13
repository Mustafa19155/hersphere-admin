import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import JobIcon from "../assets/icons/job.svg";
import PeopleIcon from "../assets/icons/people.svg";
import StartupIcon from "../assets/icons/startup.svg";
import WorkplaceIcon from "../assets/icons/workplace.svg";
import RevenueIcon from "../assets/icons/revenue.svg";
import PromotionPlatformsChart from "../components/dashboard/PromotionPlatformsChart";
import UsersJoinedChart from "../components/dashboard/UsersJoinedChart";
import HighestSuccessTable from "../components/dashboard/HighestSuccessTable";
import { getUsersWithHighestSuccessScore } from "../api/users";
import { getDashboardData } from "../api/main";
import moment from "moment";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [users, setusers] = useState([]);
  const [data, setdata] = useState(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleGetAll = async () => {
    try {
      setloading(true);
      const data = await getUsersWithHighestSuccessScore();
      setdata(await getDashboardData());
      setusers(data);
      setloading(false);
    } catch (err) {}
  };

  useEffect(() => {
    handleGetAll();

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for screen size changes
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {loading || !data ? (
        <div role="status" className="w-full h-full mt-8 flex justify-center">
          <svg
            aria-hidden="true"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#A968FF"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <div>
            <div className="flex justify-between flex-wrap">
              <div className="bg-white shadow-lg w-[96%] md:w-[48%] lg:w-[24%] p-3 rounded-md flex flex-col gap-4 mb-4">
                <img src={JobIcon} className="w-[45px] h-[45px]" />
                <p className="font-bold text-2xl">{data.influencersCount}</p>
                <p className="text-md text-gray-500">Total Influencers</p>
              </div>
              <div className="bg-white shadow-lg w-[96%] md:w-[48%] lg:w-[24%] p-3 rounded-md flex flex-col gap-4 mb-4">
                <img src={StartupIcon} className="w-[45px] h-[45px]" />
                <p className="font-bold text-2xl">{data.startupsCount}</p>
                <p className="text-md text-gray-500">Total Startups</p>
              </div>
              <div className="bg-white shadow-lg w-[96%] md:w-[48%] lg:w-[24%] p-3 rounded-md flex flex-col gap-4 mb-4">
                <img src={WorkplaceIcon} className="w-[45px] h-[45px]" />
                <p className="font-bold text-2xl">{data.workplacesCount}</p>
                <p className="text-md text-gray-500">Total Workplaces</p>
              </div>
              <div className="bg-white shadow-lg w-[96%] md:w-[48%] lg:w-[24%] p-3 rounded-md flex flex-col gap-4 mb-4">
                <img src={RevenueIcon} className="w-[45px] h-[45px]" />
                <p className="font-bold text-2xl">${data.revenue}</p>
                <p className="text-md text-gray-500">Total Revenue</p>
              </div>
            </div>
            <div className="mt-8 flex items-stretch gap-10">
              <div className="bg-white shadow-lg p-5 w-[60%] flex flex-col justify-between items-center rounded-xl">
                <p className="text-lg font-bold font-open">
                  Users joined last 7 days
                </p>
                <UsersJoinedChart
                  data={data.last7DaysUsers.map((data) => {
                    return {
                      ...data,
                      date: moment(data.date).format("DD MMM"),
                    };
                  })}
                />
              </div>
              <div className="bg-white shadow-lg p-5 w-[60%] flex flex-col justify-between items-center rounded-xl">
                <p className="text-lg font-bold font-open">
                  Most Used Promotion Platforms
                </p>
                <PromotionPlatformsChart data={data.posts} />
              </div>
            </div>
            <div>
              <HighestSuccessTable data={users} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
