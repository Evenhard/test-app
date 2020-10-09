import React, { useContext } from 'react';
import {
  View,
  Platform,
  StyleSheet,
  ViewPropTypes,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import { COLORS, DIMENS } from '../../styles';

const OUTLINE = 'outline';
const CLEAR = 'clear';
const SHADOW = 'shadow';

const TouchReceptor =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const propTypes = {
  type: PropTypes.oneOf([CLEAR, OUTLINE, SHADOW]),
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
  children: PropTypes.any.isRequired,
};

const defaultProps = {
  type: OUTLINE,
  style: {},
  onPress: null,
};

const Card = ({
  /**
   * type can be
   * 1. 'outline' : border with width
   * 2. 'clear'   : no border, no shadow
   * 3. 'shadow'  : with shadow
   */
  type,
  /**
   * Custom style property for Card
   */
  style,
  /**
   * Action to perform on Card click
   */
  onPress,
  /**
   * Children to render inside Card
   */
  children,
}) => {
  const ViewGroup = onPress ? TouchReceptor : View;
  const shadow = type === SHADOW ? shadowStyle : {};

  return (
    <ViewGroup onPress={onPress}>
      <View
        style={StyleSheet.flatten([
          styles.container(type),
          shadow,
          style,
        ])}
      >
        {children}
      </View>
    </ViewGroup>
  );
};

const shadowStyle = {
  shadowColor: COLORS.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
};

const styles = {
  container: ( type ) => ({
    flex: 1,
    borderWidth: type === OUTLINE ? DIMENS.common.borderWidth : 0,
    borderColor: COLORS.borderColor,
    borderRadius: DIMENS.common.borderRadius,
    backgroundColor: COLORS.surfaceColor,
  }),
};

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Card;
