import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import applicantService from "../../../services/applicantService";
import { getUserInfo } from "../../../utils/funcHelpers";
import { Link } from "react-router-dom";
import { CloseCircleOutlined, SendOutlined } from "@ant-design/icons";

const UserTable = () => {
  const [userApplyData, setUserApplyData] = useState([]);
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

  const columns = [
    {
      title: "Họ Tên",
      dataIndex: "employer",
      render: (value) => (
        <Link to="/users">{value.firstName + " " + value.lastName}</Link>
      ),
    },
    {
      title: "Địa chỉ",
      dataIndex: "jobAddress",
      render: (value) => value.join(", "),
    },
    {
      title: "Chức vụ",
      dataIndex: "title",
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Cấp bậc",
      dataIndex: "level",
    },
    {
      title: "Thao tác",
      dataIndex: "actions",
      render: (value, record, index) => (
        <Space size="small">
          <Button type="primary" icon={<SendOutlined />}>
            Gửi mail
          </Button>
          <Button type="primary" danger icon={<CloseCircleOutlined />}>
            Từ chối
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={userApplyData}
      pagination={{
        pageSize: 4,
      }}
      scroll={{ x: 800, y: 800 }}
    />
  );
};
export default UserTable;
