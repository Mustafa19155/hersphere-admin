import React, { useContext, useEffect, useState } from "react";
import { getJobs } from "../api/main";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { CategoryContext } from "../contexts/categoryContext";

const Jobs = () => {
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);
  const [jobs, setjobs] = useState([]);

  const { categories } = useContext(CategoryContext);

  const handleGetJobs = () => {
    getJobs()
      .then((res) => {
        setjobs(res);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    handleGetJobs();
  }, []);

  return (
    <div>
      <p className="text-3xl font-bold">Jobs</p>
      <div className="mt-10 flex flex-wrap gap-[3%]">
        {jobs.map((job, index) => (
          <div
            className="flex flex-col gap-3 w-[97%] md:w-[30%] mb-10 bg-white p-5 rounded-xl shadow-lg cursor-pointer"
            onClick={() => {
              navigate(`/jobs/${job._id}`);
            }}
          >
            <div className="flex items-center gap-3 border-b pb-5">
              <img
                src={job.workplaceID?.image}
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="font-bold">{job.title}</p>
                <p className="font-medium">
                  {
                    categories.find(
                      (category) => category._id == job.workplaceCategoryID
                    )?.name
                  }
                </p>
              </div>
            </div>
            <div className="h-[50px]">
              <p className="truncate line-clamp-2">{job.description}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold">
                Posted{moment(job.createdAt).fromNow()}
              </p>
              <p
                className={`text-sm font-semibold ${
                  job.workplaceID?.status == "active"
                    ? job.employee
                      ? "text-green"
                      : "text-gray-500"
                    : "text-red"
                }`}
              >
                {job.workplaceID?.status == "active"
                  ? job.employee
                    ? "Active"
                    : "Open"
                  : "Closed"}
              </p>
            </div>
            {/* <div className="flex gap-2 flex-wrap">
              {job.skillset.map((skill) => (
                <p className="bg-gray2 w-fit px-3 py-1 rounded-lg mb-2 text-white">
                  {skill}
                </p>
              ))}
            </div> */}
            {/* <button
              className="bg-green w-fit px-3 py-1 rounded-lg text-white"
              onClick={() => navigate(`/jobs/${job._id}`)}
            >
              View Details
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
