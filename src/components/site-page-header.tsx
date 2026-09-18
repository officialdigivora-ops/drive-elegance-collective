import { Link } from "@tanstack/react-router";

const pageLinks = [
  { label: "Home", to: "/" as const },
  { label: "Our Fleet", to: "/fleet" as const },
  { label: "Book Now", to: "/contact" as const },
];

function scrollTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
}

export function SitePageHeader({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
      <h1 className="sr-only">{title}</h1>
      <div className="mx-auto hidden max-w-7xl items-center justify-center gap-3 px-4 sm:flex sm:h-16 sm:px-8 lg:px-12">
        <nav className="flex items-center gap-6 text-xs font-bold uppercase" aria-label="Page navigation">
          {pageLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              preload="intent"
              resetScroll
              onClick={scrollTop}
              className="whitespace-nowrap transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="grid grid-cols-3 sm:hidden" aria-label="Page navigation">
        {pageLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            preload="intent"
            resetScroll
            onClick={scrollTop}
            className="flex h-10 items-center justify-center text-[10px] font-bold uppercase transition-colors hover:text-primary"
            activeProps={{ className: "bg-primary text-primary-foreground" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
