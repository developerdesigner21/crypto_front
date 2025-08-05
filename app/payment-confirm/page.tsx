import PaymentConfirm from "@/components/PaymentConfirm";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Confirm || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <PaymentConfirm />
    </>
  );
};
export default Page;
