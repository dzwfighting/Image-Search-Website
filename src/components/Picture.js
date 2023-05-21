import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
        <p>Downoad picture</p>
        <p>
          download website: <a target="_blank" href="{data.src.large"></a>
        </p>
      </div>
    </div>
  );
};

export default Picture;
