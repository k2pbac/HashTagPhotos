import { useState } from "react";
import "../Index.css";
import Header from "./Header";
import ImageList from "./ImageList";
import NewPhoto from "./NewPhoto";
import list from "../data.js";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(list);
  const [searchTerm, setSearchTerm] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddPhoto = (label, url) => {
    setData([{ hashtag: label, url: url, alt: label }, ...data]);
    handleClose();
  };

  return (
    <div className="App">
      <header className="app-header">
        <Header setSearchTerm={setSearchTerm} />
        <button
          onClick={handleShow}
          className="btn btn-success btn-sm new-photo"
        >
          Add a photo
        </button>
      </header>
      <ImageList list={data} searchTerm={searchTerm} />
      <NewPhoto
        handleAddPhoto={handleAddPhoto}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
    </div>
  );
}

export default App;
