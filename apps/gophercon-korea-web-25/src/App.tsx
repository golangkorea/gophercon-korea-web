import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ScrollToTop from "@/components/common/ScrollToTop";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/pages/About";
import CoC from "@/pages/CoC";
import FleaMarket from "@/pages/FleaMarket";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Organizers from "@/pages/Organizers";
import Schedule from "@/pages/program/Schedule";
import SessionDetail from "@/pages/program/SessionDetail";
import Sessions from "@/pages/program/Sessions";
import SponsorshipFAQ from "@/pages/sponsorship/SponsorshipFAQ";
import SponsorshipForm from "@/pages/sponsorship/SponsorshipForm";
import SponsorshipGuide from "@/pages/sponsorship/SponsorshipGuide";
import Venue from "@/pages/Venue";
import GlobalStyle from "@/styles/GlobalStyle";
import theme from "@/styles/theme";

const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

const ErrorPage = () => (
  <div style={{ padding: "40px", textAlign: "center", lineHeight: 1.7 }}>
    <h1>Oops! An unexpected error has occurred.</h1>
    <p>Sorry about that. Please try refreshing the page.</p>
    <a href='/' style={{ color: "#007d9c" }}>
      Go back to Home
    </a>
  </div>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/coc", element: <CoC /> },
      { path: "/program/sessions", element: <Sessions /> },
      { path: "/program/sessions/:sessionId", element: <SessionDetail /> },
      { path: "/program/schedule", element: <Schedule /> },
      { path: "/organizers", element: <Organizers /> },
      { path: "/sponsorship/guide", element: <SponsorshipGuide /> },
      { path: "/sponsorship/form", element: <SponsorshipForm /> },
      { path: "/sponsorship/faq", element: <SponsorshipFAQ /> },
      { path: "/flea-market", element: <FleaMarket /> },
      { path: "/venue", element: <Venue /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  );
}

const MainContent = styled.main`
  padding-top: 80px;
`;

export default App;
