import React from 'react';
import './mainsection.css';

const heroCards = [
  {
    title: 'AI & Analytics',
    description: 'Build smarter systems with IBM Watson.',
    link: '#',
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Scale with IBM Cloud solutions.',
    link: '#',
  },
  {
    title: 'Security & Compliance',
    description: 'Protect your data and systems.',
    link: '#',
  },
];

export default function MainSection() {
  return (
    <section className="main-section">
      <div className="hero-banner">
        <div className="hero-text">
                    <h1>This is sample Main Section </h1>

          <h1>Welcome to IBM Digital Experience</h1>
          
          <p>Accelerate innovation with AI, cloud, and data expertise.</p>
          <button className="hero-cta">Get Started</button>
        </div>
      </div>

      <div className="feature-cards">
        {heroCards.map((card) => (
          <div key={card.title} className="feature-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.link} className="card-link">Explore →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
