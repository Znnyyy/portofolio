import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Template() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg-base text-text-primary flex flex-col relative font-sans selection:bg-white selection:text-black">
      {/* Subtle radial gradient for depth */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-hover via-bg-base to-bg-base opacity-40"></div>

      {/* Structured Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen border-x border-border max-w-[1440px] mx-auto w-full bg-bg-base/50">
        <Navbar />
        <main className="flex-1 w-full mx-auto px-6 md:px-12 pt-32 pb-16">
          <AnimatePresence mode="wait">
            <div key={location.pathname}>
              <Outlet />
            </div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
