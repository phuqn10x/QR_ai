import React from 'react';
import PropTypes from 'prop-types'
import '../../Qrcode.css';
import FrameworkParam from "../FrameworkParam";
import {getExactValue} from "../../../utils/util";
import ParamIconSrcViewer from "../../../containers/param/disposable/ParamIconSrcViewer";

const IconParams = ({ icon, onBlur, onKeyPress }) => {
    const { enabled, src, scale } = icon;
    const components = [];

    if (getExactValue(enabled, 0) == 1) {
        components.push(
            <FrameworkParam paramName={"Icon upload"}>
                <ParamIconSrcViewer icon={icon} onChange={onBlur}/>
            </FrameworkParam>
        );
    }

    if (getExactValue(enabled, 0) != 0) {
        components.push(
            <FrameworkParam paramName={"Zoom (icon)"}>
                <input
                    type="number"
                    className="Qr-input small-input"
                    defaultValue={scale}
                    onBlur={(e) => onBlur({...icon, scale: e.target.value})}
                    onKeyPress={(e) => onKeyPress(e, {...icon, scale: e.target.value})}
                />
            </FrameworkParam>
        )
    }
    return components;
}

const ParamIcon = ({icon, onBlur, onKeyPress}) => (
    <React.Fragment>
        <FrameworkParam paramName={"Icon"}>
            <select
                className="Qr-select"
                defaultValue={icon.enabled}
                onChange={(e) => onBlur({...icon, enabled: e.target.value})}>
                <option value={0}>None</option>

                {/*<option value={2}>WeChat — Small</option>*/}

                {/*<option value={4}>WeChat Pay</option>*/}
                {/*<option value={5}>Alipay</option>*/}
                <option value={6}>Facebook</option>
                <option value={7}>Instagram</option>
                <option value={8}>WhatsApp</option>
                <option value={9}>Discord</option>
                <option value={10}>linkedin</option>
                <option value={11}>X (Twitter)</option>
                <option value={12}>TikTok</option>
                <option value={1}>Custom</option>
            </select>
        </FrameworkParam>
        <IconParams icon={icon} onBlur={onBlur} onKeyPress={onKeyPress}/>
    </React.Fragment>
)

ParamIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default ParamIcon;
