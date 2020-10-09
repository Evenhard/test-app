import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../../styles';
import Text from '../Text/Text';

const propTypes = {
    text: PropTypes.string,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
    ]),
};

const defaultProps = {
    text: '',
    style: {},
};

const NoItems = ({
 /**
  * text to show
  */
 text,
 /**
  * @style prop will overwrite the predefined styling for Text defined by
  * @type prop
  */
 style
}) => {
    return (
        <View style={styles.container}>
            <Text style={style}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        margin: 10
    }
});

NoItems.propTypes = propTypes;

NoItems.defaultProps = defaultProps;

export default NoItems;
