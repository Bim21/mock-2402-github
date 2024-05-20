import React, { useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CompanyContent from "../component/companyComponent copy/CompanyContent";
import { isAuthenticated } from "../services/api";
import { Navigate } from "react-router-dom";

const CompanyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center box-border bg-slate-50">
      <Header />
      <CompanyContent />
      <Footer />
    </div>
  );
};

export default CompanyPage;
