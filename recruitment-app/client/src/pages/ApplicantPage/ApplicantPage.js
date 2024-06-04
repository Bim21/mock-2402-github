import React from "react";
import Footer from "../../component/Footer";
import ApplicantHeader from "./ApplicantHeader";
import ApplicantContent from "./ApplicantContent";
import Header from "../../component/Header";
import ApplicantContent2 from "./section/ApplicantContent2";
import Bottom from "./Bottom";

const ApplicantPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center box-border w-full bg-gray-100">
        <Header />
      </div>

      <div className="mt-2 ml-2">
        <ApplicantContent />
        {/* <ApplicantContent2 /> */}
        <Bottom/>
        <Footer />
      </div>
    </div>
  );
};

export default ApplicantPage;
