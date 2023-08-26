import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const htmlRef = useRef();
  const cssRef = useRef();
  const jsRef = useRef();
  const reactRef = useRef();
  const nodeRef = useRef();
  const gitRef = useRef();
  const npmRef = useRef();
  const bootRef = useRef();
  const mongoRef = useRef();
  const skillHeaderRef = useRef();
  useEffect(() => {
    //HTML animation
    gsap.fromTo(
      htmlRef.current,
      {
        x: -50,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: htmlRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );
    //CSS animation
    gsap.fromTo(
      gitRef.current,
      {
        x: -30,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: htmlRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1.5,
      }
    );
    //Javascript animation
    gsap.fromTo(
      cssRef.current,
      {
        y: -50,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: htmlRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );

    //react animation
    gsap.fromTo(
      npmRef.current,
      {
        y: 50,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: htmlRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 2,
      }
    );

    //node animation
    gsap.fromTo(
      jsRef.current,
      {
        y: -30,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: htmlRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1.8,
      }
    );
    //npm animation
    gsap.fromTo(
      bootRef.current,
      {
        y: 100,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: htmlRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );
    //boot animation
    gsap.fromTo(
      reactRef.current,
      {
        y: -80,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: htmlRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1.4,
      }
    );
    //mongo animation
    gsap.fromTo(
      mongoRef.current,
      {
        x: 50,
        y: 80,
      },
      {
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: htmlRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1.5,
      }
    );
    //node animation
    gsap.fromTo(
      nodeRef.current,
      {
        y: -80,
        x: 40,
      },
      {
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: htmlRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1.5,
      }
    );
    //header animation
    gsap.fromTo(
      skillHeaderRef.current,
      {
        y: -80,
        alpha: 0.2,
      },
      {
        alpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: htmlRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1.5,
      }
    );
  }, []);

  return (
    <div id="skillsPage" className="page proximity-scroll-snapping">
      <div className="skills">
        <div className="skillContainerHeader">
          <h1 ref={skillHeaderRef}>
            My current <span className="contrastText">skills</span>
          </h1>
        </div>
        <div className="skillContainer" ref={htmlRef}>
          <div className="skillIconContainer">
            <FontAwesomeIcon
              icon="fa-brands fa-html5"
              size="2xl"
              style={{ color: "#ffffff", transform: "scale(2)" }}
            />
          </div>
          <p>HTML</p>
        </div>

        <div className="skillContainer" ref={cssRef}>
          <div className="skillIconContainer">
            <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              size="2xl"
              style={{ color: "#ffffff", transform: "scale(2)" }}
            />
          </div>
          <p>CSS</p>
        </div>

        <div className="skillContainer" ref={jsRef}>
          <div className="skillIconContainer">
            <FontAwesomeIcon
              icon="fa-brands fa-js"
              size="2xl"
              style={{ color: "#ffffff", transform: "scale(2)" }}
            />
          </div>
          <p>JS</p>
        </div>

        <div className="skillContainer" ref={reactRef}>
          <div className="skillIconContainer">
            <FontAwesomeIcon
              icon="fa-brands fa-react"
              size="2xl"
              style={{ color: "#ffffff", transform: "scale(2)" }}
            />
          </div>
          <p>React</p>
        </div>

        <div className="skillContainer" ref={nodeRef}>
          <div className="skillIconContainer">
            <FontAwesomeIcon
              icon="fa-brands fa-node"
              size="2xl"
              style={{ color: "#ffffff", transform: "scale(2)" }}
            />
          </div>
          <p>Node</p>
        </div>

        <div className="skillContainer" ref={gitRef}>
          <div className="skillIconContainer">
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              size="2xl"
              style={{ color: "#ffffff", transform: "scale(2)" }}
            />
          </div>
          <p>GitHUB</p>
        </div>

        <div className="skillContainer" ref={npmRef}>
          <div className="skillIconContainer">
            <FontAwesomeIcon
              icon="fa-brands fa-npm"
              size="2xl"
              style={{ color: "#ffffff", transform: "scale(2)" }}
            />
          </div>
          <p>NPM</p>
        </div>

        <div className="skillContainer" ref={bootRef}>
          <div className="skillIconContainer">
            <FontAwesomeIcon
              icon="fa-brands fa-bootstrap"
              size="2xl"
              style={{ color: "#ffffff", transform: "scale(2)" }}
            />
          </div>
          <p>Bootstrap</p>
        </div>

        <div className="skillContainer" ref={mongoRef}>
          <div className="skillIconContainer">
            <FontAwesomeIcon
              icon="fa-solid fa-leaf"
              size="2xl"
              style={{ color: "#ffffff", transform: "scale(2)" }}
            />
          </div>
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
}
