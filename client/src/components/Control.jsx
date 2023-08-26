import HeaderLinkItem from "./HeaderLinkItem";

export default function Control() {
  return (
    <div className="controlContainer">
      <ul className="controlList">
        <HeaderLinkItem
          name="HOME"
          id="homePageLink"
          target="homePage"
          class="material-symbols-outlined"
          alt="Home"
        />
        <HeaderLinkItem
          name="ABOUT ME"
          id="aboutMePageLink"
          target="aboutMePage"
          class="material-symbols-outlined"
          alt="Person"
        />
        <HeaderLinkItem
          name="SKILLS"
          id="skillsPageLink"
          target="skillsPage"
          class="material-symbols-outlined"
          alt="Design_services"
        />
        <HeaderLinkItem
          name="PROJECTS"
          id="projectsPageLink"
          target="projectsPage"
          class="material-symbols-outlined"
          alt="Fact_check"
        />
        <HeaderLinkItem
          name="CONNECT"
          id="connectPageLink"
          target="connectPage"
          class="material-symbols-outlined"
          alt="Mail"
        />
      </ul>
    </div>
  );
}
