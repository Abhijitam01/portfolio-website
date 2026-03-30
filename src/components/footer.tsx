export function Footer() {
  return (
    <footer className="footer-section">
      <div className="container" style={{ position: "relative", zIndex: 20 }}>
        <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.6 }}>
          <p className="footer-text">© 2026 Abhijitam Dubey</p>
          <div className="footer-links" style={{ display: 'flex', gap: '2rem' }}>
            <a href="https://github.com/Abhijitam01" className="underline-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://x.com/abhijitam_tw" className="underline-link" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
