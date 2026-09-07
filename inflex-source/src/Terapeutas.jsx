import { Shell, Button, Eyebrow, H2, Section } from "./ui";
import { NO_SOMOS, FRONTERA, RECIBIS, TERMINOS, whatsappHref } from "./content";

function Hero() {
  return (
    <section className="border-b border-line">
      <Shell className="pb-24 pt-24 md:pb-32 md:pt-36">
        <div className="rise d1">
          <Eyebrow>Programa piloto · Primera cohorte · Argentina</Eyebrow>
        </div>
        <h1 className="rise d2 mt-10 max-w-[16ch] text-[2.4rem] font-medium leading-[1.03] tracking-[-0.04em] text-carbon sm:text-6xl">
          No ofrecemos trabajo. Ofrecemos pacientes.
        </h1>
        <p className="rise d3 mt-8 max-w-[54ch] text-lg leading-relaxed text-graphite sm:text-xl">
          Buscamos diez psicólogos para probar un marco estructurado de
          acompañamiento diseñado para reducir el abandono en tratamiento. Vos
          fijás tus honorarios, atendés como considerás y el paciente es tuyo.
        </p>
        <div className="rise d4 mt-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
          <div>
            <Button primary href={whatsappHref()} target="_blank">
              Aplicar al programa piloto
            </Button>
            <p className="mt-3 text-[13px] text-mist">
              Requiere matrícula vigente y verificable.
            </p>
          </div>
          <div>
            <Button href={whatsappHref()} target="_blank">
              Sumarme a la lista de espera
            </Button>
            <p className="mt-3 text-[13px] text-mist">Si todavía no te decidís.</p>
          </div>
        </div>
        <p className="rise d5 mt-14 max-w-[54ch] border-t border-line pt-6 text-[14px] leading-relaxed text-mist">
          Somos nuevos. Hoy no tenemos volumen de pacientes. Por eso los primeros
          meses no cobramos cuota.
        </p>
      </Shell>
    </section>
  );
}

function Problema() {
  return (
    <Section alt>
      <Eyebrow>El problema</Eyebrow>
      <H2 className="mt-6">El paciente que se va en la semana cuatro.</H2>
      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="max-w-[52ch] space-y-5 text-[16px] leading-relaxed text-graphite">
            <p>
              Lo conocés. Llega, arranca bien, hay un alivio inicial. A las tres o
              cuatro semanas ese alivio se va y todavía no hay resultados
              visibles. Empieza a faltar. Después avisa que “por ahora lo deja”.
            </p>
            <p>
              No es un problema de tu práctica: es sistémico y está medido. Y la
              evidencia sobre cómo cambia la gente muestra por qué — el progreso
              se acumula durante semanas sin producir señal subjetiva, y recién
              después se vuelve perceptible.
            </p>
            <p className="text-carbon">
              El paciente abandona en el tramo exacto en el que el trabajo se está
              acumulando.
            </p>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="border-t border-line-strong pt-8">
            <p className="text-6xl font-medium tracking-[-0.05em] text-carbon">19,7%</p>
            <p className="mt-4 max-w-[26ch] text-[14px] leading-relaxed text-mist">
              de abandono en psicoterapia de adultos. Meta-análisis de 669
              estudios y 83.834 pacientes.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function NoSomos() {
  return (
    <Section>
      <Eyebrow>Antes de seguir</Eyebrow>
      <H2 className="mt-6">Cuatro cosas que no vas a tener que hacer.</H2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
        {NO_SOMOS.map((n, i) => (
          <div
            key={n.t}
            className={
              "border-t border-line py-8 pr-10 " + (i % 2 === 1 ? "md:border-l md:pl-10" : "")
            }
          >
            <h3 className="max-w-[34ch] text-[17px] font-medium tracking-[-0.015em] text-carbon">
              {n.t}
            </h3>
            <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-graphite">{n.d}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-[58ch] text-[14px] leading-relaxed text-mist">
        Lo escribimos primero a propósito: son las cuatro objeciones más
        frecuentes a las plataformas de terapia online, y las cuatro son
        razonables.
      </p>
    </Section>
  );
}

function Marco() {
  return (
    <Section id="marco" alt>
      <Eyebrow>La solución</Eyebrow>
      <H2 className="mt-6">
        Un marco que trabaja alrededor del tratamiento, nunca adentro.
      </H2>
      <div className="mt-14 grid grid-cols-1 border-t border-line md:grid-cols-2">
        <div className="border-b border-line py-9 pr-10 md:border-b-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-deep">
            Lo nuestro
          </p>
          <ul className="mt-6 space-y-3.5">
            {FRONTERA.nuestro.map((x) => (
              <li key={x} className="flex gap-4 text-[15.5px] leading-relaxed text-graphite">
                <span aria-hidden="true" className="mt-[0.7rem] h-px w-4 shrink-0 bg-accent" />
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-9 md:border-l md:border-line md:pl-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-carbon">
            Lo tuyo
          </p>
          <ul className="mt-6 space-y-3.5">
            {FRONTERA.tuyo.map((x) => (
              <li key={x} className="flex gap-4 text-[15.5px] leading-relaxed text-graphite">
                <span
                  aria-hidden="true"
                  className="mt-[0.7rem] h-px w-4 shrink-0 bg-line-strong"
                />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-10 max-w-[60ch] text-[14px] leading-relaxed text-mist">
        Preparamos, explicamos y acompañamos por fuera. Vos hacés clínica. El
        límite está escrito en el acuerdo y no se cruza en ninguna dirección.
      </p>
    </Section>
  );
}

function Recibis() {
  return (
    <Section>
      <Eyebrow>Qué recibís</Eyebrow>
      <H2 className="mt-6">Lo que se lleva la primera cohorte.</H2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {RECIBIS.map((r, i) => (
          <div
            key={r.t}
            className={"border-t border-line py-8 pr-8 " + (i % 3 !== 0 ? "md:border-l md:pl-8" : "")}
          >
            <h3 className="max-w-[24ch] text-[16px] font-medium tracking-[-0.012em] text-carbon">
              {r.t}
            </h3>
            <p className="mt-3 max-w-[34ch] text-[14.5px] leading-relaxed text-graphite">
              {r.d}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Terminos() {
  return (
    <Section id="terminos" alt>
      <Eyebrow>Los términos, por adelantado</Eyebrow>
      <H2 className="mt-6">La letra chica, en grande.</H2>
      <dl className="mt-12 border-t border-line">
        {TERMINOS.map(([k, v]) => (
          <div
            key={k}
            className="grid grid-cols-1 gap-2 border-b border-line py-5 md:grid-cols-12 md:gap-8"
          >
            <dt className="text-[15px] font-medium text-carbon md:col-span-4">{k}</dt>
            <dd className="max-w-[52ch] text-[15px] leading-relaxed text-graphite md:col-span-8">
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Piloto() {
  return (
    <Section id="piloto">
      <Eyebrow>El programa piloto</Eyebrow>
      <H2 className="mt-6">Diez profesionales. Seis meses.</H2>

      <div className="mt-12 grid grid-cols-1 gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-mist">
            Qué pedimos
          </h3>
          <p className="mt-4 max-w-[42ch] text-[15.5px] leading-relaxed text-graphite">
            Tomar pacientes derivados durante seis meses. Ofrecer los componentes
            del marco a quienes te parezca clínicamente adecuado — el criterio es
            tuyo. Un encuentro mensual de una hora. Y decirnos con franqueza qué de
            esto no sirve.
          </p>
        </div>
        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-deep">
            Qué damos
          </h3>
          <p className="mt-4 max-w-[42ch] text-[15.5px] leading-relaxed text-graphite">
            Derivación sin costo, los materiales del marco listos para usar, el
            espacio mensual y los datos agregados del piloto. Podés dar de baja
            cualquier componente que te resulte inadecuado, sin discusión.
          </p>
        </div>
      </div>

      <p className="mt-12 max-w-[60ch] border-t border-line pt-8 text-[14px] leading-relaxed text-mist">
        <span className="text-graphite">Por qué diez y no cien:</span> porque a más
        de diez no podemos sostener el vínculo con seriedad, y una red que crece
        más rápido de lo que puede acompañar termina abandonando gente — que es
        exactamente lo que estamos tratando de evitar.
      </p>

      <div className="mt-12">
        <Button primary href={whatsappHref()} target="_blank">
          Aplicar al programa piloto
        </Button>
        <p className="mt-3 text-[13px] text-mist">
          Formulario de cinco minutos, después una conversación de veinte.
        </p>
      </div>
    </Section>
  );
}

function NotaMetodo() {
  return (
    <Section alt>
      <div className="max-w-[62ch]">
        <Eyebrow>Nota metodológica</Eyebrow>
        <p className="mt-6 text-[16.5px] leading-relaxed text-graphite">
          Los estudios en los que se apoya cada componente respaldan ese
          componente por separado.{" "}
          <span className="text-carbon">
            El marco completo no está validado: eso es exactamente lo que este
            piloto busca empezar a medir.
          </span>{" "}
          No afirmamos que reduzca el abandono. Afirmamos que está diseñado para
          eso y que vamos a medirlo con datos propios, que se comparten con la
          cohorte.
        </p>
      </div>
    </Section>
  );
}

export default function Terapeutas() {
  return (
    <>
      <Hero />
      <Problema />
      <NoSomos />
      <Marco />
      <Recibis />
      <Terminos />
      <Piloto />
      <NotaMetodo />
    </>
  );
}
