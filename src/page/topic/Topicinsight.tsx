import MainLayout from "../../layouts/MainLayout"; 
import SidebarForm from "../form/SidebarForm"; 
import { Input } from "@/components/ui/input"; 
import { Search } from "lucide-react"; 
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

function Topicinsight() {
  const hotTopics = [
    { id: 1, title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "소프트웨어 엔지니어", verified: true },
    { id: 2, title: "개발자도 브랜딩을 해야할까? 답은 YES!", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "소프트웨어 엔지니어", verified: true },
    { id: 3, title: "MVP를 빠르게 검증하기 위한 UI 전략, Shadcn UI가 가져다 주는 기획자의 기민함", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "소프트웨어 엔지니어", verified: true },
    { id: 4, title: "사업을 한다는 것 vs 온라인 플랫폼을 만든다는 것", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "소프트웨어 엔지니어", verified: true },
    { id: 5, title: "", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "소프트웨어 엔지니어", verified: true },
    { id: 6, title: "", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "소프트웨어 엔지니어", verified: true },
    { id: 7, title: "", author: "개발자 9Diin", category1: "IT 및 기술 분야", category2: "소프트웨어 엔지니어", verified: true },
  ];

  return (
    <MainLayout>
      {/* 스크롤바 완전 숨김 */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* 전체 컨테이너: 화면 전체 꽉 채움, 검은 배경 유지 */}
      <div className="flex w-full min-h-screen bg-black text-white">
        {/* 왼쪽 사이드바 (고정) */}
        <aside className="hidden lg:block w-64 mr-8 flex-shrink-0 z-10 px-4">
          <SidebarForm />
        </aside>

        {/* 오른쪽 메인 영역: 배경 명시, 스크롤 가능 */}
        <main className="flex-1 px-4 lg:px-0 overflow-y-auto bg-black scrollbar-hide">
          {/* 헤더 문구 + 검색바 */}
          <div className="flex flex-col items-center text-center py-6"> 
            <h3 className="text-2xl font-semibold">지식과 인사이트를 모아,</h3>
            <h3 className="text-2xl font-semibold mb-6">토픽으로 깊이 있게 나누세요!</h3>
            
            <div className="flex items-center border border-gray-700 rounded-full p-1 w-full max-w-2xl mx-auto">
              <Search className="text-gray-500 ml-4 flex-shrink-0" size={20} />
              <Input 
                placeholder="관심 있는 클래스, 토픽, 주제를 검색하세요." 
                className="pl-4 h-12 flex-1 text-white bg-transparent border-none focus:ring-0" 
              />
              <button className="h-12 px-6 bg-gray-500/50 text-white rounded-full hover:bg-orange-700 transition-colors flex-shrink-0">
                검색
              </button>
            </div>
          </div>

          {/* HOT 토픽: 가로 스크롤, 배경 검정, 좌우 여백 */}
          <section className="mb-12 py-8">
            <h4 className="text-xl font-semibold mb-2 px-4 lg:px-0">HOT 토픽</h4>
            <p className="text-sm text-gray-400 mb-6 px-4 lg:px-0">
              지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를 얻어보세요.
            </p>

            {/* 독립된 가로 스크롤 컨테이너: 배경 검정, 좌우 패딩 */}
            <div className="overflow-x-auto scrollbar-hide bg-black">
              <div className="flex gap-6 pl-4 pr-4 pb-4 lg:pl-0 lg:pr-0">
                {hotTopics.map((topic) => (
                  <Card
                    key={topic.id}
                    className="bg-zinc-900 border-zinc-800 overflow-hidden cursor-pointer hover:border-orange-500 transition-colors min-w-[280px] max-w-[300px] flex-shrink-0"
                  >
                    <div className="relative aspect-[4/5] bg-zinc-800">
                      <Skeleton className="w-full h-full" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white font-semibold text-lg line-clamp-2">{topic.title}</h3>
                      </div>
                    </div>

                    <div className="p-4 flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        {topic.verified && (
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                        <span className="text-sm text-white font-medium">{topic.author}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{topic.category1}</span>
                        <Separator orientation="vertical" className="h-3" style={{ backgroundColor: "#6B7280", width: "1px" }} />
                        <span className="text-xs text-gray-400">{topic.category2}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* NEW 토픽 */}
          <section className="pb-20 px-4 lg:px-0">
            <h4 className="text-xl font-semibold mb-2">NEW 토픽</h4>
            <p className="text-sm text-gray-400 mb-6">
              새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의 토픽 작성을 응원합니다.
            </p>
          </section>
        </main>
      </div>
    </MainLayout>
  );
}

export default Topicinsight;