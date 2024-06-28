import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../../utils/funcHelpers";
import applicantService from "../../../services/applicantService";

const OverviewTab = () => {
  const [userApplyData, setUserApplyData] = useState([]);

  const navigate = useNavigate();
  const userInfo = getUserInfo();

  const getUserApply = async () => {
    try {
      const reponse = await applicantService.getAppliedJobs(userInfo?.id);
      console.log("dataApply...", reponse);
      setUserApplyData(reponse);
    } catch (e) {
      console.log("có lỗi");
    }
  };

  useEffect(() => {
    getUserApply();
  }, []);

  const goToJobApplied = () => {
    // Perform your submit logic here
    // After successful submission, navigate to another page
    navigate("/job-applied/apply");
  };

  const goToSaved = () => {
    // Perform your submit logic here
    // After successful submission, navigate to another page
    navigate("/job-applied/save");
  };

  const goToJobViewed = () => {
    // Perform your submit logic here
    // After successful submission, navigate to another page
    navigate("/job-applied/view");
  };

  return (
    <div className="w-[full] h-56 bg-white rounded-[9px]  flex flex-col text-2xl">
      <div className="m-5 ml-10 flex flex-col gap-3">
        <div
          onClick={goToJobApplied}
          className="flex flex-row items-center gap-8"
        >
          <div className="text-green-500 font-bold">{userApplyData.length}</div>
          <div className="text-blue-500">|</div>
          <div className="font-semibold flex flex-row justify-evenly items-center gap-56">
            Việc đã ứng tuyển
            <GrNext />
          </div>
        </div>

        <hr className="w-[550px]" />

        <div
          onClick={goToJobViewed}
          className="flex flex-row items-center gap-8 "
        >
          <div className="text-black font-bold">0 </div>
          <div className="text-blue-500">|</div>
          <div className="font-semibold flex flex-row justify-evenly items-center gap-56">
            Lượt xem việc làm
            <GrNext />
          </div>
        </div>

        <hr className="w-[550px]" />

        <div onClick={goToSaved} className="flex flex-row items-center gap-8 ">
          <div className="text-orange-500 font-bold">0 </div>
          <div className="text-blue-500">|</div>
          <div className="font-semibold flex flex-row justify-evenly items-center gap-56">
            Lượt tìm việc làm
            <GrNext className="ml-3" />
          </div>
        </div>

        <hr className="w-[550px]" />
      </div>
    </div>
  );
};

export default OverviewTab;
