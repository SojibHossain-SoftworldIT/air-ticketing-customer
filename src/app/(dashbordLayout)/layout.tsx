/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navber/mainFile/Navber";
import DashbordSideber from "@/components/shared/siderber/Siderbar-dashbord/DashbordSideber";

interface AccountLayoutProps {
  children: React.ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
     <div className="bg-[#f0f2f5] ">
      <Navbar />
      <div className="max-w-7xl flex gap-10 mx-auto   px-2 md:px-4 lg:px-6 mt-5 ">
      <DashbordSideber/>
      <main className="flex-1">
        {children}
      </main>
      </div>
      <Footer />
    </div>
  );
}
