import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Họ Tên",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Địa chỉ",
    dataIndex: "address",
    key: "address",
  },

  {
    title: "Chức vụ",
    dataIndex: "title",
    key: "title",
  },

  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Cấp bậc",
    dataIndex: "level",
    key: "level",
  },

  {
    title: "Thao tác",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Gửi mail</a>
        <a>Từ chối</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    address: "New York No. 1 Lake Park",
    title: "Dev",
    email: "example1@gmail.com",
    level: "Thực tập sinh",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    title: "Test",
    email: "example1@gmail.com",
    level: "Nhân viên",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    title: "PM",
    email: "example1@gmail.com",
    level: "Giám đốc",
  },
];
const UserTable = () => <Table columns={columns} dataSource={data} />;
export default UserTable;
