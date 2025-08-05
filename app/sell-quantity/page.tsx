import React from "react";
import Link from "next/link";
import Image from "next/image";
import SellQuantity from "@/components/SellQuantity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Quantity || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <SellQuantity />
    </>
  );
};
export default Page;
