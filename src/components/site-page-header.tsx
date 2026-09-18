import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const pageLinks = [
  { label: "Home", to: "/" as const },
  { label: "Our Fleet", to: "/fleet" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export function SitePageHeader({ title }: { title: string }) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:h-16 sm:px-8 lg:px-12">
        <Button
          type="button"
          variant="iconDark"
          size="icon"
          className="h-9 w-9 shrink-0 rounded-full"
          aria-label="Go back"
          onClick={() => router.history.back()}
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </Button>
        <h1 className="min-w-0 flex-1 truncate font-display text-base font-black uppercase sm:text-xl">{title}</h1>
        <nav className="hidden items-center gap-5 text-xs font-bold uppercase sm:flex" aria-label="Page navigation">
          {pageLinks.map((item) => (
            <Link key={item.to} to={item.to} className="whitespace-nowrap transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="grid grid-cols-3 border-t border-border sm:hidden" aria-label="Page navigation">
        {pageLinks.map((item) => (
          <Link key={item.to} to={item.to} className="flex h-10 items-center justify-center text-[10px] font-bold uppercase transition-colors hover:text-primary" activeProps={{ className: "bg-primary text-primary-foreground" }}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}