import React from "react";

const Section3 = ({ jobs }) => {
  return (
    <div div class="flex w-full h-[auto] mb-[16px] mt-4 flex-col">
      <div className="w-full rounded-[6px] flex items-center justify-between  bg-White border-gray-200">
        <div className="text-[20px] font-bold">Mô tả công việc</div>
      </div>

      <div>{jobs.description}</div>

      <div className="text-[20px] font-bold">Yêu cầu công việc</div>

      <div>
        - Tốt nghiệp cao đẳng, Đại học hệ chính quy chuyên ngành kế toán hoặc
        các chuyên ngành liên quan. - Tối thiểu 2 năm làm kế toán - Thành thạo
        tin học văn phòng và các phần mềm kế toán - Nắm vững chuyên môn nghiệp
        vụ - Khả năng đọc hiểu Tiếng Anh là lợi thế.
      </div>

      <div className="text-[20px] font-bold">Các phúc lợi dành cho bạn</div>
    </div>
  );
};

export default Section3;
