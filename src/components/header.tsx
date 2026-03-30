import Image from "next/image";
import { Roles } from "./roles";
import { HoverTag } from "./hover-tag";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const heroSocials = [
  {
    label: "Resume",
    href: "/abhijitam-resume.pdf",
    description: "Download my latest resume.",
    stat: "PDF file",
    downloadName: "abhijitam-resume.pdf",
  },
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

const techStack = [
  { text: "TypeScript", imageSrc: "/tags/typescript.png" },
  { text: "React", imageSrc: "/tags/react.png" },
  { text: "Node.js", imageSrc: "/tags/nodejs.png" },
  { text: "Solana", imageSrc: "/tags/solana.png" },
];

export function Header() {
  return (
    <header className="header">
      <div
        className="container header-content"
        style={{ position: "relative", zIndex: 30 }}
      >
        <div className="header-main">
          <a
            href="https://x.com/Abhijitam_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Twitter profile"
          >
            <div className="profile-img-container profile-image-swap">
            <Image
              src="/me.png"
              alt="Abhijitam Dubey"
              fill
              className="profile-image profile-image-default"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 150px, 200px"
                quality={100}
                priority
              />
            <Image
              src="/profile.jpg"
              alt="Profile hover avatar"
              fill
              className="profile-image profile-image-hover"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 150px, 200px"
                quality={100}
              />
            </div>
          </a>
          <div className="header-info">
            <h1>Abhijitam Dubey</h1>
            <div className="subtitle">
              <Roles />
            </div>
            <p className="tech-stack-line">
              {techStack.map((tech, index) => (
                <span className="tech-item" key={tech.text}>
                  <HoverTag text={tech.text} imageSrc={tech.imageSrc} />
                  {index < techStack.length - 1 ? (
                    <span className="tech-separator" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="hero-socials">
          {heroSocials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              download={social.downloadName}
              className="hero-link-anchor"
              target={
                social.href.startsWith("http") && !social.downloadName
                  ? "_blank"
                  : undefined
              }
              rel={
                social.href.startsWith("http") && !social.downloadName
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <HoverBorderGradient
                as="div"
                containerClassName="hero-link-gradient"
                className="hero-link"
              >
                <span>{social.label}</span>
              </HoverBorderGradient>
              <div className="hero-link-tooltip" role="presentation">
                <p>{social.description}</p>
                <span>{social.stat}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
