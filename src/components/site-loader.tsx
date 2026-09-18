import brandLogo from "../assets/brand/chaudhary-logo.png";

export function SiteLoader() {
  return (
    <div aria-hidden="true" className="site-loader">
      <img src={brandLogo} alt="" className="h-20 w-auto sm:h-24" />
      <div className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-foreground/10">
        <span className="site-loader-bar block h-full w-1/3 rounded-full bg-primary" />
      </div>
    </div>
  );
}
