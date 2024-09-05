import { Outlet } from "react-router-dom";
import Header from "../components/share/Header";
import Footer from "../components/share/Footer";

const AppLayout = () => {
  return (
    <div className="bg-bg1 w-full">
      <Header />

      <div className="flex w-full justify-between ">
        <div className="flex w-full justify-between relative">
          <section className="w-full  ">
            <Outlet />
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AppLayout;
