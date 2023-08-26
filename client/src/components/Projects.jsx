import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectHeaderRef = useRef();
  const projectCardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      projectHeaderRef.current,
      {
        y: -80,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: projectHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      projectCardRef.current,
      {
        y: 80,
        alpha: 0.1,
      },
      {
        y: 0,
        alpha: 1,
        scrollTrigger: {
          trigger: projectHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );
  });
  return (
    <div id="projectsPage" className="page proximity-scroll-snapping">
      <div className="projects">
        <h1 ref={projectHeaderRef}>
          First <span className="contrastText">projects</span>
        </h1>
        <div className="projectCard" ref={projectCardRef}>
          <h2>
            <a href="https://www.nyxie.lt" target="_blank">
              www.nyxie.lt
            </a>
          </h2>
          <p>
            Merchandise management system for tracking codes, names, amounts,
            dates and origins of returned merchandise
          </p>

          <h3>Used technologies:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>EJS</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
          <a href="https://github.com/JurgisGuscia/Nyx" target="_blank">
            <FontAwesomeIcon
              id="gitHubIcon"
              icon="fa-brands fa-github"
              size="xl"
              style={{
                color: "#fff",
                transform: "scale(1.5)",
                marginLeft: "2px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
