import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export default function Connect() {
  const connectHeaderRef = useRef();
  const connectEmailRef = useRef();
  const connectNameLabelRef = useRef();
  const connectNameInputRef = useRef();
  const connectEmailLabelRef = useRef();
  const connectEmailInputRef = useRef();
  const connectMessageLabelRef = useRef();
  const connectMessageInputRef = useRef();
  const connectButtonRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      connectHeaderRef.current,
      {
        y: 50,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: connectHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      connectEmailRef.current,
      {
        y: 30,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: connectHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1.3,
      }
    );

    gsap.fromTo(
      connectMessageLabelRef.current,
      {
        alpha: 0,
      },
      {
        alpha: 1,
        scrollTrigger: {
          trigger: connectHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      connectNameLabelRef.current,
      {
        alpha: 0,
      },
      {
        alpha: 1,
        scrollTrigger: {
          trigger: connectHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      connectEmailLabelRef.current,
      {
        alpha: 0,
      },
      {
        alpha: 1,
        scrollTrigger: {
          trigger: connectHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      connectNameInputRef.current,
      {
        x: 100,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: connectHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1.2,
      }
    );

    gsap.fromTo(
      connectEmailInputRef.current,
      {
        x: 70,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: connectHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      connectMessageInputRef.current,
      {
        x: 30,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: connectHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 2,
      }
    );

    gsap.fromTo(
      connectButtonRef.current,
      {
        y: 70,
        alpha: 0.2,
      },
      {
        y: 0,
        alpha: 1,
        scrollTrigger: {
          trigger: connectHeaderRef.current,
          toggleActions: "restart none restart none",
        },
        duration: 1,
      }
    );
  });

  return (
    <div id="connectPage" className="page proximity-scroll-snapping">
      <div className="connect">
        <h1 ref={connectHeaderRef}>
          Let's <span className="contrastText">connect </span>!
        </h1>
        <h2 ref={connectEmailRef}>j.d.guscia@gmail.com</h2>
        <form action="/" method="post">
          <label htmlFor="author" ref={connectNameLabelRef}>
            FULL NAME <span className="redText">*</span>
          </label>
          <input
            name="author"
            type="text"
            className="shortFormInput"
            placeholder="Your full name"
            autoComplete="off"
            ref={connectNameInputRef}
          ></input>

          <label htmlFor="email" ref={connectEmailLabelRef}>
            EMAIL <span className="redText">*</span>
          </label>
          <input
            name="email"
            type="text"
            className="shortFormInput"
            placeholder="Your email"
            autoComplete="off"
            ref={connectEmailInputRef}
          ></input>

          <label htmlFor="message" ref={connectMessageLabelRef}>
            MESSAGE <span className="redText">*</span>
          </label>
          <textarea
            name="message"
            type="text"
            className="formTextArea"
            placeholder="Your message"
            autoComplete="off"
            ref={connectMessageInputRef}
          ></textarea>
          <button
            type="submit"
            name="post"
            id="submitFormButton"
            className="personalInfoHireButton"
            ref={connectButtonRef}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
