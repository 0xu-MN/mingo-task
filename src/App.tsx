import { BadgeCheck, Search } from "lucide-react";
import { Input } from "./components/ui/input";
import { Card } from "./components/ui/card";
import { Skeleton } from "./components/ui/skeleton";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import SidebarForm from "./page/form/sidebarform";

function App() {
    const hotTopics = [
        { id: 1, title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "소프트웨어 엔지니어", verified: true },
        { id: 2, title: "개발자도 브랜딩을 해야할까? 답은 YES!", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "소프트웨어 엔지니어", verified: true },
        { id: 3, title: "MVP를 빠르게 검증하기 위한 UI 전략, Shadcn UI가 가져다 주는 기획자의 기민함", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "소프트웨어 엔지니어", verified: true },
        { id: 4, title: "사업을 한다는 것 vs 온라인 플랫폼을 만든다는 것", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "소프트웨어 엔지니어", verified: true },
        // { id: 5, title: "React 19의 새로운 기능들", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "프론트엔드", verified: true },
    ];

    return (
        <div className="w-full min-h-screen flex items-start gap-6">
            {/* <aside className="hidden lg:block w-64 mr-8 shrink-0 z-10">
                <SidebarForm />
            </aside> */}

            <aside className="w-60 min-w-60 h-screen">
                <SidebarForm />
            </aside>
            <div className="flex-1 flex flex-col gap-6">
                {/* 검색창 */}
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            {/* GIF 파일 */}
                            <img src="" alt="" />
                            <h3 className="text-2xl font-semibold">지식과 인사이트를 모아,</h3>
                        </div>
                        <h3 className="text-2xl font-semibold">토픽으로 깊이 있게 나누세요!</h3>
                    </div>
                    <div className="w-lg flex items-center px-4 py-2 border rounded-full">
                        <Search className="text-neutral-500" size={20} />
                        <Input placeholder="관심 있는 클래스, 토픽, 주제를 검색하세요." className="flex-1 bg-transparent! border-none focus-visible:ring-0" />
                        <Button variant={"secondary"} className="rounded-full -mr-2">
                            검색
                        </Button>
                    </div>
                </div>

                {/* HOT 토픽: 카드만 가로 스크롤 */}
                <section className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-semibold">HOT 토픽</h4>
                        <p className="text-sm text-neutral-400">지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를 얻어보세요.</p>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                        {hotTopics.map((topic) => (
                            <Card key={topic.id} className="p-0 border-0 bg-transparent  gap-4 ">
                                <div className="relative w-full h-70">
                                    <Skeleton className="w-full h-full" />
                                    <h3 className="absolute bottom-4 z-10 px-4 font-semibold text-lg line-clamp-2">{topic.title}</h3>
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                        {topic.verified && <BadgeCheck size={14} className="text-green-500" />}
                                        <span className="text-sm text-white font-medium">{topic.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-neutral-500">{topic.category1}</span>
                                        <Separator orientation="vertical" className="h-3" />
                                        <span className="text-xs text-neutral-500">{topic.category2}</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* NEW 토픽 */}
                <section className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-semibold">NEW 토픽</h4>
                        <p className="text-sm text-neutral-400">새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의 토픽 작성을 응원합니다.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
