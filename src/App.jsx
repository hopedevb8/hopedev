import { Analytics } from "@vercel/analytics/react";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components";
import RedirectToHome from "./components/RedirectToHome";
import Loading from "./components/canvas/Loading";
import GlobalStyle from "./globalStyled";
import { Flower, TestHomePage } from "./pages";
const Home = lazy(
  async () =>
    await import("./pages").then((module) => ({
      default: module.Home,
    }))
);
const WorkPage = lazy(
  async () =>
    await import("./pages").then((module) => ({
      default: module.Work,
    }))
);
const ContactPage = lazy(
  async () =>
    await import("./pages").then((module) => ({
      default: module.Contact,
    }))
);
const FlowerPage = lazy(
  async () =>
    await import("./pages").then((module) => ({
      default: module.Flower,
    }))
);

const App = () => {
  return (
    <>
      <div className="bg-primary">
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="work" element={<WorkPage />} />
              <Route path="flower" element={<Flower />} />
              <Route path="demo-homepage" element={<TestHomePage />} />
              <Route path="*" element={<RedirectToHome />} />
            </Routes>
          </BrowserRouter>
          <GlobalStyle />
        </Suspense>
      </div>
      <Analytics />
    </>
  );
};

export default App;
