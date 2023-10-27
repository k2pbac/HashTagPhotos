import { useState } from "react";
import "../Index.css";
import Header from "./Header";
import ImageList from "./ImageList";
import NewPhoto from "./NewPhoto";
import list from "../data.js";

function App() {
  const [showNew, setShowNew] = useState(false);
  const [showDelete, setShowDelete] = useState(null);
  const [data, setData] = useState(list);
  const [searchTerm, setSearchTerm] = useState("");
  const handleCloseNew = () => setShowNew(false);
  const handleShowNew = () => setShowNew(true);
  const handleCloseDelete = () => setShowDelete(null);
  const handleShowDelete = (index) => setShowDelete(index);
  const myPassword = "123456";
  const handleAddPhoto = (label, url) => {
    setData([{ hashtag: label, url: url, alt: label }, ...data]);
    handleCloseNew();
  };

  const handleDeletePhoto = (index, password) => {
    if (password !== myPassword) {
      alert("Wrong password!");
      return;
    }
    console.log(data);
    const newData = data.filter((item, i) => {
      console.log(i, index);
      return i !== index;
    });
    handleCloseDelete(index);
    console.log(newData);
    setData(newData);
  };

  return (
    <div className="App">
      <header className="app-header">
        <Header setSearchTerm={setSearchTerm} onClick={handleShowNew} />
      </header>
      <ImageList
        list={data}
        searchTerm={searchTerm}
        handleShowDelete={handleShowDelete}
        handleDeletePhoto={handleDeletePhoto}
        handleCloseDelete={handleCloseDelete}
        showDelete={showDelete}
      />
      <NewPhoto
        handleAddPhoto={handleAddPhoto}
        handleClose={handleCloseNew}
        show={showNew}
      />
      <footer className="footer">
        <p>
          Created by <strong className="username">Kris Bachan</strong> -
          devChallenges.io{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
