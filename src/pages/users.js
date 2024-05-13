import React, { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [users, setusers] = useState([]);

  const handleGetUsers = () => {
    setloading(true);
    getUsers()
      .then((res) => {
        setusers(res);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <p className="text-3xl font-bold">Users</p>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" class="px-6 py-3" />
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              {/* <th scope="col" class="px-6 py-3">
                Platforms
              </th> */}
              <th scope="col" class="px-6 py-3">
                Verified
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className={`bg-${index % 2 == 0 ? "white" : "transparent"}`}
              >
                <td>
                  <img
                    src={user.profileImage}
                    alt=""
                    class="w-8 h-8 object-cover rounded-full"
                  />
                </td>
                <td class="px-6 py-4">{user.username}</td>
                <td class="px-6 py-4">{user.email}</td>
                {/* <td class="px-6 py-4 flex items-center gap-5">
                  {user.facebookPage && (
                    <img src={FacebookIcon} alt="" class="w-5 h-5" />
                  )}
                  {user.instagramPage && (
                    <img src={InstagramIcon} alt="" class="w-5 h-5" />
                  )}
                  {user.youtubeChannel && (
                    <img src={YoutubeIcon} alt="" class="w-5 h-5" />
                  )}
                </td> */}
                <td class="px-6 py-4">
                  {user.isVerified ? (
                    <span class="text-green">Verified</span>
                  ) : (
                    <span class="text-red">Not Verified</span>
                  )}
                </td>
                <td class="px-6 py-4">
                  <button
                    className="bg-green text-white py-2 px-5 rounded-lg whitespace-nowrap"
                    onClick={() => {
                      navigate(`/users/${user._id}`);
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

export default Users;
