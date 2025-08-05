import Register from "@/components/Register";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Register />
    </>
  );
};
export default Page;
