// src/App.tsx (기존 App.tsx가 있으면 라우터 부분만 추가/교체)
import { createBrowserRouter, RouterProvider } from "react-router";
import { Outlet } from "react-router"; 

import RootLayout from "@/page/layouts/RootLayout";
import AuthLayout from "@/page/layouts/AuthLayout";

import Mainpage from "@/page/topic/Mainpage";
import Loginpage from "@/page/auth/Loginpage";
import Signuppage from "@/page/auth/Signuppage";
import Topicinsight from "@/page/topic/Topicinsight";

const router = createBrowserRouter([
  // 일반 페이지들 (RootLayout: Header + Footer만)
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Mainpage /> },
      { path: "topicinsight", element: <Topicinsight /> },
      { path: "classes", element: <div>클래스 페이지 (추후 구현)</div> },
      { path: "notes", element: <div>배움노트 페이지 (추후 구현)</div> },
      { path: "minglab", element: <div>밍랩 페이지 (추후 구현)</div> },
      // 다른 일반 페이지들 여기에 추가
    ],
  },

  // 인증 페이지들 (AuthLayout: Header + Orb + Footer)
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Loginpage /> },
      { path: "signup", element: <Signuppage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}