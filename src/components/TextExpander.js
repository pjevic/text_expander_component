/** @format */

import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {
  children: PropTypes.string,
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
  const [isOpen, setIsOpen] = useState(expanded);

  const style = { color: buttonColor };
  const collapsedString = children.split(" ").slice(0, collapsedNumWords).join(" ");

  return (
    <div className={className}>
      {!isOpen ? `${collapsedString}...` : children} &nbsp;
      <span role="button" style={style} onClick={() => setIsOpen((cur) => !cur)}>
        {!isOpen ? expandButtonText : collapseButtonText}
      </span>
    </div>
  );
}
