import { useEffect, useRef, useState } from "react";

// ─── Scroll Reveal Hook ─────────────────────────────────────────────────────
function useScrollReveal() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const elements = document.querySelectorAll(".reveal");
    for (const el of elements) {
      observer.current?.observe(el);
    }

    return () => observer.current?.disconnect();
  }, []);
}

// ─── Constants ───────────────────────────────────────────────────────────────
const WA_LINK = "https://wa.me/917673962811";
const IG_LINK = "https://instagram.com/Hunlyngdoh1";

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div
        style={{ maxWidth: "1160px" }}
        className="mx-auto px-6 py-4 flex items-center justify-between"
      >
        <a
          href="#hero"
          className="text-xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f0" }}
        >
          Hun<span style={{ color: "#b8ff57" }}>.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm font-medium transition-colors hover:text-[#b8ff57]"
            style={{ color: "#a7ada6" }}
            data-ocid="nav.services.link"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-sm font-medium transition-colors hover:text-[#b8ff57]"
            style={{ color: "#a7ada6" }}
            data-ocid="nav.about.link"
          >
            About
          </a>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold px-5 py-2 rounded-full transition-all hover:opacity-90 hover:shadow-lg"
          style={{ background: "#b8ff57", color: "#080808" }}
          data-ocid="nav.whatsapp.button"
        >
          WhatsApp Me
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Radial green glow */}
      <div className="hero-glow glow-pulse" />

      <div style={{ maxWidth: "1160px" }} className="mx-auto px-6 py-32 w-full">
        {/* Badge */}
        <div
          className="animate-fade-up-1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(184,255,87,0.1)",
            border: "1px solid rgba(184,255,87,0.25)",
          }}
        >
          <span
            className="pulse-dot w-2 h-2 rounded-full inline-block"
            style={{ background: "#b8ff57" }}
          />
          <span
            className="text-xs font-medium tracking-wide uppercase"
            style={{ color: "#b8ff57" }}
          >
            ✦ Available for new clients
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-up-2 font-bold leading-tight mb-6"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            color: "#f5f5f0",
            letterSpacing: "-0.02em",
          }}
        >
          AI Automation
          <br />
          <span style={{ color: "#b8ff57" }}>for Small Businesses</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up-3 mb-10 max-w-xl leading-relaxed"
          style={{ color: "#a7ada6", fontSize: "1.05rem" }}
        >
          I build AI-powered systems that automate customer interactions,
          bookings, and communication for small businesses — so you can focus on
          what matters most.
        </p>

        {/* Buttons */}
        <div className="animate-fade-up-4 flex flex-wrap gap-4 mb-16">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "#b8ff57", color: "#080808" }}
            data-ocid="hero.whatsapp.button"
          >
            WhatsApp Me
          </a>
          <a
            href="#services"
            className="px-7 py-3 rounded-full font-semibold text-sm transition-all hover:border-[#b8ff57] hover:text-[#b8ff57]"
            style={{
              border: "1px solid rgba(184,255,87,0.4)",
              color: "#f5f5f0",
            }}
            data-ocid="hero.services.button"
          >
            See Services
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-5 flex flex-wrap gap-10">
          {[
            { value: "24/7", label: "AI Always Online" },
            { value: "3+", label: "Business Types" },
            { value: "0s", label: "Response Wait Time" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-2xl font-bold"
                style={{
                  color: "#b8ff57",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm mt-1" style={{ color: "#a7ada6" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Who I Help ───────────────────────────────────────────────────────────────
function WhoIHelp() {
  const cards = [
    {
      icon: "🍽️",
      title: "Restaurants",
      desc: "Automate table reservations, menu queries, and customer support via WhatsApp.",
    },
    {
      icon: "🏡",
      title: "Guest Houses",
      desc: "Handle booking inquiries, check-in info, and FAQs automatically.",
    },
    {
      icon: "☕",
      title: "Cafes",
      desc: "Let AI take orders, answer menu questions, and send daily specials.",
    },
    {
      icon: "🛍️",
      title: "Small Shops",
      desc: "Automate product queries, order tracking, and customer follow-ups.",
    },
  ];

  return (
    <section
      id="who-i-help"
      style={{ background: "#080808", padding: "96px 0" }}
    >
      <div style={{ maxWidth: "1160px" }} className="mx-auto px-6">
        <div className="reveal mb-12">
          <p
            className="text-xs uppercase tracking-widest font-medium mb-3"
            style={{ color: "#b8ff57" }}
          >
            WHO I HELP
          </p>
          <h2 className="text-4xl font-bold" style={{ color: "#f5f5f0" }}>
            Built for Small Business Owners
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="reveal help-card rounded-2xl p-6"
              style={{
                background: "#0f1411",
                border: "1px solid rgba(184,255,87,0.12)",
                transitionDelay: `${i * 80}ms`,
              }}
              data-ocid={`help.item.${i + 1}`}
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#f5f5f0" }}
              >
                {c.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#a7ada6" }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const skills = [
    "AI Agents",
    "WhatsApp Bots",
    "Booking Systems",
    "Automation",
    "Chat Assistants",
  ];

  return (
    <section id="about" style={{ background: "#0a0d0b", padding: "96px 0" }}>
      <div style={{ maxWidth: "1160px" }} className="mx-auto px-6">
        <div className="reveal mb-12">
          <p
            className="text-xs uppercase tracking-widest font-medium mb-3"
            style={{ color: "#b8ff57" }}
          >
            ABOUT ME
          </p>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div
              className="flex items-center justify-center w-24 h-24 rounded-full text-2xl font-bold"
              style={{
                background: "#b8ff57",
                color: "#080808",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              HL
            </div>
            <div>
              <h3 className="text-xl font-bold" style={{ color: "#f5f5f0" }}>
                Hun Lyngdoh
              </h3>
              <p className="text-sm mt-1" style={{ color: "#b8ff57" }}>
                AI Automation Builder
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            <h2
              className="text-3xl font-bold mb-5"
              style={{ color: "#f5f5f0" }}
            >
              The Person Behind the Automation
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "#a7ada6" }}>
              I&apos;m Hun Lyngdoh, an AI Automation Builder based in Meghalaya,
              India. I specialize in building intelligent automation systems
              that help small businesses serve their customers better — without
              the extra manpower.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "#a7ada6" }}>
              From WhatsApp bots to booking systems, I create solutions that
              work 24/7, reduce manual effort, and improve customer response
              times.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="skill-tag text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(184,255,87,0.1)",
                    border: "1px solid rgba(184,255,87,0.25)",
                    color: "#b8ff57",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: "💬",
      title: "WhatsApp Auto Reply Assistant",
      badge: "Most Popular",
      badgeColor: "#b8ff57",
      badgeText: "#080808",
      desc: "An AI-powered WhatsApp assistant that replies to customer messages automatically — answering FAQs, taking bookings, and more.",
    },
    {
      icon: "📅",
      title: "Booking Automation",
      badge: "Time Saver",
      badgeColor: "#3b82f6",
      badgeText: "#fff",
      desc: "Automated booking systems that handle reservations, confirmations, and reminders without any manual input.",
    },
    {
      icon: "🤖",
      title: "AI Chat Assistant",
      badge: "Always On",
      badgeColor: "#a855f7",
      badgeText: "#fff",
      desc: "A custom AI chatbot trained on your business data to handle customer queries around the clock.",
    },
    {
      icon: "🎙️",
      title: "Voice AI Agent",
      badge: "New",
      badgeColor: "#f97316",
      badgeText: "#fff",
      desc: "An AI that answers phone calls for your business — speaks naturally, handles enquiries, takes bookings, and never misses a call.",
    },
  ];

  return (
    <section id="services" style={{ background: "#080808", padding: "96px 0" }}>
      <div style={{ maxWidth: "1160px" }} className="mx-auto px-6">
        <div className="reveal mb-12">
          <p
            className="text-xs uppercase tracking-widest font-medium mb-3"
            style={{ color: "#b8ff57" }}
          >
            SERVICES
          </p>
          <h2 className="text-4xl font-bold" style={{ color: "#f5f5f0" }}>
            What I Build For You
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal service-card rounded-2xl p-7"
              style={{
                background: "#0f1411",
                border: "1px solid rgba(184,255,87,0.1)",
                transitionDelay: `${i * 100}ms`,
              }}
              data-ocid={`services.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: "rgba(184,255,87,0.1)" }}
              >
                {s.icon}
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-lg font-semibold leading-tight"
                  style={{ color: "#f5f5f0" }}
                >
                  {s.title}
                </h3>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full ml-3 shrink-0"
                  style={{ background: s.badgeColor, color: s.badgeText }}
                >
                  {s.badge}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#a7ada6" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: "💬",
      title: "Customer Sends a Message",
      desc: "A customer messages your WhatsApp, website, or platform.",
    },
    {
      num: "02",
      icon: "⚡",
      title: "AI Replies Instantly",
      desc: "The AI responds immediately with accurate, helpful information.",
    },
    {
      num: "03",
      icon: "💾",
      title: "Details Are Saved",
      desc: "Customer info and requests are automatically logged and organized.",
    },
    {
      num: "04",
      icon: "🔔",
      title: "You Get Notified",
      desc: "You receive a summary or alert so you stay in control.",
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{ background: "#0a0d0b", padding: "96px 0" }}
    >
      <div style={{ maxWidth: "1160px" }} className="mx-auto px-6">
        <div className="reveal mb-12">
          <p
            className="text-xs uppercase tracking-widest font-medium mb-3"
            style={{ color: "#b8ff57" }}
          >
            HOW IT WORKS
          </p>
          <h2 className="text-4xl font-bold" style={{ color: "#f5f5f0" }}>
            Simple. Fast. Effective.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="reveal rounded-2xl p-6"
              style={{
                background: "#0f1411",
                border: "1px solid rgba(184,255,87,0.1)",
                position: "relative",
                overflow: "hidden",
                transitionDelay: `${i * 100}ms`,
              }}
              data-ocid={`steps.item.${i + 1}`}
            >
              <span className="step-ghost">{s.num}</span>
              <div className="relative z-10">
                <div className="text-2xl mb-4 mt-4">{s.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "#f5f5f0" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#a7ada6" }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(`Hi Hun! My name is ${name}. ${message}`);
    window.open(`${WA_LINK}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" style={{ background: "#080808", padding: "96px 0" }}>
      <div style={{ maxWidth: "1160px" }} className="mx-auto px-6">
        <div className="reveal mb-4">
          <p
            className="text-xs uppercase tracking-widest font-medium mb-3"
            style={{ color: "#b8ff57" }}
          >
            CONTACT
          </p>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#f5f5f0" }}
            >
              Let&apos;s Work Together
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: "#a7ada6" }}>
              Ready to automate your business? Reach out via WhatsApp or
              Instagram and let&apos;s get started.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-5 mb-4 transition-all hover:opacity-90 hover:scale-[1.01]"
              style={{ background: "#b8ff57" }}
              data-ocid="contact.whatsapp.button"
            >
              <span className="text-2xl">💬</span>
              <div>
                <div
                  className="font-semibold text-sm"
                  style={{ color: "#080808" }}
                >
                  Chat on WhatsApp
                </div>
                <div className="text-xs" style={{ color: "rgba(8,8,8,0.6)" }}>
                  +91 76739 62811
                </div>
              </div>
            </a>

            {/* Instagram CTA */}
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-card flex items-center gap-4 rounded-2xl p-5 transition-all hover:opacity-90"
              data-ocid="contact.instagram.button"
            >
              <span className="text-2xl">📸</span>
              <div>
                <div
                  className="font-semibold text-sm"
                  style={{ color: "#f5f5f0" }}
                >
                  Follow on Instagram
                </div>
                <div className="text-xs" style={{ color: "#a7ada6" }}>
                  @Hunlyngdoh1
                </div>
              </div>
            </a>
          </div>

          {/* Right – Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            data-ocid="contact.modal"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm mb-2"
                style={{ color: "#a7ada6" }}
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact-input"
                data-ocid="contact.input"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm mb-2"
                style={{ color: "#a7ada6" }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="contact-input resize-none"
                data-ocid="contact.textarea"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.01]"
              style={{ background: "#b8ff57", color: "#080808" }}
              data-ocid="contact.submit_button"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "#0a0d0b",
        borderTop: "1px solid rgba(184,255,87,0.08)",
      }}
      className="py-10"
    >
      <div
        style={{ maxWidth: "1160px" }}
        className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex flex-col items-center md:items-start gap-1">
          <span
            className="text-xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5f5f0",
            }}
          >
            Hun<span style={{ color: "#b8ff57" }}>.</span>
          </span>
          <span className="text-xs" style={{ color: "#a7ada6" }}>
            AI Automation for Small Businesses
          </span>
        </div>
        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-[#b8ff57] transition-colors"
            style={{ color: "#a7ada6" }}
          >
            Built by Hun Lyngdoh
          </a>
        </div>
        <div className="text-xs" style={{ color: "#a7ada6" }}>
          © {year} Hun Lyngdoh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal();

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <WhoIHelp />
      <About />
      <Services />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}
