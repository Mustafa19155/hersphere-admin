import React from "react";

const Workplaces = ({ workplaces }) => {
  return (
    <>
      <p className="font-bold text-xl">Workplaces</p>
      {workplaces.map((place) => (
        <div>
          <p>{place.name}</p>
          <p>{place.description}</p>
          <p>{place.totalMembers}</p>
          <p>
            {place.categories.map((cat) => (
              <p>{cat.name}</p>
            ))}
          </p>
          <p>
            {place.jobs.map((job) => (
              <div>
                <p>{job.title}</p>
                <p>{job.description}</p>
                <p>{job.price}</p>
                <p>{job.employee.userID}</p>
                <p>{job.review?.rating}</p>
                <p>{job.review?.description}</p>
              </div>
            ))}
          </p>
        </div>
      ))}
      ;
    </>
  );
};

export default Workplaces;
