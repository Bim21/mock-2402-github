import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useJobContext } from "../../../contexts/JobProvider";

//Lĩnh vực công ty
const CompanyField = () => {
  const { valueJobField, handeJobFieldChange } = useJobContext();
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
        <div className="text-[14px]">Tất Cả Lĩnh Vực Công Ty</div>
        <MdKeyboardArrowDown className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-[330px] bg-white shadow-lg rounded-md ">
          <div className="p-[8px] flex flex-col ">
            <div className="flex flex-col">
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
                  <div className="flex">
                    <input
                      type="radio"
                      id="all"
                      name="company"
                      value={""}
                      checked={valueJobField === ""}
                      onChange={handeJobFieldChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Tất cả lĩnh vực công ty
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="1"
                      name="company"
                      value="Cơ khí/Máy móc/Thiết bị công nghiệp"
                      checked={
                        valueJobField === "Cơ khí/Máy móc/Thiết bị công nghiệp"
                      }
                      onChange={handeJobFieldChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Cơ khí/Máy móc/Thiết bị công nghiệp
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="2"
                      name="company"
                      value="Bao bì/ In ấn/ Dán nhãn"
                      checked={valueJobField === "Bao bì/ In ấn/ Dán nhãn"}
                      onChange={handeJobFieldChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Bao bì/ In ấn/ Dán nhãn
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="3"
                      name="company"
                      value="Bán lẻ/ bán sỉ"
                      checked={valueJobField === "Bán lẻ/ bán sỉ"}
                      onChange={handeJobFieldChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Bán lẻ/ bán sỉ
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="4"
                      name="company"
                      value="Bảo hiểm"
                      checked={valueJobField === "Bảo hiểm"}
                      onChange={handeJobFieldChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Bảo hiểm
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="5"
                      name="company"
                      value="Chuỗi cung ứng"
                      checked={valueJobField === "Chuỗi cung ứng"}
                      onChange={handeJobFieldChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Chuỗi cung ứng
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="6"
                      name="company"
                      value="Chính phủ & NGO"
                      checked={valueJobField === "Chính phủ & NGO"}
                      onChange={handeJobFieldChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Chính phủ & NGO
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="7"
                      name="company"
                      value="Hành chính văn phòng"
                      checked={valueJobField === "Hành chính văn phòng"}
                      onChange={handeJobFieldChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Hành chính văn phòng
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            {/* Thêm các mục menu con khác tại đây */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyField;
