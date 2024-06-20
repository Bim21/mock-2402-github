import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useJobContext } from "../../../contexts/JobProvider";

//Ngành nghề
const Career = () => {
  const { valueCareer, handeCareerChange } = useJobContext();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative " ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center rounded-[6px] border-gray-300 border-[1px] p-[3px] h-[40px] hover:border-blue-400"
      >
        <div className="text-[14px]">Tất Cả Ngành Nghề</div>
        <MdKeyboardArrowDown className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-[300px] bg-white shadow-lg rounded-md ">
          <div className="p-[8px] flex flex-col ">
            <div className="flex flex-col">
              <label className="flex font-bold text-[16px] leading-[19px] h-[40px] items-center mb-0 ">
                <span>Ngành Nghề</span>
              </label>
              <div className="rounded-[6px] relative h-[40px] ">
                <div className="absolute flex items-center justify-center w-[40px] h-[40px]">
                  <BsSearch className="  items-center" />
                </div>
                <input
                  className=" w-full h-full bg-slate-100 pl-[40px] rounded-[6px] border-transparent focus:outline-none focus:ring-0"
                  placeholder="Tìm kiếm"
                />
              </div>
            </div>
            <div
              className="relative min-h-[240px] mb-[8px] mt-[4px]"
              style={{ maxHeight: "270px", overflowY: "auto" }}
            >
              <div className="absolute w-full">
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option1"
                      name="option1"
                      value="Bán lẻ/ Tiêu dùng"
                      checked={valueCareer["option1"] === "Bán lẻ/ Tiêu dùng"}
                      onChange={handeCareerChange}
                      className=""
                    />
                    <label className="ml-[10px]">Bán lẻ/ Tiêu dùng</label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option2"
                      name="option2"
                      value="Bảo Hiểm"
                      checked={valueCareer["option2"] === "Bảo Hiểm"}
                      onChange={handeCareerChange}
                    />
                    <label className="ml-[10px]">Bảo Hiểm</label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option3"
                      name="option3"
                      value="Bất động sản"
                      checked={valueCareer["option3"] === "Bất động sản"}
                      onChange={handeCareerChange}
                    />
                    <label className="ml-[10px]">Bất động sản</label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option4"
                      name="option4"
                      value="CEO & General Manangement"
                      checked={
                        valueCareer["option4"] === "CEO & General Manangement"
                      }
                      onChange={handeCareerChange}
                    />
                    <label className="ml-[10px]">
                      CEO & General Manangement
                    </label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option5"
                      name="option5"
                      value="Chính Phủ/ Phi lợi nhuận"
                      checked={
                        valueCareer["option5"] === "Chính Phủ/ Phi lợi nhuận"
                      }
                      onChange={handeCareerChange}
                    />
                    <label className="ml-[10px]">
                      Chính Phủ/ Phi lợi nhuận
                    </label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option6"
                      name="option6"
                      value="Công nghệ thông tin/ Viễn thông"
                      checked={
                        valueCareer["option6"] ===
                        "Công nghệ thông tin/ Viễn thông"
                      }
                      onChange={handeCareerChange}
                    />
                    <label className="ml-[10px]">
                      Công nghệ thông tin/ Viễn thông
                    </label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option6"
                      name="option6"
                      value="Hành chính văn phòng"
                      checked={
                        valueCareer["option6"] === "Hành chính văn phòng"
                      }
                      onChange={handeCareerChange}
                    />
                    <label className="ml-[10px]">Hành chính văn phòng</label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option6"
                      name="option6"
                      value="Khoa học kỹ thuật"
                      checked={valueCareer["option6"] === "Khoa học kỹ thuật"}
                      onChange={handeCareerChange}
                    />
                    <label className="ml-[10px]">Khoa học kỹ thuật</label>
                  </div>{" "}
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option6"
                      name="option6"
                      value="Kinh doanh"
                      checked={valueCareer["option6"] === "Kinh doanh"}
                      onChange={handeCareerChange}
                    />
                    <label className="ml-[10px]">Kinh doanh</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-[1px] border-gray-100 pt-[16px] px-[16px]">
              <div className="flex justify-end">
                <button className="h-[40px] px-[16px] rounded-md bg-gray-100 text-[14px] font-medium hover:bg-gray-300">
                  Hủy
                </button>
                <button className="ml-[10px] h-[40px] px-[16px] rounded-md bg-orange-400 mr-[-16px] text-[14px] font-medium text-white hover:bg-orange-300">
                  Tìm Kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
