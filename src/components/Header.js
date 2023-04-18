import React from "react";
import Search from "./Search";

function Header({ handleChange, searchQuery}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleChange={handleChange} searchQuery={searchQuery} />
    </header>
  );
}

export default Header;
