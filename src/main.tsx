import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

import App from "./App"; // 메인 페이지
import RootLayout from "./page/layouts/layout";
import SignInPage from "./page/auth/sign-in"; // 로그인 페이지
import SignUpPage from "./page/auth/sign-up"; // 회원가입 페이지

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index element={<App />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
