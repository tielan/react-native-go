
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

class HLineView extends React.Component {
    render() {
        let lineStyle = {};
        let _witdth = this.props.width;
        let _bgColor = this.props.bgColor;
        if (_witdth) {
            lineStyle.width = _witdth;
        } 
        lineStyle.backgroundColor = _bgColor ? _bgColor : '#d9d9d9';
        return <View style={[lineStyle,this.props.style]} />;
    }
}

export default HLineView;