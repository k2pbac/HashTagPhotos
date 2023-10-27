import { useState, useEffect } from "react";
import DeletePhoto from "./DeletePhoto";
import Masonry from "react-masonry-css";
export default function ImageList({
  list,
  searchTerm,
  handleShowDelete,
  handleDeletePhoto,
  handleCloseDelete,
  showDelete,
}) {
  const [hovered, setHovered] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const handleHover = (index) => {
    setHovered(index);
  };
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    600: 2,
    500: 1,
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
          onClick={() => handleShowDelete(index)}
          className={`btn delete ${hovered === index ? "show" : "hide"}`}
        >
          delete
        </button>
        <p className={`hashtag ${hovered === index ? "show" : "hide"}`}>
          {item.hashtag}
        </p>
        <DeletePhoto
          index={index}
          handleDelete={handleDeletePhoto}
          handleClose={handleCloseDelete}
          show={showDelete === index}
        />
      </div>
    );
  });

  const listElement = items.length ? (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items}
    </Masonry>
  ) : (
    <p className="empty-list">Nothing to show...</p>
  );

  return listElement;
}
