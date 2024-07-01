import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import applicantService from "../../../services/applicantService";
import { getUserInfo } from "../../../utils/funcHelpers";
import { Link, useNavigate } from "react-router-dom";
import { CloseCircleOutlined, SendOutlined } from "@ant-design/icons";
import ConfirmDeleteModal from "./ConfirmDeleteModal ";

const UserTable = () => {
  const [userApplyData, setUserApplyData] = useState([]);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [itemId, setItemId] = useState(null);

  const userInfo = getUserInfo();
  const navigate = useNavigate();

  const handleOpenDeleteModal = (id) => {
    setItemId(id);
    setIsModalDeleteOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsModalDeleteOpen(false);
  };

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

  const handleAccept = () => {
    try {
      navigate("/notification");
    } catch (error) {
      console.log(error);
    }
  };

  const handlReject = async () => {
    // try {
    //   await applicantService.delete(itemId);
    //   getUserApply();
    //   toast.success("Đã từ chối");
    //   setIsModalDeleteOpen(false);
    // } catch (error) {
    //   console.error("đã có lỗi", error);
    // }
    // }
  };

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
          <Button type="primary" icon={<SendOutlined />} onClick={handleAccept}>
            Chấp nhận
          </Button>
          <Button
            type="primary"
            danger
            icon={<CloseCircleOutlined />}
            onClick={() => handleOpenDeleteModal()}
          >
            Từ chối
          </Button>
          <ConfirmDeleteModal
            isOpen={isModalDeleteOpen}
            onClose={handleCloseDeleteModal}
            onConfirm={handlReject}
            title={"Xác nhận từ chối"}
            deps={"Bạn có chắc chắn từ chối ứng viên này?"}
            button={"Từ chối"}
          />
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
      scroll={{ x: 1000 }}
    />
  );
};
export default UserTable;
