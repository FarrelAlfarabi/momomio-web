// Brand Data - Single source of truth for all site content

export const brand = {
  name: "Nomiko",
  logoMain: "Nomi",
  logoAccent: "ko",
  tagline: "Protein Praktis & Teman Tumbuh Cerdas Anak",
  taglineEn: "Your Bright Growth Buddy",
  description:
    "Indonesia's first protein-fortified rice seasoning, made for toddlers and trusted by parents. No MSG, no GMO — just real nutrition that kids actually love.",
  nav: ["Products", "Why Nomiko", "Our Story", "Find Us"],
};

export const hero = {
  headline: "Protein Praktis,",
  headline2: "Teman Tumbuh si Kecil",
  subtext:
    "Taburan furikake penyedap nasi yang kaya protein untuk tumbuh kembang optimal si kecil. 100% Bahan Alami. Tanpa MSG & GMO.",
  cta: "Lihat Produk",
  ctaSecondary: "Pelajari Lebih",
  badge: "+50% Kebutuhan Protein Harian",
  heroImage: "/images/lifestyle-toddler-play.png",
  mascotImage: "/images/mascot-oren-happy.png",
};

export const products = [
  {
    id: "garden-nori",
    name: "Garden Nori Sesame",
    tagline: "Protein Nabati + Zat Besi",
    description:
      "Gentle and reassuring. First furikake for babies starting at 6 months — packed with plant protein and iron from real nori and sesame.",
    age: "6+ Bulan",
    color: "#C3D7A2",
    colorDark: "#037A3E",
    accentBg: "#edf5e5",
    image: "/images/garden-nori.png",
    highlights: ["Protein Nabati", "Zat Besi", "100% Alami"],
  },
  {
    id: "egg-nori",
    name: "Egg & Nori Sesame",
    tagline: "Protein + Vitamin D & E",
    description:
      "Confident growth for active toddlers. Egg protein combined with nori for healthy development at every stage.",
    age: "9+ Bulan",
    color: "#FFD16E",
    colorDark: "#e09000",
    accentBg: "#fff8e0",
    image: "/images/egg-nori.png",
    highlights: ["Protein Telur", "Vitamin D & E", "100% Alami"],
  },
  {
    id: "salmon-nori",
    name: "Salmon & Nori Sesame",
    tagline: "Protein + Omega 3 & DHA",
    description:
      "Smart investment in brain development. Real salmon with Omega 3 and DHA — because the first 1,000 days shape everything.",
    age: "9+ Bulan",
    color: "#BAD9D4",
    colorDark: "#037A3E",
    accentBg: "#e5f3f1",
    image: "/images/salmon-nori.png",
    highlights: ["Protein Salmon", "Omega 3 & DHA", "100% Alami"],
  },
];

export const whySection = {
  headline: "Kenapa Nomiko?",
  subtext:
    "1 dari 5 anak Indonesia di bawah 5 tahun mengalami stunting — dan kurangnya asupan protein adalah penyebab utamanya.",
  stat: "1 dari 5",
  statLabel: "anak Indonesia berisiko stunting (BPS/UNICEF 2023)",
  reasons: [
    {
      icon: "🔬",
      title: "Diformulasikan Bersama Ahli Gizi",
      desc: "Setiap produk dikembangkan bersama ahli nutrisi anak untuk memastikan kandungan yang tepat.",
    },
    {
      icon: "🌱",
      title: "100% Bahan Alami",
      desc: "Tanpa MSG, tanpa GMO. Hanya bahan-bahan berkualitas yang aman untuk si kecil.",
    },
    {
      icon: "💪",
      title: "+50% Protein Harian",
      desc: "Satu taburan Nomiko memenuhi lebih dari setengah kebutuhan protein harian anak.",
    },
    {
      icon: "🏅",
      title: "HALAL & HACCP",
      desc: "Tersertifikasi halal dan memenuhi standar keamanan pangan internasional.",
    },
  ],
};

export const storySection = {
  headline: "Teman Tumbuh Si Kecil",
  text: "Nomiko lahir dari satu pertanyaan sederhana: kenapa belum ada produk yang benar-benar fokus pada protein untuk anak Indonesia? Kami hadir sebagai brand pertama yang menjadikan fortifikasi protein sebagai inti — bukan tambahan.",
  text2:
    "Si Oren, maskot kami, adalah kucing oren yang ceria, penasaran, dan penuh kasih — sama seperti semangat yang ingin kami bawa ke setiap meja makan keluarga Indonesia.",
  mascotImages: [
    "/images/mascot-oren-sit.png",
    "/images/mascot-oren-fish.png",
    "/images/mascot-baby-happy.png",
  ],
  lifestyleImage: "/images/lifestyle-girl-eating.png",
};

export const shopLinks = [
  {
    name: "Tokopedia",
    url: "#",
    icon: "🛒",
  },
  {
    name: "Shopee",
    url: "#",
    icon: "🛍️",
  },
  {
    name: "TikTok Shop",
    url: "#",
    icon: "🎵",
  },
];

export const socialLinks = [
  { name: "Instagram", url: "#", handle: "@nomiko.id" },
  { name: "TikTok", url: "#", handle: "@nomiko.id" },
];
