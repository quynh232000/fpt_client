import { CiCirclePlus } from "react-icons/ci";

type props = {
  is_compare?: boolean;
};
function ProductItem({ is_compare = false }: props) {
  return (
    <div className="bg-white border border-transparent hover:border-gray-300 rounded-lg cursor-pointer">
      <div className="flex justify-center py-4">
        <div className="w-[180px] h-[180px]">
          <img
            className="w-full h-full object-cover hover:scale-110"
            src="https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/samsung_galaxy_s23_591dfc2c85.png"
            alt=""
          />
        </div>
      </div>
      <div className="px-2 py-3 flex flex-col gap-1">
        <div className="bg-gray-200 w-fit px-4 rounded-full text-[14px]">
          Trả giá góp
        </div>
        <div className="text-sm">
          <del className="text-gray-500">12.000.000 đ</del>
          <small className="text-primary-500">-12%</small>
        </div>
        <div className="font-bold">11.890.000 đ</div>
        <div className="text-sm text-green-500">1.200.000 đ</div>
        <h4 className=" line-clamp-2 my-2">Iphone 15 promax </h4>
        <div className="flex gap-1">
          <div className="w-[16px] h-[16px] border rounded-full bg-green-500"></div>
          <div className="w-[16px] h-[16px] border rounded-full bg-green-500"></div>
          <div className="w-[16px] h-[16px] border rounded-full bg-green-500"></div>
        </div>
        <div className="flex gap-1 py-2 border-b">
          <div className="border border-primary-500 w-fit px-2 rounded-lg text-[14px]">
            256 GB
          </div>
          <div className="border w-fit px-2 rounded-lg text-[14px]">256 GB</div>
          <div className="border w-fit px-2 rounded-lg text-[14px]">256 GB</div>
        </div>
        <div className="flex gap-1 py-2">
          <div className="w-[36px] h-[36px] border rounded-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Logo-1711608161110.jpeg?w=96&q=100"
              alt=""
            />
          </div>
          <div className="w-[36px] h-[36px] border rounded-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Logo-1711608161110.jpeg?w=96&q=100"
              alt=""
            />
          </div>
          <div className="w-[36px] h-[36px] border rounded-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Logo-1711608161110.jpeg?w=96&q=100"
              alt=""
            />
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Giảm đến 700.000đ khi thanh toán trả góp qua Kredivo
        </div>
        {is_compare && (
          <div className="flex items-center gap-2 text-[blue] text-sm">
            <CiCirclePlus /> So sánh
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
