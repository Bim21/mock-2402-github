import React, { useEffect, useState } from "react";
import jobService from "../../../services/jobService";
import ConfirmDeleteModal from "./ConfirmDeleteModal ";
import UpdateModal from "./UpdateModal";
import { toast } from "react-toastify";

/**
 * Update:
 * B1: Click button update ở table -> Lấy ra thông tin của bản ghi muốn Update -> cần tạo 1 state để lưu thông tin
 * B2: Fill thông tin bản ghi lên Modal để tiến hành chỉnh sửa
 * B3: bấm button Update -> call API update
 * B4: call API update thành công -> call API getData để lấy danh sách mới về
 */

/**
 * bỏ modal update ra bên ngoài hàm map
 * => mục đích: chỉ tạo ra 1 Modal thay vì nhiều modal
 * => nếu để trong hàm map thì nó sẽ lặp và tạo ra nhiều Modal theo length của mảng job
 * => về performance thì sẽ không tốt => chỉ nên render 1 modal
 * jobDataUpdate là dữ liệu ở B1 và B2 ở trên
 */

const Statistics2 = () => {
  const [data, setData] = useState([]);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [jobDataUpdate, setJobDataUpdate] = useState({});

  const handleOpenDeleteModal = (id) => {
    setItemId(id);
    setIsModalDeleteOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsModalDeleteOpen(false);
  };

  const handleOpenUpdateModal = (job) => {
    setJobDataUpdate(job);
    setIsModalUpdateOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsModalUpdateOpen(false);
  };

  const handleUpdate = async (updateData) => {
    try {
      await jobService.update(jobDataUpdate.id, {
        ...jobDataUpdate,
        ...updateData,
      });
      getData();
      toast.success("Cập nhật thành công");
      setIsModalUpdateOpen(false);
    } catch (error) {
      toast.error("Cập nhật thất bại");
      console.error("Error updating item", error);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await jobService.delete(itemId);
      getData();
      toast.success("Xóa thành công");
      setIsModalDeleteOpen(false);
    } catch (error) {
      toast.error("Xóa thất bại");

      console.error("đã có lỗi", error);
    }
  };

  const getData = async () => {
    try {
      const response = await jobService.getAll();
      setData(response);
    } catch (error) {
      console.log("có lỗi...", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white rounded-lg p-[20px]">
      <div className="text-[18px] font-bold mb-4">Quản lý nhanh tin đăng</div>
      {data?.length > 0 ? (
        <div>
          <table className="bg-gray-100 rounded-lg m-0 w-full my-4">
            <thead className="py-4 ">
              <tr className="text-orange-500 bg-blue-100 h-10 rounded-lg">
                <th>STT</th>
                <th>Địa điểm</th>
                <th>Ngành nghề</th>
                <th>Lĩnh vực</th>
                <th>Cấp bậc</th>

                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody className="">
              {data.map((job, index) => {
                return (
                  <tr className="text-blue-600">
                    <td className="p-4 text-center">{index + 1}</td>
                    <td className="p-4 text-center">{job.jobAddress}</td>
                    <td className="p-4 text-center">{job.careerJob}</td>
                    <td className="p-4 text-center">{job.jobField}</td>

                    <td className="p-4 text-center">{job.level}</td>
                    <td className="p-4 text-center">
                      <div>
                        <button
                          type="button"
                          className=" bg-blue-600 rounded-md hover:bg-blue-300 p-1 text-white mr-1"
                          onClick={() => handleOpenUpdateModal(job)}
                        >
                          Cập nhật
                        </button>
                        <button
                          type="button"
                          className=" bg-red-600 rounded-md hover:bg-red-500 p-1 text-white ml-1"
                          onClick={() => handleOpenDeleteModal(job.id)}
                        >
                          Xóa tin
                        </button>
                        <ConfirmDeleteModal
                          isOpen={isModalDeleteOpen}
                          onClose={handleCloseDeleteModal}
                          onConfirm={handleConfirmDelete}
                          title={"Xác nhận xóa tin"}
                          deps={"Bạn có chắc chắn xóa tin đã đăng này?"}
                          button={"Xóa"}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <UpdateModal
            isOpen={isModalUpdateOpen}
            onClose={handleCloseUpdateModal}
            onUpdate={handleUpdate}
            job={jobDataUpdate}
          />
        </div>
      ) : (
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="https://employer.vietnamworks.com/v2/dashboard/static/media/icon-empty-list.db4196b27bfcc2b5707c1f08dbd96b05.svg"
              alt=""
            />
          </div>
          <p>Không có việc làm nào</p>
        </div>
      )}
    </div>
  );
};

export default Statistics2;
