import AppHeader from "../common/AppHeader";
import AppFooter from "../common/AppFooter";
import Orb from "../components/ui/Orb";

function AuthLayout({ 
  children, 
  orbSize = '800px' 
}: { 
  children: React.ReactNode;
  orbSize?: string;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex grow items-center justify-center py-40 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div style={{ width: orbSize, height: orbSize, position: 'relative' }}>
            <Orb
              hoverIntensity={0.3}
              rotateOnHover={false}
              hue={0}
              forceHoverState={false}
            />
          </div>
        </div>
        {children}
      </main>
      <AppFooter />
    </div>
  );
}

export default AuthLayout;