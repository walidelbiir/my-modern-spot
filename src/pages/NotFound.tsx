import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <div aria-hidden className="absolute inset-0 grid-ink opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute select-none text-[40vw] font-extrabold leading-none text-accent/80"
      >
        !
      </div>

      <div className="relative text-center">
        <div className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Error 404
        </div>
        <h1 className="mt-3 text-6xl font-extrabold uppercase tracking-tight md:text-8xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          This route never shipped. Let’s get you back to something that did.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-14 items-center justify-center border-2 border-foreground bg-accent px-8 font-semibold uppercase tracking-[0.06em] text-accent-foreground transition-transform duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-card"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
