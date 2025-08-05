import CryptexRating from "@/components/CryptexRating";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryptex Rating || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <CryptexRating />
    </>
  );
};
export default Page;
