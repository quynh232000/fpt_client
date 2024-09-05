import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="w-content m-auto py-8 border-b flex justify-between items-center">
        <div>
          <div className="font-bold text-[18px] mb-3">
            Hệ thống FPT Shop trên toàn quốc
          </div>
          <div>
            Bao gồm Cửa hàng FPT Shop, Trung tâm Laptop, F.Studio, S.Studio,
            Garmin Brand Store
          </div>
        </div>
        <div className="bg-primary-500 py-2 px-5 rounded-full text-center w-fit cursor-pointer">
          Xem danh sách cửa hàng
        </div>
      </div>
      <div className="w-content m-auto grid grid-cols-4 gap-4 py-8">
        <div>
          <div className="font-bold uppercase">Kết nối với fptshop</div>
          <div className="flex gap-3 py-3">
            <img
              width={28}
              height={28}
              className=" object-cover"
              src="https://cdn2.fptshop.com.vn/svg/facebook_icon_a64b579fe2.svg?w=64&q=100https://cdn2.fptshop.com.vn/svg/facebook_icon_a64b579fe2.svg?w=64&q=100"
              alt=""
            />
            <img
              width={28}
              height={28}
              className=" object-cover"
              src="https://cdn2.fptshop.com.vn/svg/youtube_icon_b492d61ba5.svg?w=64&q=100"
              alt=""
            />
            <img
              width={28}
              height={28}
              className=" object-cover"
              src="https://cdn2.fptshop.com.vn/svg/zalo_icon_8cbef61812.svg?w=64&q=100"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
          </div>
        </div>
        <div>
          <div className="font-bold uppercase">Về chúng tôi</div>

          <div className="flex flex-col gap-3 mt-2">
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
          </div>
        </div>
        <div>
          <div className="font-bold uppercase">Chính sách</div>

          <div className="flex flex-col gap-3 mt-2">
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
          </div>
        </div>
        <div>
          <div className="font-bold uppercase">Hỗ trợ thanh toán</div>

          <div className="flex flex-col gap-3 mt-2">
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
            <div>Tổng đài miễn phí</div>
            <div>Tư vấn mua hàng</div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="w-content m-auto text-center text-gray-500 text-sm py-5">
          © 2007 - 2024 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT • Địa chỉ: 261 -
          263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh • GPĐKKD số 0311609355 do Sở
          KHĐT TP.HCM cấp ngày 08/03/2012.GP số 47/GP-TTĐT do sở TTTT TP HCM cấp
          ngày 02/07/2018Điện thoại: (028) 7302 3456 Email: fptshop@fpt.com Chịu
          trách nhiệm nội dung: Nguyễn Trịnh Nhật Linh.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
