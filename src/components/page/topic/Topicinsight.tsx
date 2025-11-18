// src/page/topic/Topicinsight.tsx

import SidebarForm from "../form/sidebarform";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function Topicinsight() {
  const hotTopics = [
    { id: 1, title: "AI 기술의 미래", views: 2300 },
    { id: 2, title: "React 최신 업데이트", views: 1500 },
    { id: 3, title: "프론트엔드 개발 트렌드", views: 1200 },
  ];

  return (
    <div className="flex w-full min-h-screen bg-black text-white">
      {/* 사이드바 */}
      <aside className="hidden lg:block w-64 mr-8 flex-shrink-0 z-10 px-4">
        <SidebarForm />
      </aside>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 px-4 lg:px-0 overflow-y-auto bg-black">
        {/* 검색 */}
        <div className="sticky top-0 z-30 pb-6 bg-black pt-4 flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-400" />
          <Input
            placeholder="원하는 키워드를 검색하세요, 분석 결과를 보여드릴게요!"
            className="border border-gray-600 bg-transparent p-2 w-full text-white"
          />
        </div>

        {/* HOT TOPICS */}
        <section className="mt-6 mb-10">
          <h2 className="text-lg font-semibold mb-3">🔥 HOT TOPICS</h2>
          <div className="space-y-3">
            {hotTopics.map((topic) => (
              <Card
                key={topic.id}
                className="p-4 bg-gray-800/50 border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <div className="flex justify-between">
                  <span>{topic.title}</span>
                  <span className="text-sm text-gray-400">{topic.views} views</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* LOADING EXAMPLE */}
        <section className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-16 w-full bg-gray-700" />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Topicinsight;
