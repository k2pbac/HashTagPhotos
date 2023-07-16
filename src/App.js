import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Header />
        <button className="btn btn-success btn-sm new-photo">
          Add a photo
        </button>
      </header>
    </div>
  );
}

export default App;
