import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import React, { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

const ApplicantAttach = () => {
  const [fileName, setFileName] = useState(null);

  const handleUploadCV = async (file) => {
    try {
      const formData = new FormData(); // Create a FormData object
      formData.append('file', file); // Append the file to the FormData object

      // Send a POST request to the backend endpoint
      const response = await axios.post('/api/files/upload', formData);

      // Get the file name from the response and store it in the component state
      const uploadedFileName = response.data.fileName;
      setFileName(uploadedFileName);
      localStorage.setItem('uploadedFileName', uploadedFileName);
      
      // Handle the response as needed
      console.log('File uploaded successfully. File name:', uploadedFileName);
      toast.success("upload file thành công!")
    } catch (error) {
      console.error('Failed to upload file:', error);
      toast.error("upload file thất bại")
    }
  };

  const uploadProps = {
    beforeUpload: (file) => {
      handleUploadCV(file);
      return false; // Prevent the default upload behavior
    },
  };

  return (
    <div>
      <Upload {...uploadProps}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      {fileName && (
        <div>
          <h2>Uploaded File Name:</h2>
          <p>{fileName}</p>
        </div>
      )}
    </div>
  );
};

export default ApplicantAttach;