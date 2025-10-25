/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

interface AccountLayoutProps {
  children: React.ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <h1>dashboard</h1>
    </div>
  );
}
