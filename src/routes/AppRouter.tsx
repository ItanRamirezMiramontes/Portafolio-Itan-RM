import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import PageSkeleton from "@/components/shared/PageSkeleton";

// Lazy load pages for code splitting
const Home = lazy(() => import("@/pages/Home"));
const Trajectory = lazy(() => import("@/pages/Trajectory"));
const Projects = lazy(() => import("@/pages/Projects"));
const Services = lazy(() => import("@/pages/Services"));

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trajectory" element={<Trajectory />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default AppRouter;
