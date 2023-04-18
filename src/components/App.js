import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  function handleChange(e){
    setSearchQuery(e.target.value)
  }

  return (
    <div className="app">
      <Header handleChange={handleChange} searchQuery={searchQuery} />
      <ListingsContainer searchQuery={searchQuery}/>
    </div>
  );
}

export default App;
