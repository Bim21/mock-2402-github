import React from "react";

const LanguageModal = ({ isOpen, onClose, onSubmit }) => {
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
        <h2 className="text-2xl font-bold mb-4">Thêm Ngoại Ngữ</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-between items-center flex-row gap-2">
            <div className="mb-4 flex justify-center items-center w-[50%]">
              <label className="block text-gray-700 mb-2 w-24 mr-2">
                Ngoại ngữ
              </label>
              <input
                type="text"
                name="ngonngu"
                className="w-full border-gray-300 border-[1px] rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4 w-[50%]">
              <select
                name="capdo"
                className="w-full border-gray-300 border-[1px] rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              >
                <option value="">Chọn cấp độ</option>
                <option value="Sơ cấp">Sơ cấp</option>
                <option value="Trung cấp">Trung cấp</option>
                <option value="Cao cấp">Cao cấp</option>
                <option value="Bản xứ">Bản xứ</option>
              </select>
            </div>
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

export default LanguageModal;
