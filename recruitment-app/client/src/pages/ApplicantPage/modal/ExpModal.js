import React from "react";

const ExpModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Thêm kinh nghiệm việc làm</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Chức danh</label>
            <input
              type="text"
              name="chucdanh"
              className="w-full border-gray-300 border-[1px] rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-row gap-2">
            <div className="mb-4 w-[70%]">
              <label className="block text-gray-700 mb-2">Tên công ty</label>
              <input
                type="text"
                name="tencongty"
                className="w-full border-gray-300 border-[1px] rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4 w-[30%]">
              <label className="block text-gray-700 mb-2">
                Số năm kinh nghiệm
              </label>
              <input
                type="number"
                name="sonamkinhnghiem"
                className="w-full border-gray-300 border-[1px] rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Mô tả</label>
            <textarea
              name="mota"
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

export default ExpModal;
