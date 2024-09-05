import { Carousel } from "@material-tailwind/react";
import {
  FaAngleRight,
  FaCartPlus,
  FaChevronRight,
  FaPhone,
  FaRegCheckCircle,
} from "react-icons/fa";
import { MdDirections, MdPhoneIphone } from "react-icons/md";
import ProductItem from "../components/items/ProductItem";
function Detail() {
  return (
    <div className="bg-white">
      <div className="w-full ">
        <div className="w-content m-auto  py-1 flex gap-4">
          <div className="flex items-center gap-2">
            <img
              width={32}
              height={32}
              src="https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/small/Live_dcc0f0e59e.png"
              alt=""
            />
            <span>Săn ngay Iphone 15 Pro Mã từ 28.8 triệu</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              width={32}
              height={32}
              src="https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/small/Live_dcc0f0e59e.png"
              alt=""
            />
            <span>Săn ngay Iphone 15 Pro Mã từ 28.8 triệu</span>
          </div>
        </div>
      </div>
      <div className="w-content m-auto py-4">
        <div className=" flex gap-1 text-sm py-2 ">
          <span className=" text-blue-500">Trang chủ</span>/
          <span className=" ">Laptop</span>
        </div>
        {/* content */}
        <div className=" grid grid-cols-2 gap-5 py-5 ">
          {/* left */}
          <div>
            <div>
              <Carousel
                className="rounded-xl "
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50  flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <div className="w-full py-4 flex justify-center">
                  <img
                    width={359}
                    height={359}
                    className=" object-cover"
                    src="https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_11_6_638348873325524331_honor-90-lite-den-4.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full py-4 flex justify-center">
                  <img
                    width={359}
                    height={359}
                    className=" object-cover"
                    src="https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_11_6_638348873325524331_honor-90-lite-den-4.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full py-4 flex justify-center">
                  <img
                    width={359}
                    height={359}
                    className=" object-cover"
                    src="https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_11_6_638348873325524331_honor-90-lite-den-4.jpg"
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
            <div>
              <Carousel
                className="rounded-xl "
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50  flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <div className=" grid grid-cols-6 gap-2 px-5 pt-5">
                  <div className="border border-gray-500 rounded-lg p-3 flex flex-col items-center gap-2 shadow-sm ">
                    <img
                      height={36}
                      width={36}
                      className=" object-cover rounded-lg"
                      src="https://cdn2.fptshop.com.vn/unsafe/192x0/filters:quality(100)/2023_11_6_638348876155786176_honor-90-lite-xanh-3.jpg"
                      alt=""
                    />
                    <div>Xanh</div>
                  </div>
                  <div className="border rounded-lg p-3 flex flex-col items-center gap-2 shadow-sm ">
                    <img
                      height={36}
                      width={36}
                      className=" object-cover rounded-lg"
                      src="https://cdn2.fptshop.com.vn/unsafe/192x0/filters:quality(100)/2023_11_6_638348876155786176_honor-90-lite-xanh-3.jpg"
                      alt=""
                    />
                    <div>Xanh</div>
                  </div>
                  <div className="border rounded-lg p-3 flex flex-col items-center gap-2 shadow-sm ">
                    <img
                      height={36}
                      width={36}
                      className=" object-cover rounded-lg"
                      src="https://cdn2.fptshop.com.vn/unsafe/192x0/filters:quality(100)/2023_11_6_638348876155786176_honor-90-lite-xanh-3.jpg"
                      alt=""
                    />
                    <div>Xanh</div>
                  </div>
                  <div className="border rounded-lg p-3 flex flex-col items-center gap-2 shadow-sm ">
                    <img
                      height={36}
                      width={36}
                      className=" object-cover rounded-lg"
                      src="https://cdn2.fptshop.com.vn/unsafe/192x0/filters:quality(100)/2023_11_6_638348876155786176_honor-90-lite-xanh-3.jpg"
                      alt=""
                    />
                    <div>Xanh</div>
                  </div>
                  <div className="border rounded-lg p-3 flex flex-col items-center gap-2 shadow-sm ">
                    <img
                      height={36}
                      width={36}
                      className=" object-cover rounded-lg"
                      src="https://cdn2.fptshop.com.vn/unsafe/192x0/filters:quality(100)/2023_11_6_638348876155786176_honor-90-lite-xanh-3.jpg"
                      alt=""
                    />
                    <div>Xanh</div>
                  </div>
                  <div className="border rounded-lg p-3 flex flex-col items-center gap-2 shadow-sm ">
                    <img
                      height={36}
                      width={36}
                      className=" object-cover rounded-lg"
                      src="https://cdn2.fptshop.com.vn/unsafe/192x0/filters:quality(100)/2023_11_6_638348876155786176_honor-90-lite-xanh-3.jpg"
                      alt=""
                    />
                    <div>Xanh</div>
                  </div>
                </div>
              </Carousel>
            </div>
            {/* thong so */}
            <div className="border rounded-lg p-4 my-5">
              <div className="flex justify-between">
                <div className="font-bold">Thông số nổi bật</div>
                <div className="flex items-center gap-2 text-primary-400 text-sm  cursor-pointer">
                  Tất cả thông số
                  <FaChevronRight />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <div className="bg-gray-50 p-2 rounded-sm grid grid-cols-2">
                  <div className="flex flex-col">
                    <span className=" text-sm text-gray-600">
                      Kích thước màn hình
                    </span>
                    <span className=" font-bold">6.7 inch</span>
                    <div className=" text-sm text-primary-400 mt-2">
                      Tìm hiểu kích thước màn hình Iphone
                    </div>
                  </div>
                  <div className=" grid grid-cols-4 gap-2">
                    <div className="flex flex-col gap-3 text-gray-500 items-center justify-center text-sm">
                      <MdPhoneIphone />
                      <span className="">Nhỏ</span>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-800 items-center justify-center text-md">
                      <MdPhoneIphone />
                      <span className="text-sm">Vừa</span>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-500 items-center justify-center text-lg">
                      <MdPhoneIphone />
                      <span className="text-sm">Lớn</span>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-500 items-center justify-center text-xl">
                      <MdPhoneIphone />
                      <span className="text-sm">To</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-2 rounded-sm grid grid-cols-2">
                  <div className="flex flex-col">
                    <span className=" text-sm text-gray-600">
                      Kích thước màn hình
                    </span>
                    <span className=" font-bold">6.7 inch</span>
                    <div className=" text-sm text-primary-400 mt-2">
                      Tìm hiểu kích thước màn hình Iphone
                    </div>
                  </div>
                  <div className=" grid grid-cols-4 gap-2">
                    <div className="flex flex-col gap-3 text-gray-500 items-center justify-center text-sm">
                      <MdPhoneIphone />
                      <span className="">Nhỏ</span>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-800 items-center justify-center text-md">
                      <MdPhoneIphone />
                      <span className="text-sm">Vừa</span>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-500 items-center justify-center text-lg">
                      <MdPhoneIphone />
                      <span className="text-sm">Lớn</span>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-500 items-center justify-center text-xl">
                      <MdPhoneIphone />
                      <span className="text-sm">To</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-2 rounded-sm grid grid-cols-2">
                  <div className="flex flex-col">
                    <span className=" text-sm text-gray-600">
                      Kích thước màn hình
                    </span>
                    <span className=" font-bold">6.7 inch</span>
                    <div className=" text-sm text-primary-400 mt-2">
                      Tìm hiểu kích thước màn hình Iphone
                    </div>
                  </div>
                  <div className=" grid grid-cols-4 gap-2">
                    <div className="flex flex-col gap-3 text-gray-500 items-center justify-center text-sm">
                      <MdPhoneIphone />
                      <span className="">Nhỏ</span>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-800 items-center justify-center text-md">
                      <MdPhoneIphone />
                      <span className="text-sm">Vừa</span>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-500 items-center justify-center text-lg">
                      <MdPhoneIphone />
                      <span className="text-sm">Lớn</span>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-500 items-center justify-center text-xl">
                      <MdPhoneIphone />
                      <span className="text-sm">To</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chính sách dành cho sản phẩm */}
            <div className="border-t border-b py-5">
              <div className="font-bold">Chính sách dành cho sản phẩm</div>
              <div className="flex gap-8 mt-3">
                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn2.fptshop.com.vn/svg/Type_Bao_hanh_chinh_hang_4afa1cb34d.svg?w=48&q=100"
                    alt=""
                  />
                  <span className="text-sm">
                    Hàng chính hãng - Bào hành (tháng):13
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn2.fptshop.com.vn/svg/Type_Giao_hang_toan_quoc_318e6896b4.svg?w=48&q=100"
                    alt=""
                  />
                  <span className="text-sm">Giao hàng quốc tế</span>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="pl-5">
            <div className=" text-sm rounded-full px-3 bg-primary-500 w-fit text-white py-1">
              100 ngày đổi mới
            </div>
            <h2 className="font-bold text-3xl py-2">
              Honor 90 Lite 5G 8GB 256GB
            </h2>
            <div className="text-sm text-gray-500">No.00905284</div>
            <div className="flex items-center py-2">
              <div className="w-20 ">Dung lượng</div>
              <div className="border rounded-lg text-sm border-primary-500 p-2">
                256GB
              </div>
            </div>
            <div className="flex items-center py-2">
              <div className="w-20 ">Màu</div>
              <div className="border rounded-lg text-sm border-primary-500 p-2">
                Xanh
              </div>
              <div className="border rounded-lg text-sm  p-2 ml-4 ">Đen</div>
            </div>
            <div className="py-2">
              <img
                src="https://web-image.useinsider.com/fptshop/defaultImageLibrary/F-D1_576x100%20%2823%29-1724920633.png"
                className="w-full rounded-lg object-cover"
                alt=""
              />
            </div>
            <div className="border rounded-lg p-4 border-yellow-500 my-4 bg-yellow-50">
              <div className="grid grid-cols-2">
                <div className=" border-dashed border-r border-gray-500">
                  <div>Mua ngay với giá</div>
                  <div className="font-bold text-3xl my-1">8.900.000 đ</div>
                  <div>
                    <del className="text-sm text-gray-500 ">9.800.000đ</del>
                    <span className="text-deep-orange-500 ml-4">-8%</span>
                  </div>
                  <div className="text-sm text-orange-500 border border-orange-500 bg-orange-50 rounded-full w-fit px-2 mt-2">
                    +123 điểm thưởng
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="text-sm text-gray-600 font-bold">Trả góp</div>
                  <div className="text-xl">
                    751.000đ{" "}
                    <span className=" text-gray-500 text-sm">/tháng</span>
                  </div>
                </div>
              </div>
              <div className=" my-4 p-3 border border-primary-500 rounded-lg">
                <div className=" text-sm text-gray-600 font-bold">
                  khuyến mãi nổi bật
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaRegCheckCircle className="text-green-500" />
                    Giảm ngay 2.200.000đ áp dụng đến 03/09
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaRegCheckCircle className="text-green-500" />
                    Giảm ngay 2.200.000đ áp dụng đến 03/09
                  </div>
                </div>
              </div>
              <div className="bg-deep-orange-50 p-3 rounded-lg grid grid-cols-2">
                <div className="border-r border-gray-400">
                  <div className="font-bold">Giảm ngay</div>
                  <div className="font-bold text-2xl text-primary-500 mt-2">
                    300.00đ
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button className=" bg-primary-500 text-white py-1 px-5 rounded-lg">
                    Xác thực ngay
                  </button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg my-3">
              <div className="bg-gray-100 px-4 py-3 flex justify-between items-center">
                <div className="font-bold">Bán máy cũ - lên đời máy mới</div>
                <div className="text-sm text-primary-400">Tìm hiểu thêm</div>
              </div>
              <div className="p-4">
                <div>Thủ tục đơn giản - trợ giá cao nhất thị trường</div>
                <div className="border rounded-lg p-3 flex justify-between items-center mt-3">
                  <div className="font-bold">
                    Tham khảo giá thu cũ tốt nhất tại đây
                  </div>
                  <button className="bg-primary-500 px-5 py-2 rounded-full text-white">
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg my-3">
              <div className="bg-gray-100 px-4 py-3 flex justify-between items-center">
                <div className="font-bold">Quà tặng và ưu đãi khác</div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm">
                  <img
                    width={24}
                    height={24}
                    className="rounded-lg"
                    src="https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Bao%20hanh%202%20nam-1698634958769.jpeg?w=64&q=100"
                    alt=""
                  />
                  <div className="text-gray-600">
                    Đặc quyền 2 năm bảo hành - Trị giá đến 2,000,000đ
                  </div>
                  <span className="text-primary-400">Xem thêm</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <img
                    width={24}
                    height={24}
                    className="rounded-lg"
                    src="https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Bao%20hanh%202%20nam-1698634958769.jpeg?w=64&q=100"
                    alt=""
                  />
                  <div className="text-gray-600">
                    Đặc quyền 2 năm bảo hành - Trị giá đến 2,000,000đ
                  </div>
                  <span className="text-primary-400">Xem thêm</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3349 4.73207L13.4114 4.88463L13.9878 6.41762C14.0331 6.53834 14.1284 6.63359 14.2491 6.67889L15.7292 7.23416C16.3787 7.47783 16.7277 8.17187 16.5546 8.82852L16.513 8.95921L15.8244 10.482C15.7711 10.5994 15.7711 10.7341 15.8244 10.8515L16.4783 12.2907C16.7653 12.9223 16.5213 13.6599 15.9346 14.0018L15.7821 14.0782L14.2491 14.6547C14.1284 14.7 14.0331 14.7952 13.9878 14.916L13.4325 16.396C13.1889 17.0455 12.4948 17.3946 11.8382 17.2215L11.7075 17.1798L10.1847 16.4913C10.0673 16.4379 9.93256 16.4379 9.81517 16.4913L8.37596 17.1452C7.74439 17.4322 7.00683 17.1882 6.66489 16.6015L6.58847 16.4489L6.01202 14.916C5.96672 14.7952 5.87147 14.7 5.75075 14.6547L4.27067 14.0994C3.62117 13.8557 3.27215 13.1617 3.44522 12.505L3.48686 12.3744L4.17543 10.8515C4.22877 10.7341 4.22877 10.5994 4.17543 10.482L3.5215 9.04283C3.23453 8.41126 3.47849 7.6737 4.0652 7.33176L4.21776 7.25534L5.75075 6.67889C5.87147 6.63359 5.96672 6.53834 6.01202 6.41762L6.56729 4.93754C6.81096 4.28804 7.505 3.93902 8.16165 4.11209L8.29234 4.15373L9.81517 4.8423C9.93256 4.89564 10.0673 4.89564 10.1847 4.8423L11.6239 4.18837C12.2554 3.9014 12.993 4.14536 13.3349 4.73207ZM12.1638 8.37269L8.97816 12.0134L7.81571 10.851C7.6413 10.6766 7.35853 10.6766 7.18412 10.851C7.00971 11.0254 7.00971 11.3082 7.18412 11.4826L8.68412 12.9826C8.86679 13.1653 9.16589 13.1553 9.33602 12.9609L12.836 8.96087C12.9984 8.77525 12.9796 8.4931 12.794 8.33068C12.6084 8.16826 12.3262 8.18707 12.1638 8.37269Z"
                      fill="url(#paint0_linear_7_198925)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_7_198925"
                        x1="8.74501"
                        y1="18.0349"
                        x2="21.4092"
                        y2="-2.78223"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.381435" stop-color="#8B7D75"></stop>
                        <stop offset="0.84052" stop-color="#DAC392"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-gray-600">
                    Đặc quyền 2 năm bảo hành - Trị giá đến 2,000,000đ
                  </div>
                  <span className="text-primary-400">Xem thêm</span>
                </div>
              </div>
            </div>
            <div className="border rounded-lg my-3">
              <div className="bg-gray-100 px-4 py-3 flex justify-between items-center">
                <div className="font-bold">Chọn gói bảo hành</div>
              </div>
              <div className="p-4 grid grid-cols-2 gap-3">
                <div className="border rounded-lg p-2 border-primary-500">
                  <div className="font-sm">
                    Đặc quyền Bào hành 1 đổi 1 Iphone
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-primary-500">6.900.000đ</div>
                    <del className="text-gray-600 text-sm ">9.780.000đ</del>
                  </div>
                </div>
                <div className="border rounded-lg p-2">
                  <div className="font-sm">
                    Đặc quyền Bào hành 1 đổi 1 Iphone
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-primary-500">6.900.000đ</div>
                    <del className="text-gray-600 text-sm ">9.780.000đ</del>
                  </div>
                </div>
              </div>
            </div>
            {/* nut */}
            <div className="my-5 flex items-center gap-2">
              <div className="border border-primary-500 rounded-lg text-primary-500 p-4 text-2xl hover:bg-primary-300 cursor-pointer">
                <FaCartPlus />
              </div>
              <div className=" grid grid-cols-2 gap-2 flex-1 ">
                <div className="bg-primary-500 text-2xl text-center text-white py-3 rounded-lg cursor-pointer hover:opacity-80">
                  Mua ngay
                </div>
                <div className="bg-dark-bg text-2xl text-center text-white py-3 rounded-lg cursor-pointer hover:opacity-80">
                  Trả góp
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaPhone className="text-primary-500" />
              Gọi <span className="text-primary-500">1800-6601</span> để được tư
              vấn mua hàng <span className="text-sm">(Miễn phí)</span>
            </div>

            <div className="my-4 bg-gray-100 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <select name="" id="" className="border rounded-lg py-2">
                  <option value="">-Chọn-</option>
                  <option value="">-Chọn-</option>
                </select>
                <select name="" id="" className="border rounded-lg py-2">
                  <option value="">-Chọn-</option>
                  <option value="">-Chọn-</option>
                </select>
              </div>
              <div className="text-sm my-3">Có 71 cửa hàng còn hàng</div>
              <div className="flex flex-col gap-2 h-[350px] overflow-y-scroll scrollbar_custom">
                <div className=" boder bg-white rounded-xl p-2 px-3 w-full">
                  <div className="mb-2 ">
                    63 Bis Gò Dầu, P. Tân Quý, Q. Tân Phú, TP Hồ Chí Minh, Việt
                    Nam
                  </div>
                  <div className="flex items-center gap-2 border bg-white text-sm p-2 rounded-full w-fit cursor-pointer hover:bg-gray-50 shadow-sm">
                    <MdDirections className="text-primary-400" />
                    Chỉ đường
                  </div>
                </div>
                <div className=" boder bg-white rounded-xl p-2 px-3 w-full">
                  <div className="mb-2 ">
                    63 Bis Gò Dầu, P. Tân Quý, Q. Tân Phú, TP Hồ Chí Minh, Việt
                    Nam
                  </div>
                  <div className="flex items-center gap-2 border bg-white text-sm p-2 rounded-full w-fit cursor-pointer hover:bg-gray-50 shadow-sm">
                    <MdDirections className="text-primary-400" />
                    Chỉ đường
                  </div>
                </div>
                <div className=" boder bg-white rounded-xl p-2 px-3 w-full">
                  <div className="mb-2 ">
                    63 Bis Gò Dầu, P. Tân Quý, Q. Tân Phú, TP Hồ Chí Minh, Việt
                    Nam
                  </div>
                  <div className="flex items-center gap-2 border bg-white text-sm p-2 rounded-full w-fit cursor-pointer hover:bg-gray-50 shadow-sm">
                    <MdDirections className="text-primary-400" />
                    Chỉ đường
                  </div>
                </div>
                <div className=" boder bg-white rounded-xl p-2 px-3 w-full">
                  <div className="mb-2 ">
                    63 Bis Gò Dầu, P. Tân Quý, Q. Tân Phú, TP Hồ Chí Minh, Việt
                    Nam
                  </div>
                  <div className="flex items-center gap-2 border bg-white text-sm p-2 rounded-full w-fit cursor-pointer hover:bg-gray-50 shadow-sm">
                    <MdDirections className="text-primary-400" />
                    Chỉ đường
                  </div>
                </div>
                <div className=" boder bg-white rounded-xl p-2 px-3 w-full">
                  <div className="mb-2 ">
                    63 Bis Gò Dầu, P. Tân Quý, Q. Tân Phú, TP Hồ Chí Minh, Việt
                    Nam
                  </div>
                  <div className="flex items-center gap-2 border bg-white text-sm p-2 rounded-full w-fit cursor-pointer hover:bg-gray-50 shadow-sm">
                    <MdDirections className="text-primary-400" />
                    Chỉ đường
                  </div>
                </div>
                <div className=" boder bg-white rounded-xl p-2 px-3 w-full">
                  <div className="mb-2 ">
                    63 Bis Gò Dầu, P. Tân Quý, Q. Tân Phú, TP Hồ Chí Minh, Việt
                    Nam
                  </div>
                  <div className="flex items-center gap-2 border bg-white text-sm p-2 rounded-full w-fit cursor-pointer hover:bg-gray-50 shadow-sm">
                    <MdDirections className="text-primary-400" />
                    Chỉ đường
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* chi tiet */}
        <div className="grid grid-cols-2 text-center mt-5 border-t border-b shadow-lg">
          <div className="py-3 font-bold border-b-2 border-primary-500 text-primary-500 cursor-pointer">
            Thông tin sản phẩm
          </div>
          <div className="py-3 font-bold border-b-2 border-transparent cursor-pointer hover:border-primary-500 hover:text-primary-500">
            So sánh sản phẩm tương tự
          </div>
        </div>
        <div className="border rounded-xl shadow-md p-5 mt-5">
          <div className="font-bold text-2xl">Thông tin sản phẩm</div>
          <div className=" grid grid-cols-2 mt-5">
            <div className="border-r pr-5">
              <div className="font-bold mb-5">Mô tả sản phẩm</div>
              <div className=" relative">
                <img
                  src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
                  alt=""
                />
                <div className=" absolute bottom-0 left-0 right-0 bg-[rgba(22,22,24,.12)] flex justify-center py-5">
                  <button className="bg-white rounded-full py-2 px-5 hover:opacity-80">
                    Đọc thêm
                  </button>
                </div>
              </div>
            </div>
            {/* phải */}
            <div className="pl-5">
              <div className="flex justify-between items-center mb-5">
                <div className="font-bold">Bài viết liên quan</div>
                <div className=" border border-primary-500  rounded-full py-1 px-2 cursor-pointer hover:bg-primary-300 text-primary-500">
                  Bài viết
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <img
                    src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/1500x1000_1_6688a9ceeb.png"
                    alt=""
                  />
                  <div className="mt-2">
                    Khám phá chương trình khách hàng thân thiết tại FPT Shop
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {/* item */}
                  <div className="flex gap-4">
                    <div className="w-40">
                      <img
                        className="w-full h-full rounded-lg object-cover"
                        src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/dien_thoai_quay_tiktok_dep_2024_1_016912944b.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <div className="w-fit bg-gray-100 rounded-full p-1 px-2 text-sm">
                        top điện thoại
                      </div>
                      <div className=" line-clamp-2">
                        Danh sách 5 điện thoại quay TikTok Danh sách 5 điện
                        thoại quay TikTok
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-40">
                      <img
                        className="w-full h-full rounded-lg object-cover"
                        src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/dien_thoai_quay_tiktok_dep_2024_1_016912944b.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <div className="w-fit bg-gray-100 rounded-full p-1 px-2 text-sm">
                        top điện thoại
                      </div>
                      <div className=" line-clamp-2">
                        Danh sách 5 điện thoại quay TikTok Danh sách 5 điện
                        thoại quay TikTok
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-40">
                      <img
                        className="w-full h-full rounded-lg object-cover"
                        src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/dien_thoai_quay_tiktok_dep_2024_1_016912944b.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <div className="w-fit bg-gray-100 rounded-full p-1 px-2 text-sm">
                        top điện thoại
                      </div>
                      <div className=" line-clamp-2">
                        Danh sách 5 điện thoại quay TikTok Danh sách 5 điện
                        thoại quay TikTok
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-40">
                      <img
                        className="w-full h-full rounded-lg object-cover"
                        src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/dien_thoai_quay_tiktok_dep_2024_1_016912944b.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <div className="w-fit bg-gray-100 rounded-full p-1 px-2 text-sm">
                        top điện thoại
                      </div>
                      <div className=" line-clamp-2">
                        Danh sách 5 điện thoại quay TikTok Danh sách 5 điện
                        thoại quay TikTok
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <div className="flex items-center justify-center gap-2 text-primary-400 cursor-pointer w-full mt-5">
                Xem tất cả <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
        {/* Sản phẩm đã xem */}
        <div className="border rounded-xl shadow-md p-5 mt-5">
          <div className="font-bold text-2xl">Sản phẩm đã xem</div>
          <div className="grid grid-cols-5 gap-4">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
          </div>
        </div>


        <div className="grid grid-cols-4 gap-5 my-16">
                <div className="flex flex-col items-center">
                  <div className="w-[60px] h-[60px] rounded-xl bg-white border shadow-sm">
                    <img className="w-full h-full object-cover rounded-xl" src="https://fptshop.com.vn/img/icons/policy3.svg?w=128&q=100" alt="" />
                  </div>
                  <div className="font-bold mt-4 pb-1">Thương hiệu đảm bảo</div>
                  <div>
                    Nhập khẩu, bảo hành chính hãng
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-[60px] h-[60px] rounded-xl bg-white border shadow-sm">
                    <img className="w-full h-full object-cover rounded-xl" src="https://fptshop.com.vn/img/icons/policy3.svg?w=128&q=100" alt="" />
                  </div>
                  <div className="font-bold mt-4 pb-1">Thương hiệu đảm bảo</div>
                  <div>
                    Nhập khẩu, bảo hành chính hãng
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-[60px] h-[60px] rounded-xl bg-white border shadow-sm">
                    <img className="w-full h-full object-cover rounded-xl" src="https://fptshop.com.vn/img/icons/policy3.svg?w=128&q=100" alt="" />
                  </div>
                  <div className="font-bold mt-4 pb-1">Thương hiệu đảm bảo</div>
                  <div>
                    Nhập khẩu, bảo hành chính hãng
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-[60px] h-[60px] rounded-xl bg-white border shadow-sm">
                    <img className="w-full h-full object-cover rounded-xl" src="https://fptshop.com.vn/img/icons/policy3.svg?w=128&q=100" alt="" />
                  </div>
                  <div className="font-bold mt-4 pb-1">Thương hiệu đảm bảo</div>
                  <div>
                    Nhập khẩu, bảo hành chính hãng
                  </div>
                </div>
        </div>

      </div>
    </div>
  );
}

export default Detail;
