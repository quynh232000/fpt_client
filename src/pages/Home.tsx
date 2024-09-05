import { Carousel } from "@material-tailwind/react";
import CategoryItem from "../components/items/CategoryItem";
import ProductSaleItem from "../components/items/ProductSaleItem";
import ProductItem from "../components/items/ProductItem";

const Home = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* banner */}
      <div className="w-full relative ">
        <img
          src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_bg_3e9455a6ba.png"
          alt=""
          className="max-h-[560px] w-full"
        />
        <div className=" absolute top-0 left-0 right-0 flex flex-col items-center py-8">
          <div className="w-content">
            <Carousel className="rounded-xl">
              <div className="h-[280px]">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_beeb2af002.png"
                  alt="image 2"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-[280px]">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_beeb2af002.png"
                  alt="image 2"
                  className="h-full w-full object-contain"
                />
              </div>
            </Carousel>
          </div>
          {/* slider */}
          <div className="w-content">
            <Carousel className="rounded-xl">
              <div className="grid grid-cols-2 gap-3 ">
                <div className="h-[210px]">
                  <img
                    src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_34af40215b.png"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    alt=""
                  />
                </div>
                <div className="h-[210px]">
                  <img
                    src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_7364e9c23b.png"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-[210px]">
                  <img
                    src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_34af40215b.png"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    alt=""
                  />
                </div>
                <div className="h-[210px]">
                  <img
                    src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_7364e9c23b.png"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    alt=""
                  />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* danh muc */}
      <div>
        <div className="w-content m-auto grid grid-cols-5 gap-3">
          <CategoryItem />
          <CategoryItem type={2} />
          <CategoryItem />
          <CategoryItem type={2} />
          <CategoryItem />
        </div>
      </div>
      {/* gio vang gia soc */}
      <div>
        <div className="w-content m-auto">
          <div className="relative">
            <img
              className="w-full h-full rounded-t-lg"
              src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/Banner_3_8b463ecffe.png"
              alt=""
            />
            <div className=" absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-8px]">
              <img
                src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/Group_2085662063_1d88d569fe.png"
                alt=""
              />
            </div>
          </div>
          <div className="px-2 pb-2 bg-black rounded-b-lg">
            <div className="bg-white rounded-lg">
              <div className="border-b">
                <div className="w-fit py-3 px-5 bg-primary-300 rounded-tl-lg">
                  <div className=" text-center text-primary-500 font-bold">
                    Sắp diễn ra - 30/9/2024
                  </div>
                  <div className="flex gap-2 items-center mt-2">
                    <span>Bắt đầu trong:</span>
                    <div className="flex gap-1  items-center">
                      <span className="bg-primary-500 p-1 py-0 text-white rounded-md">
                        12
                      </span>
                      :
                      <span className="bg-primary-500 p-1 py-0 text-white rounded-md">
                        12
                      </span>
                      :
                      <span className="bg-primary-500 p-1 py-0 text-white rounded-md">
                        12
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 grid grid-cols-4 gap-3">
                <ProductSaleItem />
                <ProductSaleItem />
                <ProductSaleItem />
                <ProductSaleItem />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sp ban chay */}
      <div>
        <div className="w-content m-auto py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-[48px]">Sản phẩm bán chạy</div>
            <div>
              <img
                src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/Group_2085662019_0cfe96fe9b.png"
                alt=""
              />
            </div>
          </div>
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
      {/* slide 2 */}
      <div>
        <div className="w-content m-auto">
          <Carousel className="rounded-xl">
            {/* item */}
            <div className="grid grid-cols-3 gap-3 ">
              <div className="h-[210px]">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_34af40215b.png"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  alt=""
                />
              </div>
              <div className="h-[210px]">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_7364e9c23b.png"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  alt=""
                />
              </div>
              <div className="h-[210px]">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_7364e9c23b.png"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  alt=""
                />
              </div>
            </div>

            {/* item */}
            <div className="grid grid-cols-3 gap-3 ">
              <div className="h-[210px]">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_34af40215b.png"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  alt=""
                />
              </div>
              <div className="h-[210px]">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_7364e9c23b.png"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  alt=""
                />
              </div>
              <div className="h-[210px]">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_7364e9c23b.png"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  alt=""
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      {/* cate 2 */}
      <div>
        <div className="w-content m-auto grid grid-cols-5 gap-3">
          <CategoryItem />
          <CategoryItem type={2} />
          <CategoryItem />
          <CategoryItem type={2} />
          <CategoryItem />
        </div>
      </div>
      {/* chuan bi cho chuyen du lich */}
      <div>
        <div className="w-content m-auto">
          <div className="font-bold  text-[30px]">
            Chuẩn bị cho chuyến du lịch
          </div>
          <div className="py-4">
            <img
              className="w-full h-full rounded-lg "
              src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/Desktop_H1_1_4c95b8ae47.png"
              alt=""
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://cdn2.fptshop.com.vn/unsafe/828x0/filters:quality(100)/H3_405x175_3_3f4b81981a.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://cdn2.fptshop.com.vn/unsafe/828x0/filters:quality(100)/H3_405x175_3_3f4b81981a.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://cdn2.fptshop.com.vn/unsafe/828x0/filters:quality(100)/H3_405x175_3_3f4b81981a.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* san pham du lich */}
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
                <div className="text-primary-500 font-bold">
                  Đồng hành cùng chuyến đi
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
      {/* uu dai thanh toan */}
      <div>
        <div className="w-content m-auto">
          <div className="bg-white rounded-lg p-4">
            <div className="font-bold text-[30px]">Ưu đãi thanh toán</div>
            <div className="mt-3">
              <Carousel className="rounded-xl">
                {/* item */}
                <div className="grid grid-cols-3 gap-3 ">
                  <div className="">
                    <img
                      src="https://cdn2.fptshop.com.vn/unsafe/828x0/filters:quality(100)/H3_405x175_b7a8c3e78c.png"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <img
                      src="https://cdn2.fptshop.com.vn/unsafe/828x0/filters:quality(100)/H3_405x175_b7a8c3e78c.png"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <img
                      src="https://cdn2.fptshop.com.vn/unsafe/828x0/filters:quality(100)/H3_405x175_b7a8c3e78c.png"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 ">
                  <div className="">
                    <img
                      src="https://cdn2.fptshop.com.vn/unsafe/828x0/filters:quality(100)/H3_405x175_b7a8c3e78c.png"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <img
                      src="https://cdn2.fptshop.com.vn/unsafe/828x0/filters:quality(100)/H3_405x175_b7a8c3e78c.png"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <img
                      src="https://cdn2.fptshop.com.vn/unsafe/828x0/filters:quality(100)/H3_405x175_b7a8c3e78c.png"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                      alt=""
                    />
                  </div>
                </div>

               
              </Carousel>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 grid grid-cols-6 mt-8">
              {/* item */}
              <div className="flex flex-col gap-2 items-center border-r">
                <div>
                  <img className="w-[52px] h-[52px] hover:scale-110 object-cover" src="https://cdn2.fptshop.com.vn/svg/the_game_a74fbf07e8_32a77df1b0.svg?w=128&q=100" alt="" />
                </div>
                <div className="text-center font-bold text-gray-500">Thẻ game</div>
              </div>
              {/* item */}
              <div className="flex flex-col gap-2 items-center border-r">
                <div>
                  <img className="w-[52px] h-[52px] hover:scale-110 object-cover" src="https://cdn2.fptshop.com.vn/svg/the_game_a74fbf07e8_32a77df1b0.svg?w=128&q=100" alt="" />
                </div>
                <div className="text-center font-bold text-gray-500">Thẻ game</div>
              </div>
              {/* item */}
              <div className="flex flex-col gap-2 items-center border-r">
                <div>
                  <img className="w-[52px] h-[52px] hover:scale-110 object-cover" src="https://cdn2.fptshop.com.vn/svg/the_game_a74fbf07e8_32a77df1b0.svg?w=128&q=100" alt="" />
                </div>
                <div className="text-center font-bold text-gray-500">Thẻ game</div>
              </div>
              {/* item */}
              <div className="flex flex-col gap-2 items-center border-r">
                <div>
                  <img className="w-[52px] h-[52px] hover:scale-110 object-cover" src="https://cdn2.fptshop.com.vn/svg/the_game_a74fbf07e8_32a77df1b0.svg?w=128&q=100" alt="" />
                </div>
                <div className="text-center font-bold text-gray-500">Thẻ game</div>
              </div>
              {/* item */}
              <div className="flex flex-col gap-2 items-center border-r">
                <div>
                  <img className="w-[52px] h-[52px] hover:scale-110 object-cover" src="https://cdn2.fptshop.com.vn/svg/the_game_a74fbf07e8_32a77df1b0.svg?w=128&q=100" alt="" />
                </div>
                <div className="text-center font-bold text-gray-500">Thẻ game</div>
              </div>
              {/* item */}
              <div className="flex flex-col gap-2 items-center ">
                <div>
                  <img className="w-[52px] h-[52px] hover:scale-110 object-cover" src="https://cdn2.fptshop.com.vn/svg/the_game_a74fbf07e8_32a77df1b0.svg?w=128&q=100" alt="" />
                </div>
                <div className="text-center font-bold text-gray-500">Thẻ game</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
