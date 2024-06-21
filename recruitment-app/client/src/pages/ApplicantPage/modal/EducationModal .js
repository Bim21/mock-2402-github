import React from "react";

const EducationModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Thêm Học Vấn</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-row gap-2 w-full">
            <div className="mb-4 w-[50%]">
              <label className="block text-gray-700 mb-2">Chuyên ngành</label>
              <input
                type="text"
                name="chuyennganh"
                className="w-full border-gray-300 border-[1px] rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4 w-[50%]">
              <label className="block text-gray-700 mb-2">Tên trường</label>
              <input
                type="text"
                name="tentruong"
                className="w-full border-gray-300 border-[1px] rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 w-full">
            <div className="mb-4 w-[50%]">
              <label className="block text-gray-700 mb-2">Trình độ</label>
              <input
                type="text"
                name="trinhdo"
                className="w-full border-gray-300 border-[1px] rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4 w-[50%]">
              <label className="block text-gray-700 mb-2">
                Sinh viên năm thứ
              </label>
              <input
                type="number"
                name="sinhviennamthu"
                className="w-full border-gray-300 border-[1px] rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Thành tích</label>
            <textarea
              name="thanhtich"
              className="w-full border-gray-300 border-[1px] rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 bg-gray-500 text-white px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Hủy
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationModal;
