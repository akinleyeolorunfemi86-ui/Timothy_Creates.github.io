import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Coffee,
  UtensilsCrossed,
  Wine,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import foodImg from "@/assets/food.jpg";
import teamImg from "@/assets/team.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import aperitivoImg from "@/assets/aperitivo.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vertigo Bar Parma · Colazione, Pranzo e Aperitivo" },
      {
        name: "description",
        content:
          "Vertigo Bar a Parma. Colazione, pranzo senza surgelati e aperitivo curato. Gestione familiare, parcheggio gratuito, accoglienza vera.",
      },
      { property: "og:title", content: "Vertigo Bar Parma" },
      {
        property: "og:description",
        content:
          "Un posto che non si finge niente. Ti accoglie, ti sfama, ti fa tornare.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/390000000000?text=" +
  encodeURIComponent(
    "Ciao, vorrei sapere gli orari e il menu del giorno di Vertigo Bar",
  );

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "Chi siamo" },
    { href: "#offerta", label: "Cosa offriamo" },
    { href: "#menu", label: "Menu" },
    { href: "#recensioni", label: "Recensioni" },
    { href: "#contatti", label: "Dove siamo" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold tracking-wide text-cream">
            VERTIGO
          </span>
          <span className="text-[10px] tracking-[0.3em] text-gold">
            BAR · PARMA
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cream/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contatti"
          className="rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-warm transition-transform hover:scale-105"
        >
          Vieni a Trovarci
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Interno caldo del Vertigo Bar al tramonto"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-charcoal/40" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="reveal mb-6 text-xs uppercase tracking-[0.4em] text-gold">
          Bar · Parma · Zona Industriale
        </p>
        <h1 className="reveal font-serif text-5xl leading-[1.05] text-cream md:text-7xl lg:text-8xl">
          Il posto che non
          <br />
          <span className="italic text-gold">ti aspetti</span>
        </h1>
        <p className="reveal mx-auto mt-8 max-w-2xl text-lg text-cream/85 md:text-xl">
          Una pausa veloce che sa di ristorante. Una colazione che ti mette il
          sorriso. Un pranzo che ti fa tornare domani.
        </p>
        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contatti"
            className="rounded-full bg-gradient-gold px-8 py-4 text-base font-medium text-primary-foreground shadow-warm transition-transform hover:scale-105"
          >
            Vieni a Trovarci
          </a>
          <a
            href="#menu"
            className="rounded-full border border-cream/40 px-8 py-4 text-base font-medium text-cream backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
          >
            Scopri il Menu
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-cream/60">
        scorri
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
            Chi siamo
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Fatto con le mani,
            <br />
            <span className="italic text-gold">servito col cuore</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-cream/80">
            Sara e Nico gestiscono Vertigo Bar con una passione che si sente in
            ogni piatto. Niente è surgelato, niente è improvvisato. Dal caffè
            del mattino al pranzo veloce che sembra un ristorante, ogni cosa
            viene preparata con cura e servita con il sorriso.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-cream/80">
            Non è un bar che si finge qualcosa che non è. È semplicemente un
            posto bello, pulito, genuino, dove si sta bene e si torna
            volentieri.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Gestione familiare",
              "Prodotti freschi ogni giorno",
              "Sempre senza surgelati",
            ].map((b) => (
              <span
                key={b}
                className="rounded-full border border-gold/40 bg-gold/5 px-4 py-2 text-xs uppercase tracking-wider text-gold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="reveal relative">
          <img
            src={foodImg}
            alt="Piatti freschi preparati al momento"
            className="rounded-lg object-cover shadow-soft"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <div className="absolute -bottom-10 -left-6 max-w-sm rounded-lg bg-card p-8 shadow-warm md:-left-10">
            <Quote className="mb-4 h-8 w-8 text-gold" />
            <p className="font-serif text-xl italic leading-snug text-cream">
              "Un posto che non si finge cool o trendy, ma ti accoglie, ti fa
              sentire a casa e ti fa venir voglia di tornare."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Offerta() {
  const items = [
    {
      icon: Coffee,
      title: "Colazione",
      img: breakfastImg,
      body: "Cappuccino perfetto, cornetti freschi, un bancone sempre pronto. Il modo migliore per iniziare la giornata.",
    },
    {
      icon: UtensilsCrossed,
      title: "Pranzo",
      img: foodImg,
      body: "Piatti preparati al momento, senza surgelati. Tartare di cavallo, torte di patate, verdure in pastella al forno. Una pausa che sembra un ristorante.",
    },
    {
      icon: Wine,
      title: "Aperitivo",
      img: aperitivoImg,
      body: "Stuzzichini eccellenti, vini selezionati, cocktail preparati con cura. Il momento perfetto per rallentare dopo una giornata di lavoro.",
    },
  ];
  return (
    <section id="offerta" className="bg-secondary/40 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
            Cosa offriamo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Tre momenti, una sola
            <span className="italic text-gold"> cura</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body, img }) => (
            <article
              key={title}
              className="reveal group overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-500 hover:border-gold/60 hover:shadow-warm"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold shadow-warm">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-cream">{title}</h3>
                <p className="mt-4 leading-relaxed text-cream/75">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const MENU = {
  Colazione: [
    { name: "Cappuccino", desc: "Crema vellutata, caffè 100% arabica", price: "€ 1,50" },
    { name: "Cornetto artigianale", desc: "Vuoto, crema, cioccolato o marmellata", price: "€ 1,40" },
    { name: "Brioche salata", desc: "Farcita al momento con prosciutto cotto o crudo", price: "€ 2,80" },
    { name: "Cannoncini", desc: "Pasta sfoglia croccante e crema fresca", price: "€ 1,60" },
  ],
  Pranzo: [
    { name: "Tartare di cavallo", desc: "Battuta al coltello, condita al momento", price: "€ 12,00", featured: true },
    { name: "Torte di patate di Sara", desc: "Ricetta di casa, dorate in padella", price: "€ 8,00", featured: true },
    { name: "Verdure in pastella al forno", desc: "Leggere, senza fritto, tutte le stagioni", price: "€ 7,50", featured: true },
    { name: "Primo del giorno", desc: "Pasta fresca o riso, sempre fatto in casa", price: "€ 9,00" },
  ],
  "Piatti del Giorno": [
    { name: "Lasagne al forno", desc: "Solo il martedì, finché finiscono", price: "€ 10,00" },
    { name: "Bollito misto", desc: "Tradizione emiliana, salse della casa", price: "€ 13,00" },
    { name: "Vellutata di stagione", desc: "Verdure dell'orto, crostini caldi", price: "€ 7,00" },
  ],
  Aperitivo: [
    { name: "Spritz della casa", desc: "Aperol, prosecco, soda, scorza d'arancia", price: "€ 5,50" },
    { name: "Calice di vino", desc: "Selezione di rossi e bianchi del territorio", price: "€ 4,50" },
    { name: "Tagliere misto", desc: "Salumi parmigiani e formaggi stagionati", price: "€ 12,00" },
    { name: "Stuzzichini caldi", desc: "Sempre inclusi con ogni consumazione", price: "incluso" },
  ],
} as const;

function Menu() {
  const tabs = Object.keys(MENU) as (keyof typeof MENU)[];
  const [active, setActive] = useState<keyof typeof MENU>(tabs[0]);
  return (
    <section id="menu" className="py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
            Il nostro menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Quello che trovi
            <span className="italic text-gold"> da noi</span>
          </h2>
        </div>

        <div className="reveal mt-12 flex flex-wrap justify-center gap-2 border-b border-border/50 pb-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === t
                  ? "bg-gold text-primary-foreground"
                  : "text-cream/70 hover:text-gold"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="reveal mt-12 grid gap-6 sm:grid-cols-2">
          {MENU[active].map((item) => {
            const featured = "featured" in item && item.featured;
            return (
              <div
                key={item.name}
                className={`group rounded-lg border p-6 transition-all ${
                  featured
                    ? "border-gold/50 bg-gold/5"
                    : "border-border/50 bg-card hover:border-gold/40"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl text-cream">
                    {item.name}
                    {featured && (
                      <span className="ml-2 text-xs uppercase tracking-widest text-gold">
                        ★ Firma
                      </span>
                    )}
                  </h3>
                  <span className="font-mono text-sm text-gold">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <p className="reveal mt-12 text-center font-serif text-lg italic text-cream/70">
          Il nostro menu cambia con la stagione e con la fantasia di Sara. Passa
          a trovarci per scoprire il piatto del giorno.
        </p>
      </div>
    </section>
  );
}

const REVIEWS = [
  "Uno dei pochi posti a Parma dove si mangiano piatti davvero squisiti, come al ristorante, anche se non lo è.",
  "Ti accoglie, ti tratta come in famiglia, ti fa venire voglia di tornare. E le persone che lo gestiscono sono meravigliose.",
  "Cibo ottimo, prezzi giusti e staff gentilissimo. Uno dei pochi bar che non usa surgelati.",
  "Sara e Nico sono due donne straordinarie. Attente ai clienti, lavorano con passione e determinazione.",
  "Mi fermo sempre qui quando sono a Parma. Tutto buono, ma la tartare di cavallo è eccellente.",
];

function Reviews() {
  return (
    <section id="recensioni" className="bg-secondary/40 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
            Cosa dicono di noi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Le parole dei nostri
            <span className="italic text-gold"> clienti</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <blockquote
              key={i}
              className="reveal flex flex-col rounded-lg border border-border/50 bg-card p-8 shadow-soft transition-all hover:border-gold/50"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="font-serif text-lg italic leading-relaxed text-cream/90">
                "{r}"
              </p>
            </blockquote>
          ))}
        </div>
        <div className="reveal mt-14 flex flex-col items-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="h-6 w-6 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-serif text-2xl text-cream">4,9 su 5</p>
          <p className="text-sm text-cream/60">
            Basato su centinaia di recensioni reali
          </p>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal overflow-hidden rounded-2xl bg-gradient-to-br from-card to-secondary shadow-warm">
          <div className="grid lg:grid-cols-5">
            <div className="relative lg:col-span-2">
              <img
                src={teamImg}
                alt="Sara e Nico dietro al bancone"
                className="h-full min-h-[400px] w-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-center p-10 md:p-16 lg:col-span-3">
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
                Il team
              </p>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Dietro al bancone
                <br />
                <span className="italic text-gold">ci sono loro</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-cream/85">
                Vertigo Bar è Sara e Nico. Due donne che hanno trasformato un
                bar di quartiere in un punto di riferimento per chi lavora in
                zona. Professionali, genuine, sempre col sorriso.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-cream/85">
                Chi le incontra una volta vuole tornare.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gold/40" />
                <span className="font-serif text-sm italic text-gold">
                  Sara &amp; Nico
                </span>
                <div className="h-px flex-1 bg-gold/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contatti" className="bg-secondary/40 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
            Dove siamo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Facile da trovare,
            <br />
            <span className="italic text-gold">difficile da dimenticare</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="reveal space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-cream">Indirizzo</h3>
                <p className="mt-1 text-cream/75">
                  Area industriale, Parma
                  <br />
                  Parcheggio gratuito sempre disponibile
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-cream">Orari</h3>
                <p className="mt-1 text-cream/75">
                  Lunedì / Venerdì · 7:00 / 15:00
                  <br />
                  Sabato · 7:00 / 13:00
                  <br />
                  Domenica chiuso
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-cream">Contatti</h3>
                <div className="mt-1 space-y-1 text-cream/75">
                  <a href="tel:+390000000000" className="block hover:text-gold">
                    +39 000 000 0000
                  </a>
                  <a
                    href="mailto:ciao@vertigobar.it"
                    className="block hover:text-gold"
                  >
                    ciao@vertigobar.it
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:underline"
                  >
                    <MessageCircle className="h-4 w-4" /> Scrivici su WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <p className="rounded-lg border border-border/50 bg-card p-6 text-sm leading-relaxed text-cream/75">
              Siamo in zona industriale, lontani dal traffico del centro. Ci
              trovi facilmente e parcheggi sempre.
            </p>
          </div>

          <div className="reveal overflow-hidden rounded-xl border border-border/50 shadow-soft">
            <iframe
              title="Mappa Vertigo Bar Parma"
              src="https://www.google.com/maps?q=Parma+zona+industriale&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 bg-charcoal py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-3xl font-semibold text-cream">
              VERTIGO
            </span>
            <span className="text-[10px] tracking-[0.3em] text-gold">
              BAR · PARMA
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
            No pretense. Just great food, great coffee, and people who genuinely
            care.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg text-cream">Naviga</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><a href="#about" className="hover:text-gold">Chi siamo</a></li>
            <li><a href="#offerta" className="hover:text-gold">Cosa offriamo</a></li>
            <li><a href="#menu" className="hover:text-gold">Menu</a></li>
            <li><a href="#contatti" className="hover:text-gold">Dove siamo</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg text-cream">Seguici</h4>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="mailto:ciao@vertigobar.it"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-border/40 px-6 pt-6 text-center text-xs text-cream/50">
        © 2025 Vertigo Bar Parma · Tutti i diritti riservati
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Contattaci su WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold shadow-warm transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
    </a>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Offerta />
        <Menu />
        <Reviews />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
