import AppHeader from "../common/AppHeader";
import AppFooter from "../common/AppFooter";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}

export default MainLayout;