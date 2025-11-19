import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";

import "./index.css";
import App from "./App";     
import RootLayout from "./page/layouts/RootLayout";
import AuthLayout from "./page/layouts/AuthLayout";  
import Loginpage from "./page/auth/Loginpage";
import Signuppage from "./page/auth/Signuppage";
import Topicinsightpage from "./page/topic/Topicinsight";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {/* 1. 일반 페이지들 – RootLayout */}
          <Route element={<RootLayout />}>
            <Route index element={<App />} />
            <Route path="/topicinsight" element={<Topicinsightpage/>} />
            <Route path="/" element={<Loginpage />} />
            <Route path="/" element={<Signuppage />} />
          </Route>

          {/* 2. 로그인/회원가입 전용 – AuthLayout*/}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<Signuppage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);