import { Outlet } from "react-router";
import { AppHeader, AppFooter } from "@/components/common";
import Orb from "@/components/Orb";

export default function AuthLayout() {
  return (
    <div className="fw-full h-screen flex flex-col">
      <AppHeader />

      
      <div className="w-full flex-1 flex justify-center mt-12 ">

          <main className="absolute w-full max-w-sm z-10 flex items-center justify-center top-24 translate-x-4 translate-y-40">
            <Outlet />
          </main>
          <div className="ablsolute top-16 left-16 translate-x-4 -translate-y-4 w-[900px] h-[900px] z-[1] items-center justify-center ">
            <Orb hoverIntensity={0.3} rotateOnHover={false} hue={240} />
          </div>

      </div>

      <AppFooter />
    </div>
  );
}