import React,{useRef} from 'react'
import { QRCodeSVG } from "qrcode.react"
import "./DownloadCont.css"

const DownloadCont = () => {
    const qrcodeRef = useRef(null);

  return (
    <div>
       <section className="downloadCont">
        <div className="content">
        <p className='downloadHeadline'>Download Our App Today</p>
        <p className="subtext">Scan the QR code with
         your phone camera to download the Aibanc app
          from playmoney</p>
        </div>
        <div style={{ background: "white", padding: '16px' }}>
        <QRCodeSVG size="250" fgColor="#000" ref={qrcodeRef} />
      </div>
       </section>
    </div>
  )
}

export default DownloadCont