import AddressVarification from "@/components/varification/AddressVarification";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Address || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <AddressVarification />
    </>
  );
};
export default Page;
