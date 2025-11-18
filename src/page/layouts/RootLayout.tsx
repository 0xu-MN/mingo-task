
import { Outlet } from "react-router";
import { AppHeader, AppFooter } from "@/components/common";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <AppHeader />

        <main className="flex-1">
          <Outlet />
        </main>

        <AppFooter />
      </div>
    </ThemeProvider>
  );
}