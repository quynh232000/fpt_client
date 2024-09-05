import { FaRegTrashCan } from "react-icons/fa6";

function Cart() {
  return (
    <div>
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
      </div>
      {/* content */}
      <div className="bg-bg1">
            <div className="w-content m-auto py-5 flex gap-5">
                {/* trai */}
                <div className="flex-1">
                    <div className="bg-white py-3 px-5 rounded-xl flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" className="border border-primary-500"  />
                            <div className=" ">
                                Chọn tất cả (2)
                            </div>
                        </div>
                        <div>
                            <FaRegTrashCan />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 my-3">
                        <div className="bg-white rounded-xl px-5 py-3 flex items-center w-full">
                            <div className="w-60 flex gap-2 items-center">
                                <input type="checkbox" />
                                <div className="flex gap-3 items-center">
                                    <div className="w-[68px] h-[68px] border p-2 rounded-lg">
                                        <img className="w-full h-full object-cover" src="https://cdn2.fptshop.com.vn/unsafe/128x0/filters:quality(100)/2023_11_6_638348876155786176_honor-90-lite-xanh-3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm line-clamp-2 text-gray-600">Honor 90 Lite (8+256GB) Xanh Biển Hồ (Cyan Lake)_CRT-NX1CYA</h4>
                                        <select name="" id="" className=" text-sm border py-1 px-3 rounded-sm bg-gray-100 mt-2">
                                            <option value="">--Xanh--</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-between">

                            </div>
                        </div>
                    </div>
                </div>
                {/* phai */}
                <div className="w-35">

                </div>
            </div>
      </div>
    </div>
  );
}

export default Cart;
