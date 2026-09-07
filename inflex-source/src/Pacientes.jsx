import { useState } from "react";
import { Shell, Button, Eyebrow, H2, Section } from "./ui";
import {
  CLAIMS,
  ETAPAS,
  HERRAMIENTAS,
  NO_PROMETEMOS,
  PRECIOS,
  FAQ,
  whatsappHref,
} from "./content";

function Hero() {
  return (
    <section className="border-b border-line">
      <Shell className="pb-24 pt-24 md:pb-32 md:pt-40">
        <div className="rise d1">
          <Eyebrow>Terapia online · Argentina</Eyebrow>
        </div>

        <h1 className="rise d2 mt-10 max-w-[15ch] text-[2.6rem] font-medium leading-[1.02] tracking-[-0.04em] text-carbon sm:text-6xl lg:text-7xl">
          Un proceso claro para una etapa confusa.
        </h1>

        <p className="rise d3 mt-8 max-w-[52ch] text-lg leading-relaxed text-graphite sm:text-xl">
          Te conectamos con psicólogos matriculados y te acompañamos paso a paso:
          qué esperar, en qué etapa estás y qué viene después. Un marco
          estructurado para sostener el tratamiento en el tramo donde la mayoría
          lo deja.
        </p>

        <div className="rise d4 mt-12">
          <Button primary href={whatsappHref()} target="_blank">
            Comenzar mi proceso
          </Button>
          <p className="mt-3 text-[13px] leading-snug text-mist">
            Es un mensaje. Sin formularios largos.
          </p>
        </div>

        <div className="rise d5 mt-14 flex flex-col gap-3 text-[14px] sm:mt-16">
          <a
            href="#como-funciona"
            className="group inline-flex w-fit items-center gap-2 text-graphite underline-offset-[6px] transition-colors hover:text-carbon hover:underline"
          >
            Antes de escribir, mirá cómo es el proceso
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <p className="text-mist">
            ¿Es una urgencia? Llamá al{" "}
            <a
              href="tel:135"
              className="font-medium text-carbon underline decoration-line-strong underline-offset-[5px] hover:decoration-carbon"
            >
              135
            </a>{" "}
            o al{" "}
            <a
              href="tel:911"
              className="font-medium text-carbon underline decoration-line-strong underline-offset-[5px] hover:decoration-carbon"
            >
              911
            </a>
            .
          </p>
        </div>
      </Shell>

      <div className="border-t border-line">
        <Shell>
          <ul className="grid grid-cols-1 md:grid-cols-3">
            {CLAIMS.map((c, i) => (
              <li
                key={c.t}
                className={
                  "py-8 pr-8 md:py-10 " +
                  (i > 0 ? "border-t border-line md:border-l md:border-t-0 md:pl-8" : "")
                }
              >
                <h2 className="text-[15px] font-medium tracking-[-0.01em] text-carbon">
                  {c.t}
                </h2>
                <p className="mt-2 max-w-[34ch] text-[14px] leading-relaxed text-mist">
                  {c.d}
                </p>
              </li>
            ))}
          </ul>
        </Shell>
      </div>
    </section>
  );
}

function Empatia() {
  return (
    <Section alt>
      <Eyebrow>El punto de partida</Eyebrow>
      <H2 className="mt-6">Si sentís que no avanzás, no estás fallando.</H2>
      <div className="mt-8 max-w-[58ch] space-y-5 text-[16.5px] leading-relaxed text-graphite">
        <p>
          Sostener un tratamiento es difícil. Vas cada semana, hablás de cosas que
          cuesta hablar, y después de un tiempo te encontrás pensando lo mismo que
          al principio. Aparece la idea de que estás igual. De que no sirve.
        </p>
        <p className="text-carbon">
          Esa sensación es tan común que tiene un lugar exacto en el recorrido. Y
          casi nadie te lo cuenta antes de que llegue.
        </p>
      </div>
    </Section>
  );
}

function ComoFunciona() {
  return (
    <Section id="como-funciona">
      <Eyebrow>Cómo funciona</Eyebrow>
      <H2 className="mt-6">Cuatro etapas. Vas a saber en cuál estás.</H2>
      <p className="mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-graphite">
        No inventamos un tratamiento. Armamos una estructura de acompañamiento
        alrededor del tratamiento: un mapa que te entregamos el primer día, para
        que ninguna etapa te agarre de sorpresa.
      </p>

      <ol className="mt-16 border-t border-line">
        {ETAPAS.map((e) => (
          <li
            key={e.n}
            className="grid grid-cols-1 gap-6 border-b border-line py-9 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-mist">
                {e.n}
              </p>
              <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] text-carbon">
                {e.t}
              </h3>
            </div>
            <div className="md:col-span-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-mist">
                Qué suele pasar
              </p>
              <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-graphite">
                {e.pasa}
              </p>
            </div>
            <div className="md:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent-deep">
                Qué hacemos
              </p>
              <p className="mt-2 max-w-[38ch] text-[15px] leading-relaxed text-graphite">
                {e.hacemos}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-[60ch] text-[14px] leading-relaxed text-mist">
        No podemos decirte cuánto va a tardar ni garantizarte que pase. Nadie
        puede. Lo que sí podemos es que no camines a ciegas.
      </p>
    </Section>
  );
}

function Herramientas() {
  return (
    <Section alt>
      <Eyebrow>Herramientas prácticas</Eyebrow>
      <H2 className="mt-6">Cuatro cosas concretas. Ninguna te va a costar esfuerzo.</H2>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2">
        {HERRAMIENTAS.map((h, i) => (
          <div
            key={h.t}
            className={
              "border-t border-line py-9 pr-10 " + (i % 2 === 1 ? "md:border-l md:pl-10" : "")
            }
          >
            <h3 className="text-[17px] font-medium tracking-[-0.015em] text-carbon">{h.t}</h3>
            <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-graphite">{h.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function NoPrometemos() {
  return (
    <Section>
      <Eyebrow>Las reglas de la casa</Eyebrow>
      <H2 className="mt-6">Lo que no te vamos a decir.</H2>
      <ul className="mt-12 border-t border-line">
        {NO_PROMETEMOS.map((n) => (
          <li key={n} className="flex gap-5 border-b border-line py-6">
            <span aria-hidden="true" className="mt-[0.85rem] h-px w-5 shrink-0 bg-accent" />
            <p className="max-w-[62ch] text-[16px] leading-relaxed text-graphite">{n}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Precios() {
  return (
    <Section id="precios" alt>
      <Eyebrow>Precios y tiempos</Eyebrow>
      <H2 className="mt-6">Sin que tengas que preguntarlo.</H2>
      <dl className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-3">
        {PRECIOS.map(([k, v], i) => (
          <div
            key={k}
            className={"border-b border-line py-8 pr-8 " + (i > 0 ? "sm:border-l sm:pl-8" : "")}
          >
            <dt className="text-[13px] uppercase tracking-[0.16em] text-mist">{k}</dt>
            <dd className="mt-3 text-3xl font-medium tracking-[-0.03em] text-carbon">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 max-w-[54ch] text-[14px] leading-relaxed text-mist">
        Sin costo de inscripción, sin permanencia mínima y sin plan que haya que
        contratar.
      </p>
    </Section>
  );
}

function Preguntas() {
  const [open, setOpen] = useState(0);
  return (
    <Section>
      <Eyebrow>Preguntas</Eyebrow>
      <H2 className="mt-6">Las que quizás no te animás a hacer.</H2>
      <div className="mt-12 border-t border-line">
        {FAQ.map((f, i) => (
          <div key={f.q} className="border-b border-line">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="flex w-full items-start justify-between gap-8 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span className="max-w-[46ch] text-[16.5px] font-medium tracking-[-0.012em] text-carbon">
                {f.q}
              </span>
              <span
                aria-hidden="true"
                className={
                  "mt-1 shrink-0 text-mist transition-transform duration-300 " +
                  (open === i ? "rotate-45" : "")
                }
              >
                +
              </span>
            </button>
            {open === i && (
              <p className="max-w-[62ch] pb-7 text-[15.5px] leading-relaxed text-graphite">
                {f.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Cierre() {
  return (
    <Section id="comenzar" alt>
      <H2>Empezar es un mensaje.</H2>
      <p className="mt-6 max-w-[48ch] text-[16.5px] leading-relaxed text-graphite">
        No hace falta que sepas qué decir. No hace falta que estés seguro. No hace
        falta que sea grave.
      </p>
      <div className="mt-10">
        <Button primary href={whatsappHref()} target="_blank">
          Comenzar mi proceso
        </Button>
        <p className="mt-3 text-[13px] text-mist">
          Te respondemos en menos de 24 horas hábiles.
        </p>
      </div>
    </Section>
  );
}

function FranjaTerapeutas({ go }) {
  return (
    <section className="border-b border-line">
      <Shell className="py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Para profesionales</Eyebrow>
            <p className="mt-5 max-w-[42ch] text-2xl font-medium leading-snug tracking-[-0.028em] text-carbon">
              ¿Sos psicólogo o psicóloga? No ofrecemos trabajo: ofrecemos pacientes.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              href="#/terapeutas"
              onClick={(e) => {
                e.preventDefault();
                go("terapeutas");
              }}
            >
              Ver la propuesta
            </Button>
          </div>
        </div>
      </Shell>
    </section>
  );
}

export default function Pacientes({ go }) {
  return (
    <>
      <Hero />
      <Empatia />
      <ComoFunciona />
      <Herramientas />
      <NoPrometemos />
      <Precios />
      <Preguntas />
      <Cierre />
      <FranjaTerapeutas go={go} />
    </>
  );
}
