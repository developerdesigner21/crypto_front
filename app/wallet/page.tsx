import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Wallet from "@/components/Wallet";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallet || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Header1 />
      <Wallet />
      <Footer1 />
    </>
  );
};
export default Page;
