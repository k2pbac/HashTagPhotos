import "./Index.css";
import Header from "./Header";
import ImageList from "./ImageList";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Header />
        <button className="btn btn-success btn-sm new-photo">
          Add a photo
        </button>
      </header>
      <ImageList />
    </div>
  );
}

export default App;
