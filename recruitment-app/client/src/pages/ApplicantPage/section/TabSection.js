import React from "react";
import { Tabs } from "antd";
import ContentTab1 from "./ContentTab1";
import { Content } from "antd/es/layout/layout";
import ApplicantAttach from "./../ApplicantAttach";
import OverviewTab from "./OverviewTab";
import Profile from "./Profile";

const items = [
  {
    key: "1",
    label: "Hồ sơ Vietnamworks",
    children: <ContentTab1 />,
  },
  {
    key: "2",
    label: "Hồ sơ đính kèm",
    children: <ApplicantAttach />,
  },
  {
    key: "3",
    label: " Thiết lập hồ sơ",
    children: <Profile />,
  },
  {
    key: "4",
    label: " Tổng quan",
    children:<OverviewTab />,
  },
];
const TabSection = () => <Tabs items={items} />;
export default TabSection;
