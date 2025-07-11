import React from "react";
import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
