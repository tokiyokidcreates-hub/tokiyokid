import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Full-Stack Developer & Creative Technologist</p>
        <Link to="/projects" className="cta-button">
          View My Work
        </Link>
      </section>
      
      <section className="highlights">
        <div className="highlight-card">
          <h3>Projects</h3>
          <p>Explore my latest work and contributions</p>
        </div>
        <div className="highlight-card">
          <h3>Skills</h3>
          <p>Technical expertise and technologies</p>
        </div>
        <div className="highlight-card">
          <h3>Contact</h3>
          <p>Get in touch for collaborations</p>
        </div>
      </section>
    </div>
  );
}

export default Home;