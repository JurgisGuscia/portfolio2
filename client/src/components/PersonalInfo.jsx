import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollIntoView from "react-scroll-into-view";
export default function PersonalInfo() {
  return (
    <div className="personalInfo">
      <div className="personalInfoHeaderContainer">
        <div className="personalInfoName">Jurgis</div>
        <div className="personalInfoInfo">Full-stack web developer</div>
      </div>
      <div className="personalInfoPhoto">
        <img src="./img/me2.png"></img>
      </div>
      <div className="personalInfoEmail">
        Darius Jurgis Guščia j.d.guscia@gmail.com
      </div>
      <div className="personalInfoLinks">
        <a
          href="https://github.com/JurgisGuscia?tab=repositories"
          target="_blank"
        >
          <FontAwesomeIcon
            icon="fa-brands fa-github"
            size="xl"
            style={{ color: "#fff" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/jurgis-gu%C5%A1%C4%8Dia-a4a445289/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon="fa-brands fa-linkedin"
            size="xl"
            style={{ color: "#fff" }}
          />
        </a>
      </div>
      <div className="personalInfoHireButton">
        <ScrollIntoView selector="#connectPage" alignToTop="false">
          CONTACT ME
        </ScrollIntoView>
      </div>
    </div>
  );
}
