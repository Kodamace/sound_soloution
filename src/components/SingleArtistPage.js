import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getsingleArtistDetails,
  getTop5Tracks,
} from "../features/artists/artistsSlice";
import Album from "./Album";
import Track from "./Track";

function SingleArtistPage({ match }) {
  const artistDataStatus = useSelector(
    (state) => state.artists.artistDataStatus
  );
  const laodingTracksStatus = useSelector(
    (state) => state.artists.loadingTracksStatus
  );

  const data = useSelector((state) => state.artists.artistData);
  const artistsTop5Tracks = useSelector(
    (state) => state.artists.currentArtistsTop5Tracks
  );

  const error = useSelector((state) => state.artists.error);

  const { artistId } = match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (artistDataStatus === "idle") {
      dispatch(getsingleArtistDetails(artistId));
      dispatch(getTop5Tracks(artistId));
    }
  }, []);

  let topTracks;
  let albums;

  if (laodingTracksStatus === "loading") {
    topTracks = <div className="loader">Loading...</div>;
  } else if (laodingTracksStatus === "succeeded") {
    const orderedArtistTracks = artistsTop5Tracks?.data
      .slice()
      .sort((a, b) => a.rank - b.rank);
    topTracks = orderedArtistTracks.map((track, index) => (
      <Track no={index} key={track.id} track={track} />
    ));
    albums = artistsTop5Tracks?.data.map((album, index) => (
      <Album key={index} album={album.album} />
    ));
  } else if (laodingTracksStatus === "failed") {
    topTracks = <div>{error}</div>;
  }

  if (!data) {
    return (
      <section>
        <h2>Artist not found!</h2>
      </section>
    );
  }

  const { name, picture_big, nb_fan } = data;

  return (
    <div>
      <section
        style={{
          color: "#fff",
          padding: 40,
          display: "flex",
        }}
      >
        <div>
          <div style={{ textAlign: "center", display: "flex" }}>
            <img
              style={{ height: 400 }}
              src={picture_big}
              className="_image"
              alt=""
            />
            <div
              style={{
                padding: 20,
                background: "black",
                textAlign: "left",
                borderRadius: 5,
                marginLeft: -5,
                width: 200,
              }}
            >
              <p>{name}</p>
              <p>
                Fans
                {nb_fan > 1000 && nb_fan < 10000
                  ? nb_fan?.toString().slice(0, 1) + "K"
                  : nb_fan > 10000 && nb_fan < 100000
                  ? nb_fan?.toString().slice(0, 2) + "K"
                  : nb_fan > 100000 && nb_fan < 1000000
                  ? nb_fan?.toString().slice(0, 3) + "K"
                  : nb_fan > 1000000 && nb_fan < 10000000
                  ? nb_fan?.toString().slice(0, 1) +
                    `.${nb_fan?.toString().slice(1, 2)}` +
                    "M"
                  : nb_fan > 10000000
                  ? nb_fan?.toString().slice(0, 2) +
                    `.${nb_fan?.toString().slice(2, 3)}` +
                    "M"
                  : nb_fan}
              </p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Top Tracks</h3>
          {topTracks}
        </div>
      </section>
      <div>
        <h3
          style={{
            color: "rgb(255, 255, 255)",
            position: "absolute",
            textAlign: "center",
            left: "50%",
            transform: "translateX(-50%)",
            borderBottom: "1px solid #fff",
          }}
        >
          Albums
        </h3>

        <div
          style={{
            background: "#232138",
            paddingLeft: 150,
            paddingRight: 150,
            textAlign: "center",
            justifyContent: "space-between",
            display: "flex",
            flexWrap: "wrap",
            paddingTop: 80,
            paddingBottom: 200,
          }}
        >
          {albums}
        </div>
      </div>
    </div>
  );
}

export default SingleArtistPage;
