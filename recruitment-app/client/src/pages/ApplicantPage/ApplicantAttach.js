import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { IoIosAddCircle } from "react-icons/io";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ApplicantAttach = () => {
  const [fileName, setFileName] = useState(null);

  const handleUploadCV = async (file) => {
    try {
      const formData = new FormData(); // Create a FormData object
      formData.append("file", file); // Append the file to the FormData object

      // Send a POST request to the backend endpoint
      const response = await axios.post("/api/files/upload", formData);

      // Get the file name from the response and store it in the component state
      const uploadedFileName = response.data.fileName;
      setFileName(uploadedFileName);
      localStorage.setItem("uploadedFileName", uploadedFileName);

      // Handle the response as needed
      console.log("File uploaded successfully. File name:", uploadedFileName);
      toast.success("upload file thành công!");
    } catch (error) {
      console.error("Failed to upload file:", error);
      toast.error("upload file thất bại");
    }
  };

  const uploadProps = {
    beforeUpload: (file) => {
      handleUploadCV(file);
      return false; // Prevent the default upload behavior
    },
  };

  return (
    <div className="h-80 bg-white rounded-[9px] mt-1">
      <div className="text-2xl font-bold p-3 opacity-60 ml-3">
        Hồ sơ đã tải lên
      </div>

      <div className=" bg-slate-100 rounded-lg m-5 h-56 p-3 flex justify-center items-center mb-4">
        <Upload {...uploadProps}>
          <Button className=" flex flex-row items-center text-xl text-blue-600 bg-slate-200 m-9 h-10 gap-4 font-semibold rounded-2xl">
            <IoIosAddCircle className="items-center text-2xl" />
            Chọn hoặc kéo thả hồ sơ từ máy của bạn
          </Button>
          <div className="ml-9 text-lg">
            Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5120KB.
          </div>
        </Upload>
      </div>
      {/* <div>
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        {fileName && (
          <div>
            <h2>Uploaded File Name:</h2>
            <p>{fileName}</p>
          </div>
        )} */}
      {/* <div className="h-60 bg-white rounded-[9px] mt-1">
          <div className="text-2xl font-bold p-3 opacity-60 ml-3">
            Hồ sơ đã tải lên
          </div>

          <div className=" bg-slate-100 rounded-lg m-5 h-36 p-3 flex justify-center items-center mb-4">
            <Upload>
              <Button className=" flex flex-row items-center text-xl text-blue-600 bg-slate-200 m-9 h-10 gap-4 font-semibold rounded-2xl">
                <IoIosAddCircle className="items-center text-2xl" />
                Chọn hoặc kéo thả hồ sơ từ máy của bạn
              </Button>
              <div className="ml-9 text-lg">
                Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5120KB.
              </div>
            </Upload>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default ApplicantAttach;
