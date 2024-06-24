import React, { useState } from "react";

import { IoAddCircleOutline } from "react-icons/io5";
import ExpModal from "../modal/ExpModal";
import EducationModal from "../modal/EducationModal ";
import LanguageModal from "../modal/LanguageModal ";

const Section3 = () => {
  const [isOpenExp, setIsOpenExp] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [isOpenEducation, setIsOpenEducation] = useState(false);
  const [educations, setEducations] = useState([]);
  const [isOpenLanguages, setIsOpenLanguages] = useState(false);
  const [languages, setLanguages] = useState([]);

  const openModalExp = () => {
    setIsOpenExp(true);
  };

  const closeModalExp = () => {
    setIsOpenExp(false);
  };
  const openModalEdu = () => {
    setIsOpenEducation(true);
  };

  const closeModalEdu = () => {
    setIsOpenEducation(false);
  };
  const openModalLanguage = () => {
    setIsOpenLanguages(true);
  };

  const closeModalLaguage = () => {
    setIsOpenLanguages(false);
  };

  const handleAddExperience = (data) => {
    setExperiences([...experiences, data]);
  };

  const handleAddEducation = (data) => {
    setEducations([...educations, data]);
  };

  const handleAddLanguage = (data) => {
    setLanguages([...languages, data]);
  };

  return (
    <div className="h-auto">
      <div className="h-  bg-white rounded-[9px] mt-4 pt-5">
        <div className="flex flex-col ml-4 gap-5   ">
          <div className="text-3xl font-bold">Kinh Nghiệm Làm Việc</div>
          <div className="italic text-base">
            Mô tả kinh nghiệm làm việc của bạn càng chi tiết càng tốt, điều đó
            giúp bạn có cơ hội hiển thị nhiều hơn trong kết quả tìm kiếm
          </div>
          <button
            type="button"
            className="flex flex-row items-center gap-2 text-xl font-bold text-blue-700"
            onClick={openModalExp}
          >
            <IoAddCircleOutline className="text-3xl" />
            <div>Thêm Kinh Nghiệm Làm Việc</div>
          </button>
          <ul className="mt-2 w-2/3">
            {experiences.map((exp, index) => (
              <li key={index} className="bg-blue-50 p-4 rounded-lg shadow mb-4">
                <h2 className="text-xl font-bold">
                  Tên công ty: {exp.tencongty}
                </h2>
                <p>Chức danh: {exp.chucdanh}</p>
                <p>Số năm kinh nghiệm: {exp.sonamkinhnghiem}</p>
                <p>Mô tả công việc: {exp.mota}</p>
              </li>
            ))}
          </ul>
          <ExpModal
            isOpen={isOpenExp}
            onClose={closeModalExp}
            onSubmit={handleAddExperience}
          />
        </div>
      </div>

      <div className="h-  bg-white rounded-[9px] mt-4 pt-5">
        <div className="flex flex-col ml-4 gap-5   ">
          <div className="text-3xl font-bold">Học Vấn</div>
          <div className="italic text-base">
            Mô tả toàn bộ quá trình học vấn của bạn, cũng như các bằng cấp bạn
            đã được và các khóa huấn luyện bạn đã tham gia
          </div>
          <button
            type="button"
            className="flex flex-row items-center gap-2 text-xl font-bold text-blue-700"
            onClick={openModalEdu}
          >
            <IoAddCircleOutline className="text-3xl" />
            <div>Thêm Học Vấn</div>
          </button>
          <ul className="mt-2 w-2/3">
            {educations.map((edu, index) => (
              <li key={index} className="bg-blue-50 p-4 rounded-lg shadow mb-4">
                <h2 className="text-xl font-bold">Trường: {edu.tentruong}</h2>
                <p>Chuyên ngành:{edu.chuyennganh}</p>
                <p>Trình độ: {edu.trinhdo}</p>
                <p>Sinh viên năm thứ: {edu.sinhviennamthu}</p>
                <p>Thành tích: {edu.thanhtich}</p>
              </li>
            ))}
          </ul>
          <EducationModal
            isOpen={isOpenEducation}
            onClose={closeModalEdu}
            onSubmit={handleAddEducation}
          />
        </div>
      </div>

      <div className="h-  bg-white rounded-[9px] mt-4 pt-5">
        <div className="flex flex-col ml-4 gap-5   ">
          <div className="text-3xl font-bold">Ngoại Ngữ</div>
          <div className="italic text-base">
            Cập nhật thông tin ngoại ngữ, điều này sẽ giúp tăng triển vọng tìm
            kiếm công việc.
          </div>
          <button
            type="button"
            className="flex flex-row items-center gap-2 text-xl font-bold text-blue-700"
            onClick={openModalLanguage}
          >
            <IoAddCircleOutline className="text-3xl" />
            <div>Thêm Ngoại Ngữ</div>
          </button>
          <ul className="mt-2 w-2/3">
            {languages.map((lang, index) => (
              <li key={index} className="bg-blue-50 p-4 rounded-lg shadow mb-4">
                <h2 className="text-xl font-bold">Ngoại ngữ: {lang.ngonngu}</h2>
                <p>Cấp độ: {lang.capdo}</p>
              </li>
            ))}
          </ul>
          <LanguageModal
            isOpen={isOpenLanguages}
            onClose={closeModalLaguage}
            onSubmit={handleAddLanguage}
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
