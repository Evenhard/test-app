import React, { useContext } from 'react';
import { ActivityIndicator, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../../styles';

const propTypes = {
  size: PropTypes.oneOf(['large', 'small']),
  color: PropTypes.string,
  style: ViewPropTypes.style,
};

const defaultProps = {
  size: 'large',
  color: '',
  style: {},
};

const Spinner = ({
  /**
   * size of the spinner, can be
   * 1. 'large'
   * 2. 'small'
   */
  size,
  /**
   * custom color for the spinner
   */
  color,
  /**
   * style containing padding & margin
   */
  style,
}) => {
  return (
    <ActivityIndicator
      style={style}
      size={size}
      color={color || COLORS.primaryColor}
    />
  );
};

Spinner.propTypes = propTypes;

Spinner.defaultProps = defaultProps;

export default Spinner;
