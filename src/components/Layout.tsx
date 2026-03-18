import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Breadcrumbs />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
