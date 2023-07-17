import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
export default function ImageList({ list, searchTerm, handleDelete }) {
  const [hovered, setHovered] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const handleHover = (index) => {
    setHovered(index);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredList(list);
    } else {
      setFilteredList(
        list.filter((item) => {
          return item.hashtag.toLowerCase() === searchTerm.toLowerCase();
        })
      );
    }
  }, [searchTerm, list]);

  const items = filteredList.map((item, index) => {
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
        <button
          onClick={() => handleDelete(index)}
          className={`btn delete ${hovered === index ? "show" : "hide"}`}
        >
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
