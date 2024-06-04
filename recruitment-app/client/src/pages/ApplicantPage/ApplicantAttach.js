import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const ApplicantAttach = () => {
  return (
    <div className='h-60 bg-white rounded-[9px] mt-1'>
      <div className='text-2xl font-bold p-3 opacity-60 ml-3'>Hồ sơ đã tải lên</div>

      <div className=" bg-slate-100 rounded-lg m-5 h-36 p-3 flex justify-center items-center mb-4">
        <Upload  >

          <Button className=" flex flex-row items-center text-xl text-blue-600 bg-slate-200 m-9 h-10 gap-4 font-semibold rounded-2xl" >
            <IoIosAddCircle className="items-center text-2xl" />
            Chọn hoặc kéo thả hồ sơ từ máy của bạn
          </Button>
          <div className="ml-9 text-lg">Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5120KB.</div>
        </Upload>
      </div>
    </div>
  );
};

export default ApplicantAttach;
