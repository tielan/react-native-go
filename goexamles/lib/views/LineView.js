
import React, { PropTypes } from 'react';
import {
    View,
    Platform,
    PixelRatio
} from 'react-native';

const propTypes = {
    height: PropTypes.number,
    bgColor: PropTypes.string,
};

const LineView = ({height,bgColor}) => (<View style={{height:height,backgroundColor:bgColor}} />);

LineView.propTypes = propTypes;

LineView.defaultProps = {
    height: (Platform.OS === 'ios' ? 1.0 : 1.5) / PixelRatio.get(),
    bgColor:  '#d9d9d9',
};

export default LineView;