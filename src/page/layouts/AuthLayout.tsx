import { Outlet } from "react-router";
import { AppHeader, AppFooter } from "@/components/common";
import Orb from "@/components/Orb";

export default function AuthLayout() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black overflow-hidden">
      <AppHeader />

      
      <main className="relative w-full flex-1 flex justify-center items-center mt-10 mb-10 py-20">
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[900px] h-[900px]">
            <Orb hoverIntensity={0.3} rotateOnHover={false} hue={240} />
          </div>
        </div>

        <div className="relative w-full max-w-md z-10">
          <Outlet />
        </div>
      </main>

      <AppFooter />
    </div>
  );
}