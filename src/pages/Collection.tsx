import { Carousel, Slider } from "@material-tailwind/react";
import { IoFilter } from "react-icons/io5";
import ProductItem from "../components/items/ProductItem";
import { FaChevronUp } from "react-icons/fa";

function Collection() {
  return (
    <div className="w-full">
      <div className="w-full bg-white">
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
      {/* path */}

      {/* title */}
      <div className="w-content m-auto flex ">
        <div className="flex flex-col  flex-1">
          <div className=" flex gap-1 text-sm py-4 ">
            <span className=" text-blue-500">Trang chủ</span>/
            <span className=" ">Laptop</span>
          </div>
          <h2 className="text-4xl font-bold ">Laptop</h2>
          <div className="flex gap-5 text-gray-700 mt-5 flex-1 items-end pb-3">
            <span className="hover:text-primary-500 cursor-pointer">
              Apple(Macbook)
            </span>
            <span className="hover:text-primary-500 cursor-pointer">Asus</span>
            <span className="hover:text-primary-500 cursor-pointer">
              Apple(Macbook)
            </span>
            <span className="hover:text-primary-500 cursor-pointer">Asus</span>
            <span className="hover:text-primary-500 cursor-pointer">
              Apple(Macbook)
            </span>
            <span className="hover:text-primary-500 cursor-pointer">Asus</span>
          </div>
        </div>
        <div>
          <img
            width={290}
            src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/Laptop_d170e53d32.png"
            alt=""
          />
        </div>
      </div>
      {/* brand */}
      <div className="w-content m-auto grid grid-cols-4 gap-4 py-3">
        <div className="flex border rounded-lg px-3 justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <div className="w-[48px] h-[48px] border rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/small/133_logo_apple_a96d38701f.png"
                alt=""
              />
            </div>
            <span className="font-bold">Apple</span>
          </div>
          <div className="w-[78px] h-[78px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/Apple_macbook_cate_thumb_cbe3eadf9e.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex border rounded-lg px-3 justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <div className="w-[48px] h-[48px] border rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/small/133_logo_apple_a96d38701f.png"
                alt=""
              />
            </div>
            <span className="font-bold">Apple</span>
          </div>
          <div className="w-[78px] h-[78px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/Apple_macbook_cate_thumb_cbe3eadf9e.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex border rounded-lg px-3 justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <div className="w-[48px] h-[48px] border rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/small/133_logo_apple_a96d38701f.png"
                alt=""
              />
            </div>
            <span className="font-bold">Apple</span>
          </div>
          <div className="w-[78px] h-[78px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/Apple_macbook_cate_thumb_cbe3eadf9e.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex border rounded-lg px-3 justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <div className="w-[48px] h-[48px] border rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/small/133_logo_apple_a96d38701f.png"
                alt=""
              />
            </div>
            <span className="font-bold">Apple</span>
          </div>
          <div className="w-[78px] h-[78px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/Apple_macbook_cate_thumb_cbe3eadf9e.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="w-content m-auto py-3">
        <Carousel className="rounded-xl">
          <img
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H1_1440x242_aeb25852de.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H1_1440x242_aeb25852de.png"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H1_1440x242_aeb25852de.png"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>

      {/* sp 1 */}
      <div>
        <div className="w-content m-auto py-4">
         
          <div className="bg-white rounded-lg">
            <div className="border-b flex">
              <div className="flex gap-2 py-4 px-8 cursor-pointer items-center border-b-2 border-primary-500 w-fit">
                <div className="w-[32px] h-[32px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/small/Ellipse_1_d953b32bfe.png"
                    alt=""
                  />
                </div>
                <div className="text-primary-500 font-bold">Khuyến mại hot</div>
              </div>

              <div className="flex gap-2 py-4 px-8 cursor-pointer items-center border-b-2 border-transparent hover:border-primary-500 w-fit">
                <div className="w-[32px] h-[32px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/small/Ellipse_1_d953b32bfe.png"
                    alt=""
                  />
                </div>
                <div className="text-gray-500 hover:text-primary-500 font-bold">
                  Khuyến mại hot
                </div>
              </div>
              <div className="flex gap-2 py-4 px-8 cursor-pointer items-center border-b-2 border-transparent hover:border-primary-500 w-fit">
                <div className="w-[32px] h-[32px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/small/Ellipse_1_d953b32bfe.png"
                    alt=""
                  />
                </div>
                <div className="text-gray-500 hover:text-primary-500 font-bold">
                  Khuyến mại hot
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 px-2 py-5">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-content m-auto grid grid-cols-4 gap-4 py-3">
        {/* item */}
        <div className="flex border rounded-lg px-3 justify-between items-center bg-white p-2">
          <div className="flex items-center gap-2">
            <div className="w-[60px] h-[60px]  rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://cdn2.fptshop.com.vn/unsafe/128x0/filters:quality(100)/Ai_cate_thumb_40b47381dc.png"
                alt=""
              />
            </div>
            <span className="">Apple</span>
          </div>
        </div>
        <div className="flex border rounded-lg px-3 justify-between items-center bg-white p-2">
          <div className="flex items-center gap-2">
            <div className="w-[60px] h-[60px]  rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://cdn2.fptshop.com.vn/unsafe/128x0/filters:quality(100)/Ai_cate_thumb_40b47381dc.png"
                alt=""
              />
            </div>
            <span className="">Apple</span>
          </div>
        </div>
        <div className="flex border rounded-lg px-3 justify-between items-center bg-white p-2">
          <div className="flex items-center gap-2">
            <div className="w-[60px] h-[60px]  rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://cdn2.fptshop.com.vn/unsafe/128x0/filters:quality(100)/Ai_cate_thumb_40b47381dc.png"
                alt=""
              />
            </div>
            <span className="">Apple</span>
          </div>
        </div>
        <div className="flex border rounded-lg px-3 justify-between items-center bg-white p-2">
          <div className="flex items-center gap-2">
            <div className="w-[60px] h-[60px]  rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://cdn2.fptshop.com.vn/unsafe/128x0/filters:quality(100)/Ai_cate_thumb_40b47381dc.png"
                alt=""
              />
            </div>
            <span className="">Apple</span>
          </div>
        </div>
       
      </div>
      {/* product collection */}
      <div className="w-content m-auto flex gap-4 mb-8">
            <div className="border shadow-sm rounded-lg w-25 bg-white">
                <div className="flex gap-2 items-center p-3 font-bold text-lg border-b">
                    <IoFilter />Bộ lọc tìm kiếm
                </div>
                <div className="border-b">
                    <div className="flex justify-between items-center px-4 py-3">
                        <span className="font-bold">Mức giá</span>
                        <FaChevronUp />
                    </div>
                    <div className="flex flex-col gap-2 text-gray-800">
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">Tất cả</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>
                    </div>
                    <div className="px-4   py-2">
                        <div className="font-bold">Hoặc nhập khoảng giá phù hợp với bạn:</div>
                        <div className=" grid grid-cols-2 gap-3 mt-3">
                            <input type="text" placeholder="7.900.000 đ" className="border rounded-lg px-2 py-1 text-end" />
                            <input type="text" placeholder="7.900.000 đ" className="border rounded-lg px-2 py-1 text-start" />
                        </div>
                        <div className="w-100 mt-5">
                             <Slider defaultValue={50} />
                        </div>
                    </div>

                </div>

                <div className="border-b">
                    <div className="flex justify-between items-center px-4 py-3">
                        <span className="font-bold">Công nghệ CPU</span>
                        <FaChevronUp />
                    </div>
                    <div className="flex flex-col gap-2 text-gray-800">
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">Tất cả</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>

                        <a href="#" className="text-[blue] text-sm px-4">Xem thêm</a>
                    </div>
                </div>
                <div className="border-b">
                    <div className="flex justify-between items-center px-4 py-3">
                        <span className="font-bold">Công nghệ CPU</span>
                        <FaChevronUp />
                    </div>
                    <div className="flex flex-col gap-2 text-gray-800">
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">Tất cả</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>

                        <a href="#" className="text-[blue] text-sm px-4">Xem thêm</a>
                    </div>
                </div>
                <div className="border-b">
                    <div className="flex justify-between items-center px-4 py-3">
                        <span className="font-bold">Công nghệ CPU</span>
                        <FaChevronUp />
                    </div>
                    <div className="flex flex-col gap-2 text-gray-800">
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">Tất cả</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>
                        <div className="flex gap-2 px-4 text-sm">
                            <input type="checkbox" />
                            <label htmlFor="">1-4 triệu</label>
                        </div>

                        <a href="#" className="text-[blue] text-sm px-4">Xem thêm</a>
                    </div>
                </div>

            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div className="text-sm">
                        Tìm thấy <strong>271</strong> kết quả
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm">Sắp xếp theo:</span>
                        <select className="border bg-white py-2 px-5 text-sm" name="" id="">
                            <option value="">--Nổi bật--</option>
                        </select>
                    </div>

                </div>
                <div className="grid grid-cols-4 gap-3">
                        <ProductItem is_compare={true}/>
                        <ProductItem is_compare={true}/>
                        <ProductItem is_compare={true}/>
                        <ProductItem is_compare={true}/>
                        <ProductItem is_compare={true}/>
                        <ProductItem is_compare={true}/>
                        <ProductItem is_compare={true}/>
                        <ProductItem is_compare={true}/>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Collection;
