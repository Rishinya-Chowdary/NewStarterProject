import React from "react";
import SongsList from "./Components/LeftPanel/SongsList";
import SongsDetails from "./Components/RightPanel/SongsDetails";
import "../src/Styled/App.css";

function App() {
  return (
    <div className="container">
      <SongsList />
      <SongsDetails />
    </div>
  );
}

export default App;
