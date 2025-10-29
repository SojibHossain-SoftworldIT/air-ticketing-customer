"use client";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navber/mainFile/Navber";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#f0f2f5]">
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-screen px-2 md:px-4 lg:px-6 mt-5 ">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
