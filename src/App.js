import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <div className="logo-image">
            <img
              src="./camera-retro-solid.svg"
              className="App-logo"
              alt="logo"
            />
          </div>
          <div className="logo-description">
            <h1>Hashtag Photos</h1>
            <p>devchallenges.io</p>
          </div>
          <div className="input-group mb-3">
            <img
              className="search-icon"
              src="./magnifying-glass-solid.svg"
              alt="search-icon"
            />
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search by name"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
