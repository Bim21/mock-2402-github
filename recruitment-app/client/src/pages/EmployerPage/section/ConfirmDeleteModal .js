import React from "react";

const ConfirmDeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  deps,
  button,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-300 bg-opacity-20">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-500">{deps}</p>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={onConfirm}
          >
            {button}
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            onClick={onClose}
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
