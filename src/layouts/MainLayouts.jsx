import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const MainLayouts = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        {/* NavBar */}
        <Navbar />
        <div className="min-h-[calc(100vh-390px)] py-12">
          {/* Dynamic Section */}
          <Outlet />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default MainLayouts;
