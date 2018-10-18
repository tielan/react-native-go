
import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';


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