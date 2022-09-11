import React from "react";

const GiphyCard = ({ dataToRender, wordsToSearch }) => {
  console.log(dataToRender);
  return (
    <div
      className="giphy-card"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="giphy-image">
        <img
          src={`${dataToRender?.images?.downsized?.url}`}
          alt="gif"
          width={300}
          height={300}
        />
      </div>
      <div
        className="giphy-text"
        style={{ marginTop: "11%", marginLeft: "10px" }}
      >
        {wordsToSearch}
      </div>
    </div>
  );
};

export default GiphyCard;
