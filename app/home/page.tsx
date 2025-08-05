import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Market from "@/components/home/Market";
import MyWallet from "@/components/home/MyWallet";
import Rating from "@/components/home/Rating";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Header1 />
      <div className="pt-68 pb-80">
        <MyWallet />
        <Market />
        <Rating />
      </div>{" "}
      <Footer1 />
    </>
  );
};
export default Page;
