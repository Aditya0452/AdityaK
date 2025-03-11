import React from "react";
import "./Home.css";
import profilePic from "../assets/profile.jpg";

function Home() {
  return (
    <div className="container">
      <header className="sticky-header">
        <img src={profilePic} alt="Aditya K" className="profile-pic" />
        <div className="name-title">
          <h1>Aditya K</h1>
          <p>Full Stack Developer | Electronics Engineer</p>
        </div>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Passionate developer with expertise in Android, Web, and AI tools.</p>
      </section>

      <section id="professional">
        <h2>Professional</h2>
        <p>B.Tech in Electronics and Communication Engineering (ECE), skilled in software development.</p>
      </section>

      <section id="education">
        <h2>Education</h2>
        <p>B.Tech in ECE - Graduated in 2024.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-container">
          <div className="box">
            <h3>Core Projects</h3>
            <p>Project 1: Smart Water Ordering System</p>
            <p>Project 2: IoT-based Monitoring</p>
          </div>
          <div className="box">
            <h3>Developer Projects</h3>
            <p>Project 1: E-Commerce App</p>
            <p>Project 2: AI Chatbot</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:kudipudiaditya@gmail.com" className="clickable">kudipudiaditya@gmail.com</a></p>
        <p>Phone: <a href="tel:+917993923666" className="clickable">7993923666</a></p>
        <p><a href="https://www.linkedin.com/in/aditya" target="_blank" className="clickable">LinkedIn</a></p>
        <p><a href="https://github.com/aditya" target="_blank" className="clickable">GitHub</a></p>
        <p><a href="https://instagram.com/aditya" target="_blank" className="clickable">Instagram</a></p>
        <p><a href="https://wa.me/917993923666" target="_blank" className="clickable">WhatsApp</a></p>
      </section>

      <footer>
        <p>© 2025 Aditya K | Portfolio</p>
      </footer>
    </div>
  );
}

export default Home;
