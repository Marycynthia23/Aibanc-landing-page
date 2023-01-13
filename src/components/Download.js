import React from "react";
import "./Download.css";
import Scan from "./images/scan.png";

function Download() {
  return (
    <div className="downloadSection">
      <div className="download">
        <div className="downloadWriteUp">
          <h3>Download Our App Today</h3>
          <p>
            Scan the QR code with your phone camera to download the Aibanc app
            from playmoney.
          </p>
        </div>

        <div className="downloadImage">
          <img src={Scan} alt="scan" />
        </div>
      </div>
    </div>
  );
}

export default Download;
