import React from "react";

import type { Metadata } from "next";
import WelcomePage from "./welcome/page";

export const metadata: Metadata = {
  title: "Welcome || Cointex crypto app",
  description: "Cointex crypto app",
};

export default function page() {
  return (
    <>
      {/* <PreviewPage /> */}
      <WelcomePage />
    </>
  );
}
