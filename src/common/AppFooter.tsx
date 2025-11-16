import React from 'react'; 
import { Separator } from "@/components/ui/separator"; 
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

function AppFooter() {
    const sheetItems = [
        { label: "이용약관", title: "서비스 이용약관", description: "이용약관내용" },
        { label: "개인정보처리방침", title: "개인정보처리방침", description: "개인정보처리방침내용" },
        { label: "클래스론칭문의", title: "클래스론칭문의", description: "클래스론칭문의" },
    ]

    const businessInformation = [
        {label:"대표이사 :",value:"박성재"},
        {label:"사업자 번호 :",value:"696-48-01248"},
        {label:"통신판매신고번호 :",value:"2025-서울서초-1014"},
        {label:"주소 :",value:"서울특별시 서초구 서초대로 15길 33"},
        {label:"대표번호 : ",value:"070-8080-4429"},
    ]

  return (
    <footer className="w-full flex flex-col items-center justify-between px-8 pb-24 bg-[#171717] text-white">
        <div className="w-full max-w-[1328px] py-10">
            <div className="flex justify-between pb-8">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-start">
                        <h3 className="text-xl font-bold">나의 학습 여정이,</h3> 
                        <h3 className="text-xl font-bold">나만의 창작으로 이어지는 플랫폼</h3> 
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" size="icon">YT</Button>
                        <Button variant="outline" size="icon">TH</Button> 
                    </div>
                </div>
                <div className="flex items-center gap-4 text-[15px]">
                    {sheetItems.map((item, index) => (
                        <React.Fragment key={item.label}>
                            <Sheet>
                                <SheetTrigger className="cursor-pointer hover:text-gray-400">
                                    {item.label}
                                </SheetTrigger>
                                <SheetContent 
                                    side="right"
                                    className="bg-[#171717] text-white border-zinc-800 w-full max-w-none p-0 h-screen top-0 right-0 flex flex-col z-[200]"
                                    style={{ marginTop: 0, height: '100vh', top: 0 }}
                                >
                                    <SheetHeader className="p-6 border-b border-zinc-800 flex-shrink-0">
                                        <SheetTitle className="text-xl font-bold text-white">{item.title}</SheetTitle>
                                    </SheetHeader>
                                    <div className="flex-1 p-6 overflow-y-auto">
                                        <SheetDescription className="text-base leading-relaxed text-white whitespace-pre-wrap">
                                            {item.description}
                                        </SheetDescription>
                                    </div>
                                </SheetContent>
                            </Sheet>
                            {index < sheetItems.length - 1 && (
                                <Separator orientation="vertical" className="h-4 mx-2" style={{ backgroundColor: '#6B7280', width: '1px' }} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <Separator className="w-full" style={{ backgroundColor: '#374151' }} />
            <div className="flex justify-between pt-8 text-sm">
                <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold mb-1">고객센터</h3>
                    <p className="text-gray-400">평일 오전 9시 ~ 오후 6시</p>
                    <p className="text-gray-400">문의: mingoteam@naver.com</p>
                </div>
                <div className="flex flex-col gap-2 text-left">
                    <h3 className="text-base font-bold mb-1">사업자 정보</h3>
                    {businessInformation.map((item, index) => (
                        <p key={index} className="text-gray-400">{item.label} {item.value}</p>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
}

export default AppFooter;