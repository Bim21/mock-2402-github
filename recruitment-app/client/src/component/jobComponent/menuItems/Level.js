import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useJobContext } from "../../../contexts/JobProvider";

const Level = () => {
  const { valueLevel, handeLevelChange } = useJobContext();

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
        <div className="text-[14px]">Tất cả cấp bậc</div>
        <MdKeyboardArrowDown className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-[270px] bg-white shadow-lg rounded-md ">
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
                      name="level"
                      value={""}
                      checked={valueLevel === ""}
                      onChange={handeLevelChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Tất cả cấp bậc
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="1"
                      name="level"
                      value="Thực tập sinh/ sinh viên"
                      checked={valueLevel === "Thực tập sinh/ sinh viên"}
                      onChange={handeLevelChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Thực tập sinh/ Sinh viên
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="2"
                      name="level"
                      value="Mới tốt nghiệp"
                      checked={valueLevel === "Mới tốt nghiệp"}
                      onChange={handeLevelChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Mới tốt nghiệp
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="3"
                      name="level"
                      value="Nhân viên"
                      checked={valueLevel === "Nhân viên"}
                      onChange={handeLevelChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Nhân viên
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="4"
                      name="level"
                      value="Trưởng phòng"
                      checked={valueLevel === "Trưởng phòng"}
                      onChange={handeLevelChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Trưởng phòng
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-[40px] pr-[4px] ">
                  <div className="flex">
                    <input
                      type="radio"
                      id="4"
                      name="level"
                      value="Giám đốc và cấp cao hơn"
                      checked={valueLevel === "Giám đốc và cấp cao hơn"}
                      onChange={handeLevelChange}
                    />
                    <label for="all" className="ml-[10px]">
                      Giám đốc và cấp cao hơn
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

export default Level;
