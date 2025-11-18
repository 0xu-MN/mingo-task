

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import './index.css'
import App from './App.tsx'
import Mainpage from './page/topic/Mainpage.tsx';
import Signuppage from './page/auth/Signuppage.tsx';
import Loginpage from './page/auth/Loginpage.tsx';
import Topicinsight from './page/topic/Topicinsight.tsx'
import RootLayout from './page/layouts/RootLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>          
          <Route index element={<App />} />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/topicinsight" element={<Topicinsight />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>                                
)