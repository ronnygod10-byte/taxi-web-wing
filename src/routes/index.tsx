import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Clock,
  Armchair,
  MapPin,
  Plane,
  CalendarDays,
  Stethoscope,
  Repeat,
  Route as RouteIcon,
  Star,
  MessageCircle,
  Phone,
} from "lucide-react";
import taxiCar from "@/assets/taxi-car.jpg";

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
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-14 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden />
                Táxi · Perdizes, São Paulo
              </p>
              <h1 className="mt-5 font-display text-5xl leading-[0.95] font-black tracking-tight uppercase sm:text-6xl">
                Edi <span className="text-primary">Taxista</span>
              </h1>
              <p className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">
                Seu destino em boas mãos!
              </p>
              <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
                Corridas rápidas ou longas, aeroporto, eventos, consultas e o dia a
                dia — com atendimento de qualidade e respeito, sempre.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-display text-lg font-bold text-primary-foreground uppercase tracking-wide shadow-[0_10px_30px_-10px_var(--color-primary)] transition-transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  Chame no WhatsApp
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 px-7 py-4 font-display text-lg font-bold text-primary uppercase tracking-wide transition-colors hover:bg-primary/10"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Fácil, rápido e seguro!
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-2xl" aria-hidden />
              <img
                src={taxiCar}
                alt="Táxi do Edi — sedã branco com sinal luminoso de táxi"
                width={1280}
                height={960}
                className="relative w-full rounded-3xl border border-primary/25 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="border-y border-border bg-card/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Segurança",
              text: "Sua viagem com total tranquilidade.",
            },
            {
              icon: Clock,
              title: "Pontualidade",
              text: "Chego no horário, com compromisso.",
            },
            {
              icon: Armchair,
              title: "Conforto",
              text: "Veículo limpo, climatizado e bem cuidado.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" aria-hidden />
              </span>
              <div>
                <h2 className="font-display text-lg font-bold text-primary uppercase tracking-wide">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
          Para onde você <span className="text-primary">precisa ir</span>, eu te levo
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: RouteIcon, label: "Viagens rápidas ou longas" },
            { icon: Plane, label: "Aeroporto" },
            { icon: CalendarDays, label: "Eventos" },
            { icon: Stethoscope, label: "Consultas e compromissos" },
            { icon: Repeat, label: "Dia a dia" },
          ].map((service) => (
            <div
              key={service.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4"
            >
              <service.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span className="font-medium">{service.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Área de atendimento + selo */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 lg:grid-cols-2">
        <div className="rounded-2xl border border-primary/30 bg-card p-8">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-10 w-10 shrink-0 text-primary" aria-hidden />
            <div>
              <h2 className="font-display text-2xl font-black uppercase tracking-tight text-primary">
                Atendo centro e centro expandido
              </h2>
              <p className="mt-2 text-muted-foreground">
                Estamos em <strong className="text-foreground">Perdizes</strong> —
                atendimento em toda a região central de São Paulo e arredores.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/30 bg-card p-8 text-center">
          <div className="flex gap-1 text-primary" aria-hidden>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary" />
            ))}
          </div>
          <h2 className="mt-3 font-display text-xl font-bold uppercase tracking-wide">
            Atendimento com qualidade
          </h2>
          <p className="mt-1 inline-block rounded-md bg-primary px-3 py-1 font-display text-lg font-black uppercase text-primary-foreground">
            E respeito sempre!
          </p>
          <p className="mt-4 text-sm italic text-muted-foreground">
            Confiança que te leva tranquilo ao seu destino!
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-border bg-card/60">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Precisa de um <span className="text-primary">táxi</span> agora?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Me chame no WhatsApp que combinamos a sua corrida em minutos.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-display text-xl font-bold text-primary-foreground uppercase tracking-wide shadow-[0_10px_30px_-10px_var(--color-primary)] transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Chame no WhatsApp
          </a>
          <p className="mt-4 font-display text-lg font-bold text-primary">
            {PHONE_DISPLAY}
          </p>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-muted-foreground">
          Edi Taxista · Perdizes, São Paulo · {PHONE_DISPLAY}
        </div>
      </footer>
    </main>
  );
}
