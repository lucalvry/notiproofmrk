import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="mb-4 text-6xl font-extrabold text-primary">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Oops! This page doesn't exist.</p>
          <p className="mb-8 text-sm text-muted-foreground">Try one of these popular pages instead:</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link to="/" className="text-sm text-primary font-medium hover:underline">Home</Link>
            <Link to="/product/" className="text-sm text-primary font-medium hover:underline">Product</Link>
            <Link to="/pricing/" className="text-sm text-primary font-medium hover:underline">Pricing</Link>
            <Link to="/resources/" className="text-sm text-primary font-medium hover:underline">Resources</Link>
            <Link to="/integrations/" className="text-sm text-primary font-medium hover:underline">Integrations</Link>
            <Link to="/resources/blog/" className="text-sm text-primary font-medium hover:underline">Blog</Link>
          </div>
          <Link to="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
