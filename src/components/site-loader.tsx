import { useEffect, useState } from "react";
import brandLogo from "../assets/brand/chaudhary-logo.png";

export function SiteLoader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const fade = window.setTimeout(() => setHidden(true), 850);
    const remove = window.setTimeout(() => setGone(true), 1350);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${hidden ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <img src={brandLogo} alt="" className="h-20 w-auto animate-pulse sm:h-24" />
      <div className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-foreground/10">
        <span className="site-loader-bar block h-full w-1/3 rounded-full bg-primary" />
      </div>
    </div>
  );
}
