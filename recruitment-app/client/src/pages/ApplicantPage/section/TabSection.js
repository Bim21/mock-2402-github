import React from "react";
import { Tabs } from "antd";
import ContentTab1 from "./ContentTab1";
import { Content } from "antd/es/layout/layout";
import ApplicantAttach from "./../ApplicantAttach";

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
    children: "hồ sơ",
  },
];
const TabSection = () => <Tabs items={items} />;
export default TabSection;
