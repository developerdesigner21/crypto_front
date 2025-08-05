import VarificationPersonal from "@/components/varification/VarificationPersonal";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Personal || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <VarificationPersonal />
    </>
  );
};
export default Page;
