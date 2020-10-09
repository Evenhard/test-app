import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Spinner from '../Spinner/Spinner';
import { COLORS } from '../../styles';

const propTypes = {
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
};

const defaultProps = {
  size: 'large',
  backgroundColor: null,
};

const LoadingView = ({
  /**
   * size of the spinner in LoadingView, can be
   * 1. 'large'
   * 2. 'small'
   */
  size,
  /**
   * background that will appear behind spinner,
   * by default: transparent
   */
  backgroundColor,
}) => {
  return (
    <View style={styles.container(backgroundColor)}>
      <Spinner size={size} />
    </View>
  );
};

const styles = {
  container: (backgroundColor) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: !backgroundColor ? COLORS.transparent : backgroundColor,
  }),
};

LoadingView.propTypes = propTypes;

LoadingView.defaultProps = defaultProps;

export default LoadingView;
