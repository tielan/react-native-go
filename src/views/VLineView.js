
import React, { PropTypes } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    bgColor: PropTypes.string,
};

class VLineView extends React.Component {
    render() {
        let lineStyle = {};
        let _height = this.props.height;
        let _bgColor = this.props.bgColor;
        if (_height) {
            lineStyle.height = _height;
        } 
        lineStyle.backgroundColor = _bgColor ? _bgColor : '#d9d9d9';
        return <View style={[lineStyle,this.props.style]} />;
    }
}

export default VLineView;