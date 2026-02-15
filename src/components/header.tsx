import Image from "next/image";
import { Roles } from "./roles";
import { HoverTag } from "./hover-tag";

const heroSocials = [
  {
    label: "Email",
    href: "mailto:work.abhijitam@gmail.com",
    description: "Open for thoughtful collaboration.",
    stat: "Reply within 24h",
  },
  {
    label: "Twitter",
    href: "https://x.com/Abhijitam_",
    description: "Building in public & sharing experiments.",
    stat: "Live updates",
  },
  {
    label: "GitHub",
    href: "https://github.com/Abhijitam01",
    description: "Open-source work & interesting side projects.",
    stat: "Browse repositories",
  },
];

export function Header() {
  return (
    <header className="header">
      <div
        className="container header-content"
        style={{ position: "relative", zIndex: 30 }}
      >
        <a
          href="https://x.com/Abhijitam_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Twitter profile"
        >
          <div className="profile-img-container profile-image-swap" style={{ position: 'relative', width: '160px', height: '160px', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--border-color)', flexShrink: 0 }}>
            <Image
              src="/me.png"
              alt="Abhijitam Dubey"
              fill
              className="profile-image profile-image-default"
              style={{ objectFit: 'cover' }}
              priority
            />
            <Image
              src="/profile.jpg"
              alt="Profile hover avatar"
              fill
              className="profile-image profile-image-hover"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </a>
        <div className="header-info">
          <h1>Abhijitam Dubey</h1>
          <div className="subtitle">
            <Roles />
          </div>
          <p className="tech-stack-line">
            <HoverTag text="TypeScript" imageSrc="/tags/typescript.png" /> · 
            <HoverTag text="React" imageSrc="/tags/react.png" /> · 
            <HoverTag text="Node.js" imageSrc="/tags/nodejs.png" /> · 
            <HoverTag text="Solana" imageSrc="/tags/solana.png" />
          </p>
          <div className="hero-socials">
            {heroSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="hero-link"
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span>{social.label}</span>
                <div className="hero-link-tooltip" role="presentation">
                  <p>{social.description}</p>
                  <span>{social.stat}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
