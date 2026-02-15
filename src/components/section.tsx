interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="section-minimal">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="section-content">
          {children}
        </div>
        <hr className="section-divider" aria-hidden="true" />
      </div>
    </section>
  );
}
