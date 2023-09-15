import './AboutMe.css'
function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-image">
        <img src="your-profile-picture-url.jpg" alt="Your Profile" />
      </div>
      <div className="about-me-text">
        <h2>About Me</h2>
        <p>
          Hi there! I'm [Your Name], and I'm passionate about photography.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Suspendisse potenti. Aenean at ultricies erat. Curabitur
          eget condimentum leo. Praesent in tortor nec dolor ultricies
          convallis. Integer non ex ut leo condimentum fermentum eget a odio.
          Etiam interdum nulla id odio vehicula bibendum.
        </p>
        <p>
          You can find me on:
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href="https://your-portfolio-website.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
