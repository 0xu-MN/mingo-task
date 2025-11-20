import { Outlet } from "react-router";
import { AppHeader, AppFooter } from "@/components/common";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

export default function RootLayout() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="w-full h-screen flex flex-col items-center">
                {/* 공통 헤더 */}
                <AppHeader />
                <main className="w-full max-w-[1328px] py-6">
                    <Outlet />
                </main>
                {/* 공통 푸터 */}
                <AppFooter />
                <Toaster position="top-center" richColors />
            </div>
        </ThemeProvider>
    );
}
