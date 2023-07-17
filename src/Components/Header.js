import { useState } from "react";

export default function Header({ setSearchTerm }) {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div className="logo-container">
      <div className="logo-image">
        <img src="./camera-retro-solid.svg" className="App-logo" alt="logo" />
      </div>
      <div className="logo-description">
        <h1>#Photos</h1>
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
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
