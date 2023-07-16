import "./Index.css";
import Header from "./Header";
import Masonry from "react-masonry-css";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Header />
        <button className="btn btn-success btn-sm new-photo">
          Add a photo
        </button>
      </header>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div>
          <img src="./image1.jpg" alt="image1" />
        </div>
        <div>
          <img src="./image2.jpg" alt="image2" />
        </div>
        <div>
          <img src="./image3.jpg" alt="image3" />
        </div>
        <div>
          <img src="./image1.jpg" alt="image1" />
        </div>
        <div>
          <img src="./image2.jpg" alt="image2" />
        </div>
        <div>
          <img src="./image3.jpg" alt="image3" />
        </div>
        <div>
          <img src="./image1.jpg" alt="image1" />
        </div>
        <div>
          <img src="./image2.jpg" alt="image2" />
        </div>
        <div>
          <img src="./image3.jpg" alt="image3" />
        </div>
      </Masonry>
    </div>
  );
}

export default App;
