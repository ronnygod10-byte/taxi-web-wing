import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Clock,
  Armchair,
  MapPin,
  MessageCircle,
  Phone,
  ArrowUpRight,
  Check,
} from "lucide-react";
import taxiCar from "@/assets/edi-taxi-car-day.png";

const WHATSAPP_NUMBER = "5511940428057";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Edi, gostaria de solicitar uma corrida",
)}`;
const PHONE_LINK = "tel:+5511940428057";
const PHONE_DISPLAY = "(11) 94042-8057";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edi Taxista — Táxi em Perdizes, São Paulo" },
      {
        name: "description",
        content:
          "Táxi em Perdizes, centro e centro expandido de São Paulo. Viagens rápidas ou longas, aeroporto, eventos e compromissos. Chame no WhatsApp.",
      },
      { property: "og:title", content: "Edi Taxista — Seu destino em boas mãos" },
      {
        property: "og:description",
        content:
          "Segurança, pontualidade e conforto. Atendo Perdizes, centro e centro expandido de São Paulo. Chame no WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return <MessageCircle className={className} aria-hidden />;
}

function Index() {
  const differentials = [
    { icon: ShieldCheck, title: "Segurança", text: "Sua viagem com total tranquilidade." },
    { icon: Clock, title: "Pontualidade", text: "Chego no horário, com compromisso." },
    { icon: Armchair, title: "Conforto", text: "Veículo limpo, climatizado e bem cuidado." },
  ];

  const services = [
    "Viagens rápidas ou longas",
    "Aeroporto",
    "Eventos",
    "Consultas e compromissos",
    "Corridas do dia a dia",
  ];

  return (
    <main className="min-h-screen bg-background px-3 py-3 text-foreground sm:px-6 sm:py-8">
      <article className="mx-auto w-full max-w-[720px] overflow-hidden border border-border bg-card shadow-2xl sm:rounded-2xl">
        <header className="relative overflow-hidden bg-secondary px-6 pt-8 pb-6 text-secondary-foreground sm:px-10 sm:pt-11">
          <div className="reveal flex items-center justify-between border-b border-secondary-foreground/15 pb-4">
            <span className="text-xs font-semibold uppercase text-primary">Táxi particular</span>
            <span className="text-xs text-secondary-foreground/60">Perdizes · SP</span>
          </div>

          <div className="reveal reveal-delay pt-8 text-center">
            <h1 className="font-display text-5xl font-bold sm:text-6xl">Edi Taxista</h1>
            <p className="mt-3 text-sm font-medium uppercase text-primary sm:text-base">
              Seu destino em boas mãos
            </p>
          </div>

          <figure className="reveal reveal-delay relative -mx-6 mt-7 overflow-hidden sm:-mx-10">
            <img
              src={taxiCar}
              alt="Táxi branco do Edi em uma rua do centro de São Paulo durante o dia"
              width={1280}
              height={960}
              className="aspect-[16/10] w-full object-cover object-center sm:aspect-[16/9]"
            />
            <figcaption className="absolute right-4 bottom-4 bg-black/70 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
              Perdizes e Centro Expandido
            </figcaption>
          </figure>

          <p className="mx-auto mt-6 max-w-lg text-center text-sm leading-6 text-secondary-foreground/70 sm:text-base">
            Corridas rápidas ou longas, aeroporto, eventos e compromissos com
            atendimento de qualidade e respeito.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-accent px-5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chamar no WhatsApp
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-secondary-foreground/20 bg-secondary-foreground/5 px-5 font-medium text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {PHONE_DISPLAY}
            </a>
          </div>
        </header>

        <div className="space-y-12 px-6 py-10 sm:px-10 sm:py-12">
          <section aria-labelledby="diferenciais">
            <p className="text-xs font-bold uppercase text-muted-foreground">01 · Diferenciais</p>
            <h2 id="diferenciais" className="mt-2 font-display text-3xl font-bold">
              Uma viagem tranquila, do início ao destino.
            </h2>
            <div className="mt-7 divide-y divide-border border-y border-border">
              {differentials.map((item) => (
                <div key={item.title} className="grid grid-cols-[44px_1fr] gap-4 py-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="servicos">
            <p className="text-xs font-bold uppercase text-muted-foreground">02 · Serviços</p>
            <h2 id="servicos" className="mt-2 font-display text-3xl font-bold">
              Para onde você precisa ir.
            </h2>
            <ul className="mt-7 grid gap-x-8 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3 border-b border-border py-4 text-sm font-medium">
                  <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {service}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-l-4 border-primary bg-muted px-6 py-7" aria-labelledby="area">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="text-xs font-bold uppercase text-muted-foreground">03 · Área atendida</p>
                <h2 id="area" className="mt-2 font-display text-2xl font-bold">
                  Perdizes, Centro e Centro Expandido
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Atendimento em toda a região central de São Paulo e arredores.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center" aria-label="Compromisso de atendimento">
            <p className="font-display text-2xl font-semibold leading-snug">
              “Confiança que te leva tranquilo ao seu destino.”
            </p>
            <p className="mt-3 text-xs font-bold uppercase text-primary">
              Qualidade e respeito, sempre
            </p>
          </section>

          <section className="border-t border-border pt-10 text-center" aria-labelledby="contato">
            <h2 id="contato" className="font-display text-3xl font-bold">
              Precisa de um táxi?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fale diretamente com o Edi e combine a sua corrida.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-secondary px-6 font-semibold text-secondary-foreground transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar corrida agora
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </section>
        </div>

        <footer className="flex flex-col items-center justify-between gap-2 border-t border-border bg-muted px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:px-10">
          <span>Edi Taxista · São Paulo, SP</span>
          <a href={PHONE_LINK} className="font-semibold text-foreground hover:text-primary">
            {PHONE_DISPLAY}
          </a>
        </footer>
      </article>
    </main>
  );
}
