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
} from "@/components/ui/sheet"

const menuItems = [
    { label: "클래스", href: "/classes" },
    { label: "배움노트", href: "/notes" },
    { label: "토픽 인사이트", href: "/topicinsight" },
    { label: "밍랩", href: "/minglab" },
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
                                    <a href={item.href} className="font-medium text-[15px] text-white p-2 cursor-pointer no-underline">
                                        {item.label}
                                    </a>
                                </NavigationMenuItem>
                                {(index === 1 || index === 2) && (
                                    <Separator orientation="vertical" className="h-4 mx-2" style={{ backgroundColor: '#6B7280', width: '1px' }} />
                                )}
                            </React.Fragment>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>   
            </div>
            <div className="flex items-center gap-4"> 
                <a href="/login" className="text-white font-medium text-[15px] cursor-pointer no-underline">로그인</a>
                <Separator orientation="vertical" className="h-4 hidden md:block" style={{ backgroundColor: '#6B7280', width: '1px' }} />
                <a href="/about" className="hidden md:block text-white font-medium text-[15px] cursor-pointer no-underline">우리가 하는 일</a>
                <Sheet>
                  <SheetTrigger className="md:hidden">
                    <Menu className="w-6 h-6 text-white cursor-pointer" />
                  </SheetTrigger>
                  <SheetContent className="bg-[#171717] text-white border-zinc-800">
                    <SheetHeader>
                      <SheetTitle className="text-white text-left mb-4">안녕하세요, 환영합니다!</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-6 mt-6">
                      {menuItems.map((item) => (
                        <a key={item.label} href={item.href} className="text-white text-lg font-medium cursor-pointer no-underline">{item.label}</a>
                      ))}
                      <Separator style={{ backgroundColor: '#374151' }} />
                      <a href="/about" className="text-white text-lg font-medium cursor-pointer no-underline">우리가 하는 일</a>
                      <a href="/login" className="w-full py-3 bg-blue-600 text-white text-center rounded-lg font-semibold cursor-pointer no-underline block">로그인</a>
                    </div>
                  </SheetContent>
                </Sheet>
            </div>
        </div>
    </header>
  );
}

export default AppHeader;