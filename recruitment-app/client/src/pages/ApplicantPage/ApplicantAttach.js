import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import React from "react";

const ApplicantAttach = () => {
  return (
    <div>
      <Upload>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  );
};

export default ApplicantAttach;
