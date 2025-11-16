import React from 'react';
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { label: "클래스", href: "/classes", icon: "" },
  { label: "배움노트", href: "/notes", icon: "" },
  { label: "토픽 인사이트", href: "/topicinsight", icon: "" },
  { label: "밍랩", href: "/minglab", icon: "" },
];

function AppHeader() {
  return (
    <header className="sticky top-0 z-[100] w-full flex justify-center items-center h-12 px-8 text-white bg-[#171717]">
      <div className="w-full max-w-[1328px] flex justify-between items-center">
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center gap-2 cursor-pointer no-underline">
            <p className="text-orange-500 text-2xl font-bold">Mingo</p>
          </a>
          <NavigationMenu className="hidden md:flex items-center">
            <NavigationMenuList>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.label}>
                  <NavigationMenuItem>
                    <a
                      href={item.href}
                      className="font-medium text-[15px] text-white p-2 cursor-pointer no-underline hover:text-orange-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  </NavigationMenuItem>
                  {(index === 1 || index === 2) && (
                    <Separator
                      orientation="vertical"
                      className="h-4 mx-2"
                      style={{ backgroundColor: "#6B7280", width: "1px" }}
                    />
                  )}
                </React.Fragment>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="text-white font-medium text-[15px] cursor-pointer no-underline hover:text-orange-400 transition-colors"
          >
            로그인
          </a>
          <Separator
            orientation="vertical"
            className="h-4 hidden md:block"
            style={{ backgroundColor: "#6B7280", width: "1px" }}
          />
          <a
            href="/about"
            className="hidden md:block text-white font-medium text-[15px] cursor-pointer no-underline hover:text-orange-400 transition-colors"
          >
            우리가 하는 일
          </a>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="w-6 h-6 text-white cursor-pointer" />
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-[#171717] text-white border-zinc-800 w-full max-w-none p-0 h-screen top-0 right-0 flex flex-col z-[200]"
              style={{ marginTop: 0, height: '100vh', top: 0 }}
            >
              <SheetHeader className="p-6 pb-4 flex-shrink-0">
                <div className="flex flex-col items-start gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-2xl">프로필</span>
                  </div>
                  <div>
                    <SheetTitle className="text-white text-left text-lg font-semibold">
                      안녕하세요, 환영합니다!
                    </SheetTitle>
                    <p className="text-sm text-gray-400 mt-1">
                      로그인하고 다양한 서비스를 즐겨보세요.
                    </p>
                  </div>
                </div>
              </SheetHeader>

              <Separator style={{ backgroundColor: "#374151" }} className="flex-shrink-0" />

              <div className="flex-1 px-6 py-6 overflow-y-auto">
                <div className="flex flex-col gap-5">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 text-white text-base font-medium cursor-pointer no-underline hover:text-orange-400 transition-colors"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 flex-shrink-0">
                <a
                  href="/login"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-full font-semibold text-base cursor-pointer no-underline block transition-colors"
                >
                  로그인
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;