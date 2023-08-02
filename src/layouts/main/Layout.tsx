import { FC } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import Footer from "@/components/_common/Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="container flex">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
