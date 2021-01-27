import React from "react";

import { getAllArtists } from "../features/artists/artistsSlice";
import { useSelector } from "react-redux";
import Artist from "../components/Artist";
import { Link } from "react-router-dom";

function ArtistsList() {
  const artists = useSelector(getAllArtists).data;
  const artistView = useSelector((state) => state.artists.artistsViewable);

  const renderArtists = artists?.map((artist) => (
    <Link key={artist.id} to={`/artist/${artist.artist.id}`}>
      <Artist artist={artist} id={artist.artist.id} />
    </Link>
  ));

  return (
    <div>
      {artistView && artists?.length > 0 ? (
        <div
          style={{
            background: "#232323",
            paddingLeft: 250,
            paddingRight: 250,
            textAlign: "center",
            justifyContent: "space-between",
            display: "flex",
            flexWrap: "wrap",
            paddingTop: 80,
          }}
        >
          {renderArtists}
        </div>
      ) : (
        <h3
          style={{
            background: "#232323",
            color: "white",
            textAlign: "center",
            paddingTop: 80,
          }}
        >
          Search to find artists
        </h3>
      )}
    </div>
  );
}

export default ArtistsList;
