import MainLayout from "../../layouts/MainLayout";

function Mainpage() {
  return (
    <MainLayout>
      <main className="flex grow items-center justify-center py-40 bg-black relative overflow-hidden">
        <div className="flex grow items-center justify-center">
          메인 페이지 컨텐츠
        </div>
      </main>
    </MainLayout>
  );
}

export default Mainpage;