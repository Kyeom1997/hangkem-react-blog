import React from 'react';

type LayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className="layout">
      <header className="layout__hero">
        <div className="layout__hero-content">
          <p className="layout__eyebrow">Hangkem React Blog</p>
          <h1>{title}</h1>
          {subtitle ? <p className="layout__subtitle">{subtitle}</p> : null}
        </div>
      </header>
      <main className="layout__content" aria-live="polite">
        {children}
      </main>
    </div>
  );
};
