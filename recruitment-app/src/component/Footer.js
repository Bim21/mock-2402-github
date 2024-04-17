import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8 w-full mt-[20px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4 ">Về VietnamWorks</h4>
          <ul >
            <li><a href="/" className=' text-white hover:text-blue-300'>Về chúng tôi</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Liên Hệ</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Hỏi Đáp</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Thỏa Thuận Sử Dụng</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Quy Định Bảo Mật</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Quy Chế Hoạt Động Sàn Giao Dịch Thương Mại Điện Tử VietnamWorks</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Dành cho Nhà tuyển dụng</h4>
          <ul>
            <li><a href="/" className=' text-white hover:text-blue-300'>Đăng tuyển dụng</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Tìm kiếm hồ sơ</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Sản phẩm Dịch vụ khác</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Liên hệ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Việc làm theo khu vực</h4>
          <ul>
            <li><a href="/" className=' text-white hover:text-blue-300'>Hồ Chí Minh</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Hà Nội</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Hải Phòng</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Đà Nẵng</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Cần Thơ</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Xem tất cả khu vực</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Việc làm theo ngành nghề</h4>
          <ul>
            <li><a href="/" className=' text-white hover:text-blue-300'>Kế toán</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Ngân hàng</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Phần mềm máy tính</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>IT Support / Help Desk</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Xây dựng</a></li>
            <li><a href="/" className=' text-white hover:text-blue-300'>Tìm việc làm</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <h4 className="text-lg font-bold mb-4">Theo dõi VietnamWorks trên</h4>
        <ul className="flex justify-center flex-row gap-4 mb-4">
          <li><a href="/">
            <img src='https://images.vietnamworks.com/icon/social-icons/facebook.svg' alt=''
            className='w-[22px] h-[23px]' />
            </a></li>
          <li><a href="/">
          <img src='https://images.vietnamworks.com/icon/social-icons/linkedin.svg' alt=''
            className='w-[22px] h-[23px]' />
          </a></li>
          <li><a href="/">
          <img src='https://images.vietnamworks.com/icon/social-icons/tiktok.svg' alt=''
            className='w-[22px] h-[23px]' />
          </a></li>
          <li><a href="/">
          <img src='https://images.vietnamworks.com/icon/social-icons/youtube.svg' alt=''
            className='w-[22px] h-[23px]' />
          </a></li>
          <li><a href="/">
          <img src='https://images.vietnamworks.com/icon/social-icons/spotify.svg' alt=''
            className='w-[22px] h-[23px]' />
          </a></li>
        </ul>
        <p className="mb-2">Copyright © Công Ty Cổ Phần Tìm Việc Làm Trên Trái Đất</p>
        <p>Tầng 82, Landmark 81</p>
      </div>
    </footer>
  );
};

export default Footer;