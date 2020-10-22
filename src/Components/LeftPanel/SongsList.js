import React from "react";
import ListOfSongs from "../Common/ListOfSongs";

const SongsList = () => {
  return (
    <div>
      {ListOfSongs.map((item) => (
        <div>
          <h1>{item.Name}</h1>
          <div style={{ marginLeft: "350px", marginTop: "-60px" }}>
            <h1>{item.Duration}</h1>
          </div>
          <div style={{ marginLeft: "650px", marginTop: "-50px" }}>
            <button>Play</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SongsList;
