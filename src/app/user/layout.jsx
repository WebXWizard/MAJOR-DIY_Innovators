"use client";

import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/context/appContext";
import { ProductProvider } from "@/context/ProductContext";
import UserNavbar from "./navbar";

export default function RootLayout({ children }) {
  return (
    <ProductProvider>
      <AppProvider>
        <UserNavbar />
        <Toaster />
        {children}
        {/* <Footer /> */}
      </AppProvider>
    </ProductProvider>
  );
}
