
import { Outlet } from "react-router";
import { AppHeader, AppFooter } from "@/components/common";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full h-screen flex flex-col">
        <AppHeader />

        <main className="w-full flex-1 flex justify-center mt-10 mb-10 py-20 ">
          <Outlet />
        </main>

        <AppFooter />
      </div>
    </ThemeProvider>
  );
}