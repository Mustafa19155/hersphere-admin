import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import YoutubeIcon from "../../assets/icons/youtube.svg";
import { useNavigate } from "react-router-dom";

function HighestSuccessTable({ data }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg p-5 flex flex-col mt-10 gap-5">
      <p className="text-xl font-bold">Users with highest success score</p>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" class="px-6 py-3" />
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              <th scope="col" class="px-6 py-3">
                Success Score
              </th>
              <th scope="col" class="px-6 py-3">
                Platforms
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr
                key={user.influencer._id}
                className={`bg-${index % 2 == 0 ? "white" : "transparent"}`}
              >
                <td>
                  <img
                    src={user.influencer.profileImage}
                    alt=""
                    class="w-8 h-8 object-cover rounded-full"
                  />
                </td>
                <td class="px-6 py-4">{user.influencer.username}</td>
                <td class="px-6 py-4">
                  {(user.successScore * 100).toFixed(2)}%
                </td>
                <td class="px-6 py-4 flex items-center gap-5">
                  {user.influencer.facebookPage && (
                    <img src={FacebookIcon} alt="" class="w-5 h-5" />
                  )}
                  {user.influencer.instagramPage && (
                    <img src={InstagramIcon} alt="" class="w-5 h-5" />
                  )}
                  {user.influencer.youtubeChannel && (
                    <img src={YoutubeIcon} alt="" class="w-5 h-5" />
                  )}
                </td>
                <td class="px-6 py-4">
                  <button
                    className="bg-green text-white p-2 rounded-lg whitespace-nowrap"
                    onClick={() => {
                      navigate(`/users/${user.influencer._id}`);
                    }}
                  >
                    View Profile
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

export default HighestSuccessTable;
