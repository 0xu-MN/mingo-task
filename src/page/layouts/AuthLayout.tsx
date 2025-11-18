// src/layouts/AuthLayout.tsx
import { Outlet } from "react-router";
import { AppHeader, AppFooter } from "@/components/common";
import Orb from "@/components/ui/Orb";

export default function AuthLayout({
  orbSize = "800px" // 기존 props 유지 (Loginpage 등에서 orbSize 전달 가능)
}: {
  orbSize?: string;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <AppHeader />

      <main className="relative flex-1 flex items-center justify-center py-40 overflow-hidden">
        {/* Orb 배경 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div style={{ width: orbSize, height: orbSize }} className="relative">
            <Orb hoverIntensity={0.3} rotateOnHover={false} hue={0} forceHoverState={false} />
          </div>
        </div>

        {/* 폼 영역 */}
        <div className="relative z-10 w-full max-w-md px-6">
          <Outlet />
        </div>
      </main>

      <AppFooter />
    </div>
  );
}