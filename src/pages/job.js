import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteJob, getJob } from "../api/main";
import moment from "moment";
import PeopleIcon from "../assets/icons/people.svg";

const Job = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);
  const [job, setjob] = useState(null);
  const [apiCalled, setapiCalled] = useState(false);

  const handleGetJob = () => {
    getJob(params.id)
      .then((res) => {
        console.log(res);
        setjob(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteJob = () => {
    setapiCalled(true);
    deleteJob(params.id)
      .then((res) => {
        setapiCalled(false);
        navigate("/jobs");
      })
      .catch((err) => {
        setapiCalled(false);
      });
  };

  useEffect(() => {
    handleGetJob();
  }, []);

  return (
    <div>
      {job && (
        <>
          {!job.employee && (
            <div className="flex justify-end mb-5">
              <button
                className="bg-red text-white px-3 py-2 rounded-lg w-fit"
                onClick={handleDeleteJob}
                disabled={apiCalled}
              >
                {apiCalled ? "Deleting..." : "Delete Job"}
              </button>
            </div>
          )}
          <div className="flex gap-[2%]">
            <div className="w-[65%] gap-5 flex flex-col">
              <div className="p-3 border rounded-lg flex flex-col gap-3 shadow-md bg-[rgba(255,255,255,0.5)]">
                <img
                  src={job.workplaceID?.image}
                  className="h-[60px] w-[60px] rounded-full"
                />
                <p className="text-2xl font-bold">{job.title}</p>
                <p className="text-gray-500">{job.workplaceID?.description}</p>
                <div className="flex items-center gap-4">
                  <p className="font-bold">{job.workplaceID?.name}</p>
                  <div className="flex items-center gap-1 text-sm">
                    <img src={PeopleIcon} /> {job.workplaceID?.totalMembers}
                  </div>
                  <p className="text-sm font-medium text-gray-500">
                    {moment(job.workplaceID?.createdAt).format("DD MMM, YYYYY")}{" "}
                    - {moment(job.workplaceID?.endDate).format("DD MMM, YYYY")}
                  </p>
                </div>
              </div>
              <div className="p-3 border rounded-lg flex flex-col gap-3 shadow-md bg-[rgba(255,255,255,0.5)]">
                <p className="font-bold text-2xl">About Job</p>
                <p>{job.description}</p>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Required Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skillset?.map((skill, index) => (
                      <p className="bg-gray-500 text-white px-4 py-1 rounded-lg">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 border rounded-lg w-[33%] flex flex-col gap-10 shadow-md bg-[rgba(255,255,255,0.5)]">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold">About Client</p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={job.userID?.profileImage}
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-bold">
                        {job.userID?.username}
                      </p>
                      <p className="text-sm font-bold text-gray-500">
                        {job.userID?.email}
                      </p>
                    </div>
                  </div>
                  <button
                    className="bg-green text-white px-3 py-2 rounded-lg w-fit"
                    onClick={() => {
                      navigate(`/users/${job.userID._id}`);
                    }}
                  >
                    Visit Profile
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold">About Employee</p>
                {job.employee ? (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={job.employee.userID?.profileImage}
                        className="w-[50px] h-[50px] rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-bold">
                          {job.employee.userID?.username}
                        </p>
                        <p className="text-sm font-bold text-gray-500">
                          {job.employee.userID?.email}
                        </p>
                      </div>
                    </div>
                    <button
                      className="bg-green text-white px-3 py-2 rounded-lg w-fit"
                      onClick={() => {
                        navigate(`/users/${job.employee.userID._id}`);
                      }}
                    >
                      Visit Profile
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-500 font-bold">Job is stil open</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold">Review</p>
                {job.reviewID ? (
                  ""
                ) : (
                  <p className="text-gray-500">No review given</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Job;
