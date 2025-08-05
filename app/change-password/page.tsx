import ChangePass from "@/components/ChangePass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <ChangePass />
    </>
  );
};
export default Page;
