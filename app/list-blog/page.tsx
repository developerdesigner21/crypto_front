import Blogs from "@/components/Blogs";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Blog || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Blogs />
    </>
  );
};
export default Page;
