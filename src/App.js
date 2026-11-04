import React, { useState, useEffect } from "react";
import { brand, hero, products, whySection, storySection, shopLinks, socialLinks } from "./data";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, target) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-brand">
          <span className="navbar-logo-text">
            {brand.logoMain}<span>{brand.logoAccent}</span>
          </span>
        </div>
        <ul className="navbar-links">
          <li><a href="#products" onClick={(e) => handleNav(e, "products")}>Produk</a></li>
          <li><a href="#why" onClick={(e) => handleNav(e, "why")}>Mengapa {brand.name}</a></li>
          <li><a href="#story" onClick={(e) => handleNav(e, "story")}>Tentang Kami</a></li>
          <li>
            <a
              href="#shop"
              className="navbar-cta"
              onClick={(e) => handleNav(e, "shop")}
            >
              Beli Sekarang
            </a>
          </li>
        </ul>
        <div
          className={`navbar-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </div>
      </nav>
      <div className={`navbar-mobile${menuOpen ? " open" : ""}`}>
        <a href="#products" onClick={(e) => handleNav(e, "products")}>Produk</a>
        <a href="#why" onClick={(e) => handleNav(e, "why")}>Mengapa {brand.name}</a>
        <a href="#story" onClick={(e) => handleNav(e, "story")}>Tentang Kami</a>
        <a href="#shop" onClick={(e) => handleNav(e, "shop")}>Beli Sekarang</a>
      </div>
    </>
  );
}

function Hero() {
  const handleScroll = (target) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">{hero.badge}</span>
          <h1 className="hero-headline">
            <span className="orange">{hero.headline}</span>
            <br />
            <span className="green">{hero.headline2}</span>
          </h1>
          <p className="hero-sub">{hero.subtext}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => handleScroll("products")}>
              {hero.cta}
            </button>
            <button className="btn-secondary" onClick={() => handleScroll("why")}>
              {hero.ctaSecondary}
            </button>
          </div>
          <div className="hero-trust">
            <span className="trust-chip"><span className="dot" />100% Bahan Alami</span>
            <span className="trust-chip"><span className="dot" />Tanpa MSG & GMO</span>
            <span className="trust-chip"><span className="dot" />HALAL Certified</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-ring" />
          <img
            src={hero.heroImage}
            alt="Happy toddler"
            className="hero-img-main"
          />
          <img
            src={hero.mascotImage}
            alt="Si Oren mascot"
            className="hero-mascot"
          />
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="section-full products-bg">
      <div className="products-inner">
        <div className="products-header">
          <span className="section-label">Produk Kami</span>
          <h2 className="section-headline">Pilih Sesuai Usia Si Kecil</h2>
          <p className="section-sub">
            Tersedia dalam 3 varian rasa, masing-masing diformulasikan untuk kebutuhan nutrisi yang berbeda di setiap tahap tumbuh kembang.
          </p>
        </div>
        <div className="products-grid">
          {products.map((p) => (
            <div
              key={p.id}
              className="product-card"
              style={{ backgroundColor: p.accentBg }}
            >
              <div
                className="product-card-top"
                style={{ backgroundColor: p.accentBg }}
              >
                <span className="product-age-badge">{p.age}</span>
                <img
                  src={p.image}
                  alt={p.name}
                  className="product-pack-img"
                />
              </div>
              <div className="product-card-body">
                <h3 className="product-name">{p.name}</h3>
                <span
                  className="product-tagline"
                  style={{ backgroundColor: p.colorDark }}
                >
                  {p.tagline}
                </span>
                <p className="product-desc">{p.description}</p>
                <div className="product-highlights">
                  {p.highlights.map((h) => (
                    <span key={h} className="product-highlight-chip">{h}</span>
                  ))}
                </div>
                <button className="product-card-cta" style={{ backgroundColor: p.colorDark }}>
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="section-full why-bg">
      <div className="why-inner">
        <div className="why-header">
          <span className="section-label">{whySection.headline}</span>
          <h2 className="section-headline">Nutrisi yang Tepat,<br />di Waktu yang Tepat</h2>
          <p className="section-sub">{whySection.subtext}</p>
        </div>
        <div className="why-stat-block">
          <span className="why-stat-number">{whySection.stat}</span>
          <span className="why-stat-label">{whySection.statLabel}</span>
        </div>
        <div className="why-grid">
          {whySection.reasons.map((r) => (
            <div key={r.title} className="why-card">
              <span className="why-icon">{r.icon}</span>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="section-full">
      <div className="story-inner">
        <div className="story-content">
          <span className="section-label">Tentang Kami</span>
          <h2 className="section-headline">{storySection.headline}</h2>
          <p className="story-text">{storySection.text}</p>
          <p className="story-text">{storySection.text2}</p>
          <div className="story-mascots">
            {storySection.mascotImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Si Oren mascot ${i + 1}`}
                className="story-mascot-img"
              />
            ))}
          </div>
        </div>
        <div className="story-visual">
          <img
            src={storySection.lifestyleImage}
            alt="Happy child eating"
            className="story-photo"
          />
          <div className="story-floating-card">
            <span className="number">50K+</span>
            <span className="label">Target Solusi Makan Si Kecil</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Shop() {
  return (
    <section id="shop" className="section-full shop-bg">
      <div className="shop-inner">
        <span className="section-label">Beli Sekarang</span>
        <h2 className="section-headline">Tersedia di Marketplace Favoritmu</h2>
        <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
          Cari {brand.name} di toko online favoritmu. Gratis ongkir dan promo menarik tersedia!
        </p>
        <div className="shop-links">
          {shopLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className="shop-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="shop-icon">{s.icon}</span>
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            {brand.logoMain}<span>{brand.logoAccent}</span>
          </span>
          <p className="footer-tagline">
            Protein Praktis & Teman Tumbuh Cerdas Anak. Produk pertama fortifikasi protein untuk anak Indonesia.
          </p>
          <div className="footer-social">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.handle}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-col-title">Produk</p>
          <ul className="footer-col-links">
            <li><a href="#products">Garden Nori Sesame</a></li>
            <li><a href="#products">Egg &amp; Nori Sesame</a></li>
            <li><a href="#products">Salmon &amp; Nori Sesame</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Info</p>
          <ul className="footer-col-links">
            <li><a href="#why">Mengapa {brand.name}</a></li>
            <li><a href="#story">Tentang Kami</a></li>
            <li><a href="#shop">Beli Sekarang</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">
          &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
        </span>
        <div className="footer-halal">
          <span>HALAL Certified</span>
          <span>HACCP</span>
          <span>100% Alami</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Why />
      <Story />
      <Shop />
      <Footer />
    </div>
  );
}
