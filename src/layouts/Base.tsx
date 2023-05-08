import { ReactNode } from "react";
import { Navbar } from "../partials/Navbar";
import { Footer } from "../partials/Footer";

interface BaseLayoutProps {
  children: ReactNode;
}

export function Base({ children }: BaseLayoutProps) {
  return (
    <div className="text-gray-100 min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
