import React from "react";
import EmployerHeader from "../EmployerHeader";
import Footer from "../../../component/Footer";
import { FaReply } from "react-icons/fa";

const UserDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center box-border w-full bg-gray-100">
      <EmployerHeader />
      <div className="bg-white w-[90%] h-auto py-[40px] px-[24px] mt-4 rounded-lg shadow-md">
        <div className="flex justify-center gap-4">
          <div className="flex items-center">
            <img
              src="	https://employer.vietnamworks.com/v2/img/default-profile.png"
              alt=""
              className="w-[150px] h-[150px] rounded-full"
            />
          </div>
          <div>
            <div className="text-blue-500 text-[22px] font-bold pb-2">
              Phan Đức
            </div>
            <div className="text-slate-900 text-[17px] font-semibold pb-[8px]">
              Giám Sát Vận Hành
            </div>
            <div className="text-slate-900 text-[17px] font-semibold pb-[8px]">
              Công Ty Cổ Phần Vincom Retail
            </div>
            <div className="text-[14px] pb-[8px]">Trưởng Phòng</div>
            <div className="text-[14px] pb-[8px]">Quận Hoàng Mai, Hà Nội</div>
            <div className="text-[14px] pb-[8px]">Ngày Sinh: 29/12/1993</div>
          </div>
          <div className="flex items-start justify-start h-full">
            <button className="bg-orange-400 flex items-center p-2 rounded-lg hover:bg-orange-300">
              <FaReply className="text-white mr-1" />
              <span className="text-white">Gửi mail</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white w-[90%] h-auto py-[40px] px-[24px] mt-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div>
            <h2 className="font-bold">Mức Lương Mong Muốn</h2>
            <p>800 USD</p>
          </div>
          <div>
            <h2 className="font-bold">Cấp Bậc Mong Muốn</h2>
            <p>Trưởng Phòng</p>
          </div>
          <div>
            <h2 className="font-bold">Năm Kinh Nghiệm</h2>
            <p>5 Năm</p>
          </div>
          <div>
            <h2 className="font-bold">Ngoại Ngữ</h2>
            <p>English - Cao Cấp, French - Sơ Cấp</p>
          </div>
          <div>
            <h2 className="font-bold">Vị Trí Hiện Tại</h2>
            <p>Giám Sát Vận Hành</p>
          </div>
          <div>
            <h2 className="font-bold">Công Ty Hiện Tại</h2>
            <p>Công Ty Cổ Phần Vincom Retail</p>
          </div>
          <div>
            <h2 className="font-bold">Trình Độ Học Vấn</h2>
            <p>Cử Nhân</p>
          </div>
          <div>
            <h2 className="font-bold">Ngành Nghề</h2>
            <p>Hậu Cần/Xuất Nhập Khẩu/Kho Bãi: Quản Lý Kho & Phân Phối</p>
          </div>
          <div>
            <h2 className="font-bold">Lĩnh Vực</h2>
            <p>Giáo Dục/Đào Tạo</p>
          </div>
          <div>
            <h2 className="font-bold">Địa Điểm Làm Việc</h2>
            <p>Hà Nội</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetail;
