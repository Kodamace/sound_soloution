import React from "react";
import { timeConverter } from "../helpers/TimeCoverter";

function Track({ track, no }) {
  return (
    <article
      className="track"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgb(88, 60, 153)",
        marginTop: 5,
        height: 40,
        width: 280,
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft: 25,
        borderRadius: 5,
      }}
    >
      <h4>{no + 1}</h4>
      <h6>{track.title}</h6>
      <p className="track-content">{timeConverter(track.duration)}</p>
    </article>
  );
}

export default Track;
