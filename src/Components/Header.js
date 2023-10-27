import { useState } from "react";
import Button from "./Button";
export default function Header({ setSearchTerm, onClick }) {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div className="logo-container">
      <div className="logo-description">
        <img src="./camera-retro-solid.svg" className="logo-image" alt="logo" />
        <h1>#Photos</h1>
      </div>
      <div className="search-container">
        <div>
          <div className="input-group">
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
        <Button
          onClick={onClick}
          className="btn btn-success btn-sm new-photo"
          text={"Add a photo"}
        />
      </div>
    </div>
  );
}
