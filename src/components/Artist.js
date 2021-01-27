import React, { useEffect } from "react";
import "../App.css";

import { useDispatch, useSelector } from "react-redux";
import { getExternalArtistDetails } from "../features/artists/artistsSlice";

import styled from "styled-components";

import { ExtraDataFromDifferentRoot } from "./ExtraData";

const ArtistInfo = styled.div`
  background-color: rgb(88, 60, 153);
  margin-bottom: 20px;
`;
const ArtistInfoSpacing = styled.div`
  padding: 20px;
`;

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
    <div className="artistStyle">
      <ArtistInfo>
        <img src={cover_medium} className="_image" alt="" />
        <ArtistInfoSpacing>
          <p>{name}</p>
          <ExtraDataFromDifferentRoot artistId={id} />
        </ArtistInfoSpacing>
      </ArtistInfo>
    </div>
  );
}

export default Artist;
