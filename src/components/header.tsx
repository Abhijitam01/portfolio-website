import Image from "next/image";

const socialCards = [
  {
    platform: "Twitter",
    handle: "@abhijitam_tw",
    href: "https://x.com/abhijitam_tw",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    platform: "GitHub",
    handle: "Abhijitam01",
    href: "https://github.com/Abhijitam01",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    platform: "Email",
    handle: "work.abhijitam",
    href: "mailto:work.abhijitam@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    platform: "Resume",
    handle: "PDF · Latest",
    href: "/abhijitam-resume.pdf",
    downloadName: "abhijitam-resume.pdf",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

export function Header() {
  return (
    <header className="header">
      <div className="header-main">
        <div className="profile-img-container">
          <Image
            src="/me.png"
            alt="Abhijitam Dubey"
            fill
            className="profile-image"
            style={{ objectFit: "cover" }}
            sizes="72px"
            quality={100}
            priority
          />
        </div>
        <div className="header-info">
          <h1>Abhijitam Dubey</h1>
          <p className="header-subtitle">Software Developer · Builder</p>
          <p className="header-location">New Delhi, India</p>
        </div>
      </div>

      <div className="social-cards-grid">
        {socialCards.map((card) => (
          <a
            key={card.platform}
            href={card.href}
            download={card.downloadName}
            className="social-card"
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <span className="social-card-icon">{card.icon}</span>
            <span className="social-card-info">
              <span className="social-card-platform">{card.platform}</span>
              <span className="social-card-handle">{card.handle}</span>
            </span>
            <span className="social-card-arrow">→</span>
          </a>
        ))}
      </div>
    </header>
  );
}
