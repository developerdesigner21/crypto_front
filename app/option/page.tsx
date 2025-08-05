import Option from "@/components/Option";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Option || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Option />
    </>
  );
};
export default Page;
