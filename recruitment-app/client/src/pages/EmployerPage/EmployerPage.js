import React from "react";
import EmployerHeader from "./EmployerHeader";
import Footer from "../../component/Footer";
import EmployerStatistics from "./EmployerStatistics";
import JobProvider from "../../contexts/JobProvider";

const EmployerPage = () => {
  return (
    <div className="flex flex-col items-center justify-center box-border w-full bg-gray-100">
      <EmployerHeader />
      <EmployerStatistics />

      <Footer />
    </div>
  );
};

export default EmployerPage;
