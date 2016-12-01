
import React, { PropTypes } from 'react';
import {
    View,
    Platform,
    PixelRatio
} from 'react-native';

const propTypes = {
    width: PropTypes.number,
    bgColor: PropTypes.string,
};

const LineView = ({width,bgColor}) => (<View style={{width:width,backgroundColor:bgColor}} />);

LineView.propTypes = propTypes;

LineView.defaultProps = {
    width: (Platform.OS === 'ios' ? 1.0 : 1.5) / PixelRatio.get(),
    bgColor:  '#d9d9d9',
};

export default LineView;