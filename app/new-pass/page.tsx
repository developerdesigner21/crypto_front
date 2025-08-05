import NewPass from "@/components/NewPass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Password || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <NewPass />
    </>
  );
};
export default Page;
