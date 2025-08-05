import UserInfo from "@/components/UserInfo";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Info || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <UserInfo />
    </>
  );
};
export default Page;
