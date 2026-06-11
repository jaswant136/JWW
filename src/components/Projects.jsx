function Projects() {
  const projects = [
    {
      title: "Restaurant Website",
      category: "Business Website",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      link: "https://rest-rosy-six.vercel.app/",
    },

    {
      title: "Gym Website",
      category: "Fitness Website",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
      link: "https://gym-five-red.vercel.app/",
    },

    {
      title: "Car Showroom Website",
      category: "Automobile Website",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
      link: "https://car-psi-ten.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="projects-section"
      data-aos="fade-up"
    >
      <div className="container">

        <div className="section-title">
          <span>PORTFOLIO</span>

          <h2>
            Featured Projects
          </h2>

          <p className="projects-subtitle">
            A selection of websites designed and developed
            to help businesses build a stronger online presence.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-btn"
                  >
                    View Project
                  </a>
                </div>

              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>
                  Modern, responsive and optimized
                  website designed for business growth.
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  Live Demo →
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;