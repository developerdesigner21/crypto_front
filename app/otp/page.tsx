import Otp from "@/components/Otp";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otp || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Otp />
    </>
  );
};
export default Page;
