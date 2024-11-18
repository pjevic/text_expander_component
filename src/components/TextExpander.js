/** @format */

import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {
  children: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  buttonColor: PropTypes.string,
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  className: PropTypes.string,
};

export default function TextExpander({
  children,
  expanded = false,
  buttonColor = "blue",
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  className = "",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const style = {
    border: "none",
    color: buttonColor,
    font: "inherit",
    backgroundColor: "transparent",
    marginLeft: "6px",
    cursor: "pointer",
  };
  const collapsedString = children.split(" ").slice(0, collapsedNumWords).join(" ");

  return (
    <div className={className}>
      <span>{!isExpanded ? `${collapsedString}...` : children}</span>
      <button style={style} onClick={() => setIsExpanded((cur) => !cur)}>
        {!isExpanded ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
}
