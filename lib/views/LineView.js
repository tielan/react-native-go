
import React, { propTypes } from 'react';
import {
    View,
    Platform,
    PixelRatio
} from 'react-native';

const propTypes = {
    style: View.propTypes.style,
};

const LineView = () => (<View style={[styles.base, style]} />);

const styles = StyleSheet.create({
    base: {
        width: (Platform.OS === 'ios' ? 1.0 : 1.5) / PixelRatio.get(),
        backgroundColor:'#d9d9d9',
    },
});
LineView.propTypes = propTypes;

LineView.defaultProps = {

};

export default LineView;