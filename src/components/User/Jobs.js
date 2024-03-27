import React from "react";

const Jobs = ({ jobs }) => {
  return (
    <div>
      <p className="font-bold text-xl">Jobs</p>
      {jobs.map((job) => (
        <div>
          <p>{job.title}</p>
          <p>{job.description}</p>
          <p>{job.price}</p>
          <p>{job.employee.userID}</p>
          <p>{job.review?.rating}</p>
          <p>{job.review?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
