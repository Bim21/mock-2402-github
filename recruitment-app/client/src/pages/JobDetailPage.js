import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import JobDetail from "../component/jobComponent/JobDetail/JobDetail";

const JobDetailPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center box-border bg-slate-50">
        <Header />
        <JobDetail />
        <Footer />
      </div>
    </div>
  );
};

export default JobDetailPage;
