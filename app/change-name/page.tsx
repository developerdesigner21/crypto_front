import ChangeName from "@/components/ChangeName";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Name || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <ChangeName />
    </>
  );
};
export default Page;
