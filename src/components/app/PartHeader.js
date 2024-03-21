import React from "react";
import '../Qrcode.css';
import InputText from "../../containers/app/InputText";
import QrbtfLogo from "../svg/QrbtfLogo";

const PartHeader = () => (
    <div className="Qr-Centered">
        <div>
            <h1 className="Qr-title">qrcode.com</h1>
        </div>
        <p className="Qr-subtitle">Application render QR-code {/* <sup className="Gray">测试版</sup>*/}</p>
        <InputText/>
    </div>
)

export default PartHeader
