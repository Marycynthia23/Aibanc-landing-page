import React, { useRef } from "react";
import "./Download.css";
import { QRCodeSVG } from "qrcode.react";
import Scan from "./images/scan.png";
// import { useRef } from "react";

function Download() {
  const qrcodeRef = useRef(null);
  return (
    <div className="downloadSection" id="download">
      <div className="download">
        <div className="downloadWriteUp">
          <h3>Download Our App Today</h3>
          <p>
            Scan the QR code with your phone camera to download the Aibanc app
            from playmoney.
          </p>
        </div>

        <div className="downloadImage">
          <div
            className="qrcode"
            style={{ width: "50%", background: "white", padding: "16px" }}
          >
            <QRCodeSVG
              size="120"
              fgColor="#000"
              ref={qrcodeRef}
              value="https://play.google.com/store/apps/details?id=co.aibanc.Aibanc_APP"
            />
          </div>
          {/* <img src={Scan} alt="scan" /> */}
        </div>
      </div>
    </div>
  );
}

export default Download;
