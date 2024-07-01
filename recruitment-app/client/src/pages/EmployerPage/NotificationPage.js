import React from "react";
import Footer from "../../component/Footer";

const NotificationPage = () => {
  return (
    <div className="h-screen">
      <div className="h-[45%] flex flex-col items-center justify-start bg-gray-100">
        <div className="bg-white p-8 mt-10 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-green-500 mb-4">
            Chúc mừng Quý công ty đã tuyển được nhân viên mới!
          </h1>
          <p className="text-gray-700 text-lg">
            Mong sự hợp tác giữa hai bên thuận lợi và đạt được những thành quả
            tích cực ở những dự án trong tương lai.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotificationPage;
