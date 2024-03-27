import React, { useEffect, useState } from "react";
import { getUser } from "../api/users";
import { useParams } from "react-router-dom";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import capitalizeFirst from "../utils/CapitalizeFirst";
import Workplaces from "../components/User/Workplaces";
import Jobs from "../components/User/Jobs";
import Promotions from "../components/User/Promotions";

const User = () => {
  const params = useParams();
  const [loading, setloading] = useState(false);
  const [user, setuser] = useState({
    source: "google",
    isVerified: true,
    isBlocked: false,
    skills: ["xc"],
    _id: "6600947e2a67d172d8384d46",
    username: "Mustafa Hassan",
    email: "mustafahassan09999@gmail.com",
    profileCompleted: true,
    __v: 0,
    businessDetails: {
      description: "dfgg",
      targetAudience: ["Category 2"],
    },
    profileImage:
      "https://firebasestorage.googleapis.com/v0/b/hersphere-d67c8.appspot.com/o/profiles%2Frn_image_picker_lib_temp_6cce1b1e-1dd4-487f-80b5-29d3fffda067.jpg?alt=media&token=60130eff-51f2-4707-99cb-99df692bfd0e",
    userType: "influencer",
    youtubeChannel: {
      id: "UC1ybuAtDotBrCpccfEy5cKg",
      stats: {
        viewCount: "3",
        subscriberCount: "1",
        hiddenSubscriberCount: false,
        videoCount: "10",
      },
      token:
        "ya29.a0Ad52N3-Eiyab__k1GfsHcUl3zsFPuidk_K3aI1Q_Yt7_CFETZm5niprUN2e1JHUYeAs2EsNt294P_yjOU5By0IGXJbmo9hVK3tzAVM8jW6rynWelmBMG5VqtlEkPcQg67Hqje2vZPcvFuDR6PdhLB0SyghtEYrZul0OOaCgYKAQQSARMSFQHGX2Mi_rRm27447Z_PTdfkd9_6xA0171",
    },
    jobs: [],
    promotions: [
      {
        requirements: {
          likes: 25,
          comments: 25,
          days: 2,
        },
        platforms: ["youtube"],
        allowInfluencerToAddData: true,
        status: "started",
        _id: "660095fb8060ff4cb4b9507c",
        description: "xff\n",
        category: "category 1",
        influencerID: {
          source: "google",
          isVerified: true,
          isBlocked: false,
          skills: ["xc"],
          _id: "6600947e2a67d172d8384d46",
          username: "Mustafa Hassan",
          email: "mustafahassan09999@gmail.com",
          profileCompleted: true,
          __v: 0,
          businessDetails: {
            description: "dfgg",
            targetAudience: ["Category 2"],
          },
          profileImage:
            "https://firebasestorage.googleapis.com/v0/b/hersphere-d67c8.appspot.com/o/profiles%2Frn_image_picker_lib_temp_6cce1b1e-1dd4-487f-80b5-29d3fffda067.jpg?alt=media&token=60130eff-51f2-4707-99cb-99df692bfd0e",
          userType: "influencer",
          youtubeChannel: {
            id: "UC1ybuAtDotBrCpccfEy5cKg",
            stats: {
              viewCount: "3",
              subscriberCount: "1",
              hiddenSubscriberCount: false,
              videoCount: "10",
            },
            token:
              "ya29.a0Ad52N3-Eiyab__k1GfsHcUl3zsFPuidk_K3aI1Q_Yt7_CFETZm5niprUN2e1JHUYeAs2EsNt294P_yjOU5By0IGXJbmo9hVK3tzAVM8jW6rynWelmBMG5VqtlEkPcQg67Hqje2vZPcvFuDR6PdhLB0SyghtEYrZul0OOaCgYKAQQSARMSFQHGX2Mi_rRm27447Z_PTdfkd9_6xA0171",
          },
        },
        transactionID: {
          _id: "660095fb8060ff4cb4b9507b",
          userID: "65d1aee7e382c64da82d4768",
          amount: 25,
          type: "wallet",
          reason: "Promotion Payment",
          createdAt: "2024-03-24T21:07:07.798Z",
          updatedAt: "2024-03-24T21:07:07.798Z",
          __v: 0,
        },
        deadline: "2024-03-26T21:07:07.802Z",
        userID: {
          source: "",
          isVerified: false,
          isBlocked: false,
          skills: [],
          _id: "65d1aee7e382c64da82d4768",
          email: "mustafa@gmail.com",
          password:
            "$2a$08$wHQWR.74T6IxhJz3NNfLre.3XxcB8TMT1K0OaWFIZtXyRNz01/Rua",
          username: "mustafa@gmail.com",
          __v: 0,
          businessDetails: {
            description: "gaahah",
            category: "Category 2",
            title: "gaah",
          },
          profileCompleted: true,
          profileImage:
            "https://firebasestorage.googleapis.com/v0/b/hersphere-d67c8.appspot.com/o/profiles%2Frn_image_picker_lib_temp_f28491b8-843d-4df9-ac4c-4b55f49c1b22.jpg?alt=media&token=62e21287-ea48-4b36-8148-4011abe53bad",
          userType: "startup",
        },
        createdAt: "2024-03-24T21:07:07.805Z",
        updatedAt: "2024-03-24T21:07:45.716Z",
        __v: 0,
      },
    ],
  });

  const handleGetUser = () => {
    setloading(true);
    getUser(params.id)
      .then((res) => {
        console.log(res);
        setuser(res);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <p className="text-3xl font-bold">
            {user.username} ({capitalizeFirst(user.userType)})
          </p>
          <div>
            <p>{user.email}</p>
            <div>
              {user.facebookPage && <img src={FacebookIcon} />}
              {user.instagramPage && <img src={InstagramIcon} />}
              {user.youtubeChannel && <img src={YoutubeIcon} />}
            </div>
            <p>{user.isVerified ? "Verified" : "Not Verified"}</p>
            <p>{user.actions}</p>
          </div>
          <div>
            <Promotions promotions={user.promotions} />
            {user.userType == "startup" && (
              <Workplaces workplaces={user.workplaces} />
            )}
            {user.userType == "influencer" && <Jobs jobs={user.jobs} />}
          </div>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default User;
