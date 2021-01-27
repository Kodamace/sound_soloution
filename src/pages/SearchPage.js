import React from "react";
import ArtistsList from "../components/ArtistsList";

function SearchPage() {
  return (
    <div
      style={{
        textAlign: "center",
        height: 800,
        background: "#232323",
        overflow: "auto",
      }}
    >
      <ArtistsList />
    </div>
  );
}

export default SearchPage;
