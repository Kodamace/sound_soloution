import React from "react";

import "../App.css";

function Album({ album }) {
  const { title, cover_medium } = album;
  return (
    <div className="album">
      <img src={cover_medium} className="_image" alt="" />
      <div className="albumFooter">
        <p className="albumTtitle">
          {title.length > 25 ? title.slice(0, 22) + "..." : title}
        </p>
      </div>
    </div>
  );
}

export default Album;
