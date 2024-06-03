import React, { useEffect, useState } from "react";
import JobContent from "../component/jobComponent/JobContent";
import Header from "../component/Header";
import Footer from "../component/Footer";
import jobService from "../services/jobService";
import JobProvider from "../contexts/JobProvider";

const JobPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center box-border bg-slate-50">
        <Header />
        <JobProvider>
          <JobContent />
        </JobProvider>
        <Footer />
      </div>
    </div>
  );
};

export default JobPage;
