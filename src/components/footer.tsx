import { VisitorCounter } from "./visitor-counter";

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="container" style={{ position: "relative", zIndex: 20 }}>
        <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <p className="footer-text" style={{ opacity: 0.75 }}>© 2026 Abhijitam Dubey</p>
            <VisitorCounter />
          </div>
          <div className="footer-links" style={{ display: 'flex', gap: '2rem', opacity: 0.75 }}>
            <a href="https://github.com/Abhijitam01" className="underline-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://x.com/abhijitam_tw" className="underline-link" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
