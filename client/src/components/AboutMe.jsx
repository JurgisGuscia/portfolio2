import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutMe() {
  const aboutMeHeaderRef = useRef();
  const aboutMePRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      aboutMeHeaderRef.current,
      {
        x: -50,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: aboutMeHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      aboutMePRef.current,
      {
        x: 80,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: aboutMeHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );
  });
  return (
    <div id="aboutMePage" className="page proximity-scroll-snapping">
      <div className="aboutMe">
        <h1 ref={aboutMeHeaderRef}>
          Every master begins as a student, step by step forging his
          <span className="contrastText"> story</span>
        </h1>
        <p ref={aboutMePRef}>
          I have been interested in programming for as long as I can remember. I
          like solving problems, puzzles, finding hidden answers. So programming
          with it's challenging problems and constantly changing and improving
          technologies that not just anyone can master was love at first sight.
          Recently though I found myself fascinated by web development world.
          All the things that are possible, people that it affects and it's
          incredible future. I'm quietly confident, naturally curious, and
          perpetually working on improving my design, web development and
          problem solving skills.
        </p>
      </div>
    </div>
  );
}
