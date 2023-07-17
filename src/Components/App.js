import { useState } from "react";
import "../Index.css";
import Header from "./Header";
import ImageList from "./ImageList";
import NewPhoto from "./NewPhoto";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <header className="app-header">
        <Header />
        <button
          onClick={handleShow}
          className="btn btn-success btn-sm new-photo"
        >
          Add a photo
        </button>
      </header>
      <ImageList />
      <NewPhoto handleClose={handleClose} handleShow={handleShow} show={show} />
    </div>
  );
}

export default App;
