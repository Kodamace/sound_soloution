import React, { useRef, useState } from "react";

import { Input } from "@material-ui/core";
import { searchArtistsByLetter } from "../features/artists/artistsSlice";
import { useDispatch } from "react-redux";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SearchIcon from "@material-ui/icons/Search";
import _ from "lodash";

function DelayQuery() {
  const [userQuery, setUserQuery] = useState("");
  const sendQuery = (query) => dispatch(searchArtistsByLetter(query));
  const delayedQuery = useRef(_.debounce((q) => sendQuery(q), 500)).current;
  const dispatch = useDispatch();

  const onChange = (e) => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <EqualizerIcon style={{ marginRight: 5 }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#7350c7",
          borderRadius: 5,
          padding: 5,
          height: 20,
        }}
      >
        <SearchIcon />

        <Input
          style={{ color: "white" }}
          onChange={onChange}
          placeholder="search for artists"
          inputProps={{ "aria-label": "description" }}
        />
      </div>
    </div>
  );
}

export default DelayQuery;
