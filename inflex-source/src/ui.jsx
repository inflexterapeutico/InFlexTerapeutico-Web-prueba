import { MARCA } from "./content";

export function Shell({ children, className = "" }) {
  return (
    <div className={"mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-14 " + className}>
      {children}
    </div>
  );
}

export function Logo({ size = "text-[17px]" }) {
  return (
    <span className={size + " tracking-[-0.03em] text-carbon"}>
      <span className="font-semibold">
        In<span className="text-accent-deep">Flex</span>
      </span>
      <span className="font-normal text-mist"> {MARCA.apellido}</span>
    </span>
  );
}

export function Button({ children, primary, href = "#", onClick, target }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper";
  const style = primary
    ? "bg-carbon text-paper hover:bg-accent-deep"
    : "border border-line-strong text-carbon hover:border-accent hover:text-accent-deep";
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={base + " " + style}
    >
      {children}
    </a>
  );
}

export function Eyebrow({ children, dot = true }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-mist">
      {dot && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />}
      {children}
    </p>
  );
}

export function H2({ children, className = "" }) {
  return (
    <h2
      className={
        "max-w-[20ch] text-3xl font-medium leading-[1.08] tracking-[-0.032em] text-carbon sm:text-4xl " +
        className
      }
    >
      {children}
    </h2>
  );
}

export function Section({ id, alt, children }) {
  return (
    <section id={id} className={"border-b border-line " + (alt ? "bg-shell" : "")}>
      <Shell className="py-24 md:py-32">{children}</Shell>
    </section>
  );
}
