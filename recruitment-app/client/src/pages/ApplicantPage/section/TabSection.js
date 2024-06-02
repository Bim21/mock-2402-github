import React from 'react';
import { Tabs } from 'antd';
import ContentTab1 from './ContentTab1';
import { Content } from 'antd/es/layout/layout';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Hồ sơ Vietnamworks',
    Content: <ContentTab1/>,
  },
  {
    key: '2',
    label: 'Hồ sơ đính kèm',
    // Content: <ContentTab2/>,
  },
  {
    key: '3',
    label: ' Thiết lập hồ sơ',
    // children: 'Content of Tab Pane 3',
  },
];
const TabSection = () => <Tabs items={items}  />;
export default TabSection;