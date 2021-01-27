import React from "react";

import { useSelector } from "react-redux";

export const ExtraDataFromDifferentRoot = ({ artistId }) => {
  const data = useSelector((state) =>
    state.artists.externalArtistsDetailsForFanCount.find(
      (artist) => artist.id === artistId
    )
  );

  return (
    <span>
      {data ? (
        <p>
          Fans count
          {data.nb_fan > 1000 && data.nb_fan < 10000
            ? " " + data.nb_fan?.toString().slice(0, 1) + "K"
            : data.nb_fan > 10000 && data.nb_fan < 100000
            ? " " + data.nb_fan?.toString().slice(0, 2) + "K"
            : data.nb_fan > 100000 && data.nb_fan < 1000000
            ? " " + data.nb_fan?.toString().slice(0, 3) + "K"
            : data.nb_fan > 1000000 && data.nb_fan < 10000000
            ? " " +
              data.nb_fan?.toString().slice(0, 1) +
              `.${data.nb_fan?.toString().slice(1, 2)}` +
              "M"
            : data.nb_fan > 10000000
            ? " " +
              data.nb_fan?.toString().slice(0, 2) +
              `.${data.nb_fan?.toString().slice(2, 3)}` +
              "M"
            : data.nb_fan}
        </p>
      ) : (
        "Unknown amount"
      )}{" "}
    </span>
  );
};
