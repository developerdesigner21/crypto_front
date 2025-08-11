import React from "react";

import type { Metadata } from "next";
import WelcomePage from "./start-boarding/page";
import MainPage from "@/components/mainPage/MainPage";

export const metadata: Metadata = {
  title: "Welcome || Cointex crypto app",
  description: "Cointex crypto app",
};

export default function page() {
  return (
    <>
      {/* <PreviewPage /> */}
      {/* <WelcomePage /> */}
      <MainPage />
    </>
  );
}
