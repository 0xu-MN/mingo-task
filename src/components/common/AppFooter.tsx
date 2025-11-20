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
    <footer className="w-full flex items-center justify-center p-6 pb-20 bg-[#121212]">
        <div className="w-full max-w-[1328px] flex flex-col items-center justify-center gap-6w-full max-w-[1328px] py-10">
            <div className="w-full flex flex-col items-start justify-between gap-6 md:flex-row">
                {/* {separator 기준 위의 내용} */}
                <div className="w-full flex-col  items-start justify-between gap-4 md:w-fit md:flex-col">
                    <div className="flex flex-col ">
                        <h3 className="scroll-m-20 text-base md:text-2xl font-semibold tracking-tight">나의 학습 여정이,</h3> 
                        <h3 className="scroll-m-20 text-base md:text-2xl font-semibold tracking-tight">나만의 창작으로 이어지는 플랫폼</h3> 
                    </div>
                    <div className="flex items-center gap-2">
                         <Button variant="secondary" size={"icon"}>
                             <img src="/icons/youtube.svg" alt="@YOUTUBE" className="w-6" />
                        </Button>
                        <Button variant="secondary" size={"icon"}>
                            <img src="/icons/spotify.svg" alt="@SPOTIFY" className="w-5.5" />
                        </Button>
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
            {/* {separator 기준 아래의 내용} */}
            <div className="w-full flex flex-col items-start gap-20 md:flex-row md:justify-between">
                <div className="flex flex-col gap-4">
                    <h3 className="text-base font-semibold">고객센터</h3>
                    <div className="flex flex-col gap-13">
                        <div className="flex flex-col gap-1">
                            <p>평일 오전 9시 ~ 오후 6시</p>
                            <p>문의 : mingoteam@naver.com</p>
                        </div>
                        <p>© Mingo Team all rights reserved</p>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-4 text-left">
                    <h3 className="text-base font-semibold">사업자 정보</h3>
                    {businessInformation.map((item, index) => (
                        <p key={index} className="flex flex-col gap-1">{item.label} {item.value}</p>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
}

export {AppFooter};