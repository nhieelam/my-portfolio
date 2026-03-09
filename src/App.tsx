import "./App.css";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function App() {
  return (
    <div className="container" >
      <header className="hero">
        <h1>Lâm Thái Yến Nhi</h1>
        <h2>Web Developer</h2>
        <p>
          I am a web developer passionate about building modern web applications
          with clean design and scalable architecture. I enjoy working with
          React, TypeScript, and backend technologies to create efficient and
          user-friendly solutions.
        </p>
      </header>

      <section className="section">
        <h3>Skills</h3>
        <div className="skills">
          <span>React</span>
          <span>TypeScript</span>
          <span>Spring Boot</span>
          <span>C#</span>
          <span>Python</span>
          <span>MySQL</span>
          <span>PostgreSQL</span>
        </div>
      </section>

      <section className="section">
        <h3>Projects</h3>

        <div className="project">
          <h4>Pet Shop System</h4>
          <p>
            A full-stack pet shop management platform that allows users to
            browse products, manage pet-related services, and interact with a
            modern web interface. Built using React and TypeScript for the
            frontend and Spring Boot APIs for backend services.
          </p>
          <p className="tools">
            React • TypeScript • Spring Boot • REST API • PostgreSQL
          </p>
          <a href="https://github.com/nhieelam/pet-shop">View Project</a>
        </div>

        <div className="project">
          <h4>Vietnamese RAG System</h4>
          <p>
            A Retrieval-Augmented Generation system designed to answer
            Vietnamese-language questions using document retrieval and large
            language models. The system processes documents, retrieves relevant
            content, and generates intelligent responses.
          </p>
          <p className="tools">
            Python • RAG • LLM • Streamlit • Prompt Engineering • Document
            Retrieval
          </p>
          <a href="https://github.com/nhieelam/vietnamese_rag_system">
            View Project
          </a>
        </div>

        <div className="project">
          <h4>Social Media Platform</h4>
          <p>
            A social media web application where users can create profiles,
            share posts, and interact with other users. Built with .NET backend
            services and designed to support scalable social interactions.
          </p>
          <p className="tools">.NET • C# • Web API • Database Systems</p>
        </div>
      </section>

      <section className="section">
        <h3>Contact</h3>

        <p>
          <FaEnvelope /> lam.nhiee11@gmail.com
        </p>

        <p>
          <FaPhone /> 0793472637
        </p>

        <p>
          <FaGithub />{" "}
          <a href="https://github.com/nhieelam">github.com/nhieelam</a>
        </p>
      </section>
    </div>
  );
}

export default App;