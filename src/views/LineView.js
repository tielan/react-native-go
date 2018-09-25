
import React, { PropTypes } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';



class LineView extends React.Component {

    render() {
        let lineStyle = {};
        let _witdth = this.props.width;
        let _height = this.props.height;
        let _bgColor = this.props.bgColor;
        if (!_witdth && !_height) {
            lineStyle.width = StyleSheet.hairlineWidth;
        } else {
            lineStyle.height = _height ? _height : StyleSheet.hairlineWidth;
            lineStyle.width = _witdth ? _witdth : StyleSheet.hairlineWidth;
        }
        lineStyle.backgroundColor = _bgColor ? _bgColor : '#d9d9d9';
        return <View style={[lineStyle,this.props.style]} />;
    }
}
export default LineView;