import { Navbar } from "@/components/nav";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className='flex min-h-screen w-screen flex-col items-center justify-center'>
      <Navbar />
      <div className='color-white min-h-screen w-screen'>{children}</div>
    </main>
  );
};

export default Layout;
