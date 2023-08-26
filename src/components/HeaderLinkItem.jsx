import React from "react";
import ScrollIntoView from "react-scroll-into-view";

export default function HeaderLinkItem(props) {
  const selector = "#" + props.target;
  return (
    <ScrollIntoView selector={selector} alignToTop="false">
      <li key={props.id} id={props.id} className="headerLinkItem">
        <span className={props.class}>{props.alt}</span>
      </li>
    </ScrollIntoView>
  );
}
