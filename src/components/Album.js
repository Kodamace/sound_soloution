import React from "react";

import "../App.css";

function Album({ album }) {
  const { title, cover_medium } = album;
  return (
    <div className="album">
      <img src={cover_medium} className="_image" alt="" />
      <div className="album_footer">
        <p className="album_title">
          {title.length > 25 ? title.slice(0, 22) + "..." : title}
        </p>
      </div>
    </div>
  );
}

export default Album;
