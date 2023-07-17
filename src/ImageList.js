import { useState } from "react";
import Masonry from "react-masonry-css";
import list from "./data.js";
export default function ImageList() {
  const [hovered, setHovered] = useState(null);
  const handleHover = (index) => {
    setHovered(index);
  };

  const items = list.map((item, index) => {
    return (
      <div
        className={`image-container`}
        key={index}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={() => handleHover(null)}
      >
        <img
          className={`${hovered === index ? "opacity" : ""}`}
          src={item.url}
          alt={item.alt}
        />
        <button className={`btn delete ${hovered === index ? "show" : "hide"}`}>
          delete
        </button>
        <p className={`hashtag ${hovered === index ? "show" : "hide"}`}>
          {item.hashtag}
        </p>
      </div>
    );
  });

  return (
    <Masonry
      breakpointCols={4}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items}
    </Masonry>
  );
}
