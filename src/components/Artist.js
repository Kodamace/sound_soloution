import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExternalArtistDetails } from "../features/artists/artistsSlice";

import { ExtraDataFromDifferentRoot } from "./ExtraData";

function Artist({ id, artist }) {
  const artistStatus = useSelector((state) => state.artists.status);

  const { cover_medium } = artist.album;
  const { name } = artist.artist;

  const loadedExtraArtistsData = useSelector(
    (state) => state.artists.gettingExternalArtistDetailsStatus
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (loadedExtraArtistsData) {
      return "loaded";
    } else {
      if (artistStatus === "succeeded") {
        getExternalArtistDataForFanCount(id);
      }
    }
  }, []);

  const getExternalArtistDataForFanCount = async (id) => {
    await dispatch(getExternalArtistDetails(id));
  };

  return (
    <div style={{ textAlign: "left", marginTop: 10, color: "#fff" }}>
      <div style={{ background: "rgb(88, 60, 153)" }}>
        <img src={cover_medium} className="_image" alt="" />
        <div style={{ padding: 20 }}>
          <p>{name}</p>
          <ExtraDataFromDifferentRoot artistId={id} />
        </div>
      </div>
    </div>
  );
}

export default Artist;
