import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Template() {
  return (
    <div className="min-h-screen bg-navy text-slate-lighter flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
