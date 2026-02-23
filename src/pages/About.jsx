import React from 'react';
import '../styles/pages/About.css';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <section className="bio">
          <h2>Hello! I'm a Developer</h2>
          <p>
            Welcome to my portfolio. I'm a passionate developer with expertise in 
            building modern web applications. I love turning ideas into reality through code.
          </p>
          <p>
            With experience in full-stack development, I specialize in creating 
            responsive, user-friendly applications that solve real-world problems.
          </p>
        </section>

        <section className="skills">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>CSS3 / Sass</li>
                <li>HTML5</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>SQL / MongoDB</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git / GitHub</li>
                <li>REST APIs</li>
                <li>Responsive Design</li>
                <li>Web Performance</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;