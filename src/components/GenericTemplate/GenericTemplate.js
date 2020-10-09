import React from 'react';
import {
  ScrollView,
  View,
  ViewPropTypes,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import {COLORS} from '../../styles';

const propTypes = {
  children: PropTypes.any.isRequired,
  footer: PropTypes.element,
  scrollable: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
};

const defaultProps = {
  style: {},
  footer: <></>,
};

const GenericTemplate = ({
  children,
  footer,
  /**
   * If set true, `ScrollView` would be root element
   * rather than normal `View`
   */
  scrollable,
  style,
}) => {
  const ViewGroup = scrollable ? ScrollView : View;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={COLORS.appbar.barStyle}
        backgroundColor={COLORS.appbar.statusBarColor}
      />
      <ViewGroup style={[styles.content, style]}>{children}</ViewGroup>
      {footer}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  content: {
    flex: 1,
  },
});

GenericTemplate.propTypes = propTypes;

GenericTemplate.defaultProps = defaultProps;

export default GenericTemplate;
