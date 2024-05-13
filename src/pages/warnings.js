import React, { useEffect, useRef, useState } from "react";
import { deleteReport, getReports } from "../api/report";
import useClickOutside from "../hooks/useClickOutside";
import GreenButton from "../components/Buttons/GreenButton";
import { useNavigate } from "react-router-dom";

function Warnings() {
  const [reports, setreports] = useState([]);
  const [activeReport, setactiveReport] = useState(null);
  const [showReportDetails, setshowReportDetails] = useState(false);

  const handleGetReports = () => {
    getReports()
      .then((data) => {
        setreports(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteReport = (id) => {
    deleteReport(id)
      .then(() => {
        handleGetReports();
      })
      .catch((err) => {});
  };

  useEffect(() => {
    handleGetReports();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {showReportDetails && (
        <div class="fixed inset-0 bg-[rgba(0,0,0,0.4)] bg-opacity-50 flex items-center justify-center z-50">
          <DetailsModal
            report={activeReport}
            setshowReportDetails={setshowReportDetails}
          />
        </div>
      )}
      <p className="text-3xl font-bold">Warnings</p>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" class="px-6 py-3">
                Reported By
              </th>
              <th scope="col" class="px-6 py-3">
                User Reported
              </th>
              <th scope="col" class="px-6 py-3">
                Reason
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr
                key={report._id}
                className={`bg-${index % 2 == 0 ? "white" : "transparent"}`}
              >
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <img
                      src={report.userID.profileImage}
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {report.userID.username}
                      </div>
                      <div class="text-sm text-gray-500">
                        {report.userID.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <img
                      src={report.reportedUserID.profileImage}
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {report.reportedUserID.username}
                      </div>
                      <div class="text-sm text-gray-500">
                        {report.reportedUserID.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">{report.reason}</td>
                <td class="px-6 py-4">
                  <button
                    class="ml-3 bg-red text-white py-2 px-10 rounded-lg"
                    onClick={() => {
                      handleDeleteReport(report._id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    class="ml-3 bg-yellow-400 text-white py-2 px-5 rounded-lg"
                    onClick={() => {
                      setactiveReport(report);
                      setshowReportDetails(true);
                    }}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const DetailsModal = ({ report, setshowReportDetails }) => {
  const navigate = useNavigate();
  const ref = useRef();

  useClickOutside(ref, () => {
    setshowReportDetails(false);
  });

  return (
    <div class="bg-white p-5 rounded-lg w-[400px] max-w-[90vw]" ref={ref}>
      <p class="text-lg font-bold">Report Details</p>
      <div class="flex gap-5 mt-5 items-end justify-between">
        <div className="flex flex-col gap-2">
          <p class="text-sm text-gray-500">Reported By</p>
          <div class="flex items-center">
            <img
              src={report.userID.profileImage}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div class="ml-4">
              <p class="text-sm font-medium">{report.userID.username}</p>
              <p class="text-sm text-gray-500">{report.userID.email}</p>
            </div>
          </div>
        </div>
        <GreenButton
          text={"View Profile"}
          clickHandler={() => {
            navigate(`/users/${report.userID._id}`);
          }}
          className={"!w-[100px] h-[40px]"}
        />
      </div>
      <div class="flex gap-5 mt-5 items-end justify-between">
        <div className="flex flex-col gap-2">
          <p class="text-sm text-gray-500">User Reported</p>
          <div class="flex items-center">
            <img
              src={report.reportedUserID.profileImage}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div class="ml-4">
              <p class="text-sm font-medium">
                {report.reportedUserID.username}
              </p>
              <p class="text-sm text-gray-500">{report.reportedUserID.email}</p>
            </div>
          </div>
        </div>
        <GreenButton
          text={"View Profile"}
          clickHandler={() => {
            navigate(`/users/${report.reportedUserID._id}`);
          }}
          className={"!w-[100px] h-[40px]"}
        />
      </div>
      <div class="mt-5">
        <p class="text-sm text-gray-500">Reason</p>
        <p class="text-sm">{report.reason}</p>
      </div>
      <div class="mt-5">
        <p class="text-sm text-gray-500">Date</p>
        <p class="text-sm">{new Date(report.createdAt).toDateString()}</p>
      </div>
      <div class="mt-5">
        <p class="text-sm text-gray-500">Description</p>
        <p class="text-sm">
          {report.description ? report.description : "No Description"}
        </p>
      </div>
    </div>
  );
};

export default Warnings;
