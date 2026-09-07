import { useState, useEffect, useCallback } from "react";
import { Shell, Logo } from "./ui";
import Pacientes from "./Pacientes";
import Terapeutas from "./Terapeutas";
import { URGENCIAS } from "./content";

function Masthead({ view, go }) {
  const links =
    view === "terapeutas"
      ? [
          { l: "Cómo opera el marco", h: "#marco" },
          { l: "Términos", h: "#terminos" },
          { l: "El piloto", h: "#piloto" },
        ]
      : [
          { l: "Cómo funciona", h: "#como-funciona" },
          { l: "Precios", h: "#precios" },
          { l: "Urgencias", h: "#urgencias" },
        ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-sm">
      <Shell className="flex flex-wrap items-center justify-between gap-4 py-4">
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
        >
          <Logo />
        </a>

        <nav aria-label="Principal" className="flex flex-wrap items-center gap-6">
          <ul className="hidden flex-wrap gap-6 sm:flex">
            {links.map((n) => (
              <li key={n.h}>
                <a
                  href={n.h}
                  className="text-[14px] text-mist transition-colors hover:text-carbon"
                >
                  {n.l}
                </a>
              </li>
            ))}
          </ul>

          {view === "terapeutas" ? (
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                go("home");
              }}
              className="text-[14px] text-mist transition-colors hover:text-carbon"
            >
              ← Volver
            </a>
          ) : (
            <a
              href="#/terapeutas"
              onClick={(e) => {
                e.preventDefault();
                go("terapeutas");
              }}
              className="rounded-full border border-line-strong px-4 py-1.5 text-[14px] text-carbon transition-colors hover:border-accent hover:text-accent-deep"
            >
              Terapeutas
            </a>
          )}
        </nav>
      </Shell>
    </header>
  );
}

function Footer() {
  return (
    <footer id="urgencias">
      <Shell className="py-16 md:py-24">
        <Logo />

        <div className="mt-10 border-t border-line pt-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-mist">
            Si estás en una urgencia
          </p>
          <ul className="mt-6 max-w-3xl">
            {URGENCIAS.map(([tel, desc]) => (
              <li
                key={tel}
                className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-6 sm:items-baseline"
              >
                <span className="text-[17px] font-medium tracking-[-0.02em] text-carbon tabular-nums">
                  {tel}
                </span>
                <span className="text-[14.5px] leading-relaxed text-graphite">{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 max-w-[64ch] text-[13px] leading-relaxed text-mist">
          InFlex Terapéutico no presta servicios de salud mental: acerca personas
          a profesionales matriculados que trabajan de forma independiente. No es
          una línea de emergencia y no está disponible las 24 horas. El Centro de
          Asistencia al Suicida funciona con voluntarios y sus horarios varían.
        </p>
      </Shell>
    </footer>
  );
}

export default function App() {
  const [view, setView] = useState(
    typeof window !== "undefined" && window.location.hash === "#/terapeutas"
      ? "terapeutas"
      : "home"
  );

  useEffect(() => {
    const onHash = () =>
      setView(window.location.hash === "#/terapeutas" ? "terapeutas" : "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = useCallback((v) => {
    setView(v);
    window.location.hash = v === "terapeutas" ? "#/terapeutas" : "#/";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-dvh bg-paper">
      <Masthead view={view} go={go} />
      <main key={view}>
        {view === "home" ? <Pacientes go={go} /> : <Terapeutas />}
      </main>
      <Footer />
    </div>
  );
}
