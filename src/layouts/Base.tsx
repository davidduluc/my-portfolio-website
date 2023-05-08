import { ReactNode } from "react";
import { Navbar } from "../partials/Navbar";
import { Footer } from "../partials/Footer";

interface BaseLayoutProps {
  children: ReactNode;
}

export function Base({ children }: BaseLayoutProps) {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex grow justify-center">
        <div className="text-gray-100">
          <Navbar />
          {children}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
