import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useJobContext } from "../../../contexts/JobProvider";

const LocationMenu = () => {
  const { valueLocation, handeLocationChange } = useJobContext();

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
        <div className="text-[14px]">Tất Cả Địa Điểm</div>
        <MdKeyboardArrowDown className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-[250px] bg-white shadow-lg rounded-md">
          <div className="p-[8px] flex flex-col ">
            <div className="flex flex-col">
              <label className="flex font-bold text-[16px] leading-[19px] h-[40px] items-center mb-0 ">
                <span>Địa Điểm</span>
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
              className="relative min-h-[150px] mb-[8px] mt-[4px]"
              style={{ maxHeight: "270px", overflowY: "auto" }}
            >
              <div className="absolute w-full">
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option1"
                      name="option1"
                      value="Hà Nội"
                      checked={valueLocation["option1"] === "Hà Nội"}
                      onChange={handeLocationChange}
                    />
                    <label className="ml-[10px]">Hà Nội</label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option2"
                      name="option2"
                      value="Đà Nẵng"
                      checked={valueLocation["option2"] === "Đà Nẵng"}
                      onChange={handeLocationChange}
                    />
                    <label className="ml-[10px]">Đà Nẵng</label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option3"
                      name="option3"
                      value="Hồ Chí Minh"
                      checked={valueLocation["option3"] === "Hồ Chí Minh"}
                      onChange={handeLocationChange}
                    />
                    <label className="ml-[10px]">Hồ Chí Minh</label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option4"
                      name="option4"
                      value="Cần Thơ"
                      checked={valueLocation["option4"] === "Cần Thơ"}
                      onChange={handeLocationChange}
                    />
                    <label className="ml-[10px]">Cần Thơ</label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option5"
                      name="option5"
                      value="Bắc Giang"
                      checked={valueLocation["option5"] === "Bắc Giang"}
                      onChange={handeLocationChange}
                    />
                    <label className="ml-[10px]">Bắc Giang</label>
                  </div>
                  <div className="py-[10px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                    <input
                      type="checkbox"
                      id="option6"
                      name="option6"
                      value="Hải Phòng"
                      checked={valueLocation["option6"] === "Hải Phòng"}
                      onChange={handeLocationChange}
                    />
                    <label className="ml-[10px]">Hải Phòng</label>
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
                  Áp Dụng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationMenu;
