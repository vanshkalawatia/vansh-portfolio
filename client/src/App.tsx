import { Suspense, lazy, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Router as WouterRouter, Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ConnectionProvider } from "@/contexts/ConnectionContext";
import { CustomCursor } from "@/components/CustomCursor";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { trackPageView } from "@/lib/analytics";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

const BlogPage = lazy(() => import("@/pages/BlogPage"));
const WorksPage = lazy(() => import("@/pages/WorksPage"));

function getBasePath() {
  if (typeof window === "undefined") return "";
  const pathname = window.location.pathname;
  if (pathname.startsWith("/vansh-portfolio")) {
    return "/vansh-portfolio";
  }
  return "";
}

function AnalyticsPageView() {
  const [location] = useLocation();

  useEffect(() => {
    trackPageView(location);
  }, [location]);

  return null;
}

function AppRoutes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="" component={Home} />
          <Route path="~/vansh-portfolio" component={Home} />
          <Route path="~/vansh-portfolio/" component={Home} />
          <Route path="/blog">
            <ErrorBoundary>
              <BlogPage />
            </ErrorBoundary>
          </Route>
          <Route path="~/vansh-portfolio/blog">
            <ErrorBoundary>
              <BlogPage />
            </ErrorBoundary>
          </Route>
          <Route path="/works">
            <ErrorBoundary>
              <WorksPage />
            </ErrorBoundary>
          </Route>
          <Route path="~/vansh-portfolio/works">
            <ErrorBoundary>
              <WorksPage />
            </ErrorBoundary>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
}

function AppContent() {
  return (
    <WouterRouter base={getBasePath()}>
      <AnalyticsPageView />
      <ScrollProgress />
      <Toaster />
      <CustomCursor />
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
      <BackToTop />
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConnectionProvider>
        <TooltipProvider>
          {/* Animations always run - explicit site-owner requirement. */}
          <MotionConfig>
            <AppContent />
          </MotionConfig>
        </TooltipProvider>
      </ConnectionProvider>
    </QueryClientProvider>
  );
}

export default App;

