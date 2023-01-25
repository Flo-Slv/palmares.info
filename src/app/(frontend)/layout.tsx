import { ReactNode } from "react";

import "@/styles/globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen">{children}</body>
    </html>
  );
};

export default RootLayout;
