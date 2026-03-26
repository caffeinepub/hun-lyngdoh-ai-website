import { useEffect, useRef, useState } from "react";

const WA_LINK = "https://wa.me/917673962811";
const IG_LINK = "https://instagram.com/Hunlyngdoh1";

function useScrollReveal() {
  const obs = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    obs.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }
      },
      { threshold: 0.08 },
    );
    const els = document.querySelectorAll(
      ".who-card, .service-card, .step, .cta-card, .about-wrap, .result-col, .big-zero",
    );
    for (const el of els) {
      (el as HTMLElement).classList.add("reveal");
      obs.current.observe(el);
    }
    return () => obs.current?.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  function handleForm(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(`Hi Hun! My name is ${name}.\n\n${msg}`);
    window.open(`${WA_LINK}?text=${text}`, "_blank");
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <span className="nav-logo">
          Hun<span>.</span>
        </span>
        <div className="nav-right">
          <a
            href="#services"
            className="nav-link"
            data-ocid="nav.services.link"
          >
            Services
          </a>
          <a href="#about" className="nav-link" data-ocid="nav.about.link">
            About
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
            data-ocid="nav.whatsapp.button"
          >
            💬 WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="badge">Available for new clients</div>
          <h1>
            AI Automation
            <br />
            <span className="accent">for Small Businesses</span>
          </h1>
          <p>
            I build simple, powerful AI tools that help restaurants, guest
            houses, and cafes handle customer messages and bookings —
            automatically.
          </p>
          <div className="hero-btns">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-ocid="hero.whatsapp.button"
            >
              💬 Message on WhatsApp
            </a>
            <a
              href="#services"
              className="btn-ghost"
              data-ocid="hero.services.link"
            >
              See Services ↓
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">
                24<span>/7</span>
              </div>
              <div className="stat-label">AI Always Online</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                3<span>+</span>
              </div>
              <div className="stat-label">Business Types</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                0<span>s</span>
              </div>
              <div className="stat-label">Response Wait Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO I HELP */}
      <section id="who">
        <div className="section-label">Who I Help</div>
        <div className="section-title">Built for local businesses</div>
        <div className="section-sub">
          If you run a small business and spend too much time replying to the
          same messages — this is for you.
        </div>
        <div className="who-grid">
          <div className="who-card" data-ocid="who.item.1">
            <span className="who-icon">🍽️</span>
            <h3>Restaurants</h3>
            <p>
              Auto-reply to table bookings, share menus, and confirm
              reservations without picking up the phone.
            </p>
          </div>
          <div className="who-card" data-ocid="who.item.2">
            <span className="who-icon">🏡</span>
            <h3>Guest Houses</h3>
            <p>
              Handle room availability, pricing questions, and check-in details
              automatically — even at midnight.
            </p>
          </div>
          <div className="who-card" data-ocid="who.item.3">
            <span className="who-icon">☕</span>
            <h3>Cafes</h3>
            <p>
              Share opening hours, daily specials, and take pre-orders through
              WhatsApp without manual effort.
            </p>
          </div>
          <div className="who-card" data-ocid="who.item.4">
            <span className="who-icon">🛍️</span>
            <h3>Small Shops</h3>
            <p>
              Answer product queries, share prices, and redirect customers to
              the right place — instantly.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results">
        <div className="section-label">The Difference</div>
        <div className="section-title">Before vs After AI</div>
        <div className="section-sub">
          See exactly what changes when your business runs on automation.
        </div>
        <div className="big-zero">
          <span className="big-zero-num">0s</span>
          <div className="big-zero-label">
            Time your customer waits for a reply — with AI handling it
          </div>
        </div>
        <div className="results-wrap">
          <div className="result-col before">
            <div className="result-col-label before-label">😓 Before</div>
            <div className="result-row">
              <span className="result-icon">⏰</span> Customers wait hours for a
              reply
            </div>
            <div className="result-row">
              <span className="result-icon">📵</span> Missed messages when
              you&apos;re busy
            </div>
            <div className="result-row">
              <span className="result-icon">🔁</span> Same questions answered
              manually every day
            </div>
            <div className="result-row">
              <span className="result-icon">😤</span> Customers leave because no
              one replied
            </div>
            <div className="result-row">
              <span className="result-icon">📋</span> Bookings tracked on paper
              or forgotten
            </div>
          </div>
          <div className="vs-badge">VS</div>
          <div className="result-col after">
            <div className="result-col-label after-label">✅ After</div>
            <div className="result-row">
              <span className="result-icon">⚡</span> AI replies in 0 seconds,
              any time
            </div>
            <div className="result-row">
              <span className="result-icon">💬</span> Every message gets
              answered automatically
            </div>
            <div className="result-row">
              <span className="result-icon">🤖</span> AI handles FAQs, menus,
              pricing 24/7
            </div>
            <div className="result-row">
              <span className="result-icon">😊</span> Happy customers who feel
              looked after
            </div>
            <div className="result-row">
              <span className="result-icon">📲</span> Bookings saved and sent
              straight to you
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-wrap">
          <div className="about-left">
            <div className="about-avatar">HL</div>
            <div className="section-title">
              Hun
              <br />
              <span>Lyngdoh</span>
            </div>
            <div className="about-role">AI Automation Builder</div>
          </div>
          <div className="about-right">
            <div className="section-label">About Me</div>
            <p>
              My name is <strong>Hun Lyngdoh</strong>. I&apos;m currently
              exploring AI agents and automation. I build simple tools that help
              businesses save time and respond to customers faster.
            </p>
            <p>
              I focus on <strong>practical, affordable solutions</strong> — no
              complicated tech, no big team needed. Just tools that work quietly
              in the background so you can focus on running your business.
            </p>
            <div className="tag-row">
              <span className="tag">🤖 AI Agents</span>
              <span className="tag">💬 WhatsApp Bots</span>
              <span className="tag">📅 Booking Systems</span>
              <span className="tag">⚡ Automation</span>
              <span className="tag">📊 Chat Assistants</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="section-label">Services</div>
        <div className="section-title">What I build for you</div>
        <div className="section-sub">
          Three core tools that solve the most common problems small businesses
          face every day.
        </div>
        <div className="services-grid">
          <div className="service-card" data-ocid="services.item.1">
            <div className="svc-icon">💬</div>
            <h3>WhatsApp Auto Reply Assistant</h3>
            <p>
              Your business replies to customer messages instantly — even while
              you sleep. No missed inquiries, no frustrated customers waiting.
            </p>
            <span className="svc-tag">Most Popular</span>
          </div>
          <div className="service-card" data-ocid="services.item.2">
            <div className="svc-icon">📅</div>
            <h3>Booking Automation</h3>
            <p>
              Tables and rooms get booked automatically through chat. The AI
              collects all details and confirms reservations — no back-and-forth
              needed.
            </p>
            <span className="svc-tag">Time Saver</span>
          </div>
          <div className="service-card" data-ocid="services.item.3">
            <div className="svc-icon">🤖</div>
            <h3>AI Chat Assistant</h3>
            <p>
              A smart assistant that answers FAQs, shares your menu or prices,
              and guides customers — available 24 hours a day, 7 days a week.
            </p>
            <span className="svc-tag">Always On</span>
          </div>
          <div className="service-card" data-ocid="services.item.4">
            <div className="svc-icon">🎙️</div>
            <h3>Voice AI Agent</h3>
            <p>
              An AI that answers phone calls for your business — speaks
              naturally, handles enquiries, takes bookings, and never misses a
              call.
            </p>
            <span className="svc-tag">New</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="section-label">Process</div>
        <div className="section-title">How it works</div>
        <div className="section-sub">
          Four simple steps — your customer gets a reply in seconds, you get
          notified without lifting a finger.
        </div>
        <div className="steps-wrap">
          <div className="step" data-ocid="how.item.1">
            <span className="step-num">01</span>
            <span className="step-icon">📲</span>
            <h4>Customer sends a message</h4>
            <p>Via WhatsApp, Instagram, or your website chat.</p>
          </div>
          <div className="step" data-ocid="how.item.2">
            <span className="step-num">02</span>
            <span className="step-icon">⚡</span>
            <h4>AI replies instantly</h4>
            <p>A smart, natural response is sent within seconds.</p>
          </div>
          <div className="step" data-ocid="how.item.3">
            <span className="step-num">03</span>
            <span className="step-icon">📋</span>
            <h4>Details are saved</h4>
            <p>Booking info, names, and dates are recorded automatically.</p>
          </div>
          <div className="step" data-ocid="how.item.4">
            <span className="step-num">04</span>
            <span className="step-icon">🔔</span>
            <h4>You get notified</h4>
            <p>
              A clean summary lands in your WhatsApp — when you&apos;re ready.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-wrap">
          <div className="contact-left">
            <div className="section-label">Contact</div>
            <div className="section-title">
              Let&apos;s talk about your business
            </div>
            <p>
              Reach out on WhatsApp or Instagram for a quick chat. Or fill the
              form and I&apos;ll reply within 24 hours.
            </p>
            <div className="cta-cards">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-card primary"
                data-ocid="contact.whatsapp.button"
              >
                <span className="cta-icon">💬</span>
                <div>
                  <div className="cta-card-label">Fastest Response</div>
                  <div className="cta-card-title">Message on WhatsApp</div>
                </div>
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-card"
                data-ocid="contact.instagram.button"
              >
                <span className="cta-icon">📸</span>
                <div>
                  <div className="cta-card-label">Follow &amp; DM</div>
                  <div className="cta-card-title">
                    @Hunlyngdoh1 on Instagram
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="form-box">
            <div className="form-title">✉️ Send a message</div>
            <form onSubmit={handleForm}>
              <div className="form-row">
                <label htmlFor="fname">Your Name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="e.g. Priya Sharma"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-ocid="contact.input"
                />
              </div>
              <div className="form-row">
                <label htmlFor="fmsg">Your Message</label>
                <textarea
                  id="fmsg"
                  placeholder="Tell me about your business and what you need help with..."
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                className="form-submit"
                data-ocid="contact.submit_button"
              >
                💬 Send via WhatsApp →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">
          Hun<span>.</span>
        </span>
        <span>AI Automation for Small Businesses</span>
        <span>
          Built by <a href="#hero">Hun Lyngdoh</a>
        </span>
      </footer>
    </>
  );
}
