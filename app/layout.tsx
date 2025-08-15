"use client"; // Make sure this is a client-side component

import { useEffect, ReactNode } from "react";
import "../public/scss/main.scss";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";

// Typing the props for the component
interface RootLayoutProps {
  children: ReactNode; // `children` can be any valid React node (JSX, string, number, etc.)
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if needed
      });
    }
  }, []);
  useEffect(() => {
    // Close any open modal
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    const modalElements = document.querySelectorAll(".modal.show");
    modalElements.forEach((modal) => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    // Close any open offcanvas
    const offcanvasElements = document.querySelectorAll(".offcanvas.show");
    offcanvasElements.forEach((offcanvas) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
    const backdrops = document.querySelectorAll(".modal-backdrop");
    const body = document.body;
    body.removeAttribute("style");

    backdrops.forEach((elm) => {
      (elm as HTMLElement).style.display = "none";
    });
  }, [pathname]); // Runs every time the route changes

  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
