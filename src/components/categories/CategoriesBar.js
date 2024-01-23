import React, { useState } from "react";
import "./CategoriesBar.scss";

const keywords = [
  "All",
  "Reactjs",
  "Malayalam songs",
  "HTML",
  "Javascript",
  "Cricket",
  "IPLT20",
  "Television Drama",
  "Node js",
  "New to you",
  "Live",
  "News",
  "Recently Uploaded",
  "Watched",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <>
      <div className="categoriesBar">
        {keywords.map((value, i) => (
          <span
            onClick={() => handleClick(value)}
            key={i}
            className={activeElement === value ? "active" : ""}>
            {value}
          </span>
        ))}
      </div>
    </>
  );
};

export default CategoriesBar;
