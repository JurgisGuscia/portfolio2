import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export default function Home(props) {
  const homeHeaderRef = useRef();
  const homePRef = useRef();
  const homeExpRef = useRef();
  const homeProjectsRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      homeHeaderRef.current,
      {
        x: -50,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: homeHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      homePRef.current,
      {
        x: 80,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: homeHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      homeExpRef.current,
      {
        y: 60,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: homeHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      homeProjectsRef.current,
      {
        y: 90,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: homeHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1.4,
      }
    );
  });
  return (
    <div id="homePage" className="page proximity-scroll-snapping">
      <div className="home">
        <h1 ref={homeHeaderRef}>
          Hello from <span className="contrastText">Jurgis</span>, Full-stack
          web developer
        </h1>
        <p ref={homePRef}>
          I design and develop modern and interactive web apps. And I love what
          I do.
        </p>
        <div className="additionalInfoContainer">
          <div className="additionalInfo" ref={homeExpRef}>
            <h1>
              <span className="contrastText">1</span>
            </h1>
            <p>YEAR OF EXPERIENCE</p>
          </div>
          <div className="additionalInfo" ref={homeProjectsRef}>
            <h1>
              <span className="contrastText">2</span>
            </h1>
            <p>COMPLETED PROJECTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
