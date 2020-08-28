import React from "react";
import "./FaceRecognititon.css";

const FaceRecognititon = ({ imageUrl, box }) => {
  return (
    <div className="center">
      <div className="centerImage">
        <div className="absolute mt5">
          <img id="inputImage" src={imageUrl} alt="" />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognititon;
