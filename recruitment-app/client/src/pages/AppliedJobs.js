import Header from "../component/Header";
import Footer from "../component/Footer";
import { Tabs } from "antd";
import AppliedJobList from "../component/jobComponent/AppliedJobList/AppliedJobList";
import { useNavigate, useParams } from "react-router-dom";

const items = [
  {
    key: "apply",
    label: "Việc đã ứng tuyển",
    children: <AppliedJobList type={"apply"} />,
  },
  {
    key: "save",
    label: "Việc đã lưu",
    children: <AppliedJobList type={"save"} />,
  },
  {
    key: "view",
    label: "Việc làm đã xem",
    children: <AppliedJobList type={"view"} />,
  },
];

const AppliedJobsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center box-border bg-slate-50">
      <Header />
      <div className="flex flex-col items-center justify-center w-full h-auto">
        <div className="w-[90%] mx-10 p-3 bg-white mt-5 border-[1px] rounded-md flex items-center pl-4">
          <div className="text-[16px] font-semibold">Việc Làm Của Tôi</div>
        </div>
        <div className="w-[90%] mx-10 p-3 bg-white mt-2 border-[1px] rounded-md flex items-center pl-4">
          <Tabs
            defaultActiveKey={params.type}
            items={items}
            className="w-full"
            onChange={(key) => navigate(`/job-applied/${key}`)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppliedJobsPage;
