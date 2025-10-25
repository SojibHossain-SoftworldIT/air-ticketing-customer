"use client";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto min-h-screen px-2 md:px-4 lg:px-6 pt-20">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
