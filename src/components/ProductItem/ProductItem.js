import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import Text from '../Text/Text';
import Image from '../Image/Image';
import Card from '../Card/Card';
import {COLORS, DIMENS, SPACING} from '../../styles';
import {NAVIGATION_TO_PRODUCT_SCREEN} from '../../navigation/routes';

const propTypes = {
  product: PropTypes.any.isRequired,
};

const defaultProps = {};

const ProductItem = ({
  /**
   * Product to dispaly
   */
  product
}) => {
  const navigation = useNavigation();

  const onItemPress = () => {
    navigation.navigate(NAVIGATION_TO_PRODUCT_SCREEN, {
      product,
      title: product.name,
    });
  };

  if (product === undefined) return null;

  return (
    <Card
      type="outline"
      style={styles.container}
      onPress={onItemPress}>
      <Image
        source={{uri: product.image}}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <View style={styles.detail}>
        <Text ellipsizeMode="tail" numberOfLines={2}>
          {product.name}
        </Text>
        <Text type="label" bold style={styles.price}>
          {product.price} руб.
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DIMENS.common.WINDOW_WIDTH / 2 - 10,
    height: DIMENS.catalogGridItemHeight,
    margin: 5
  },
  imageStyle: {
    height: DIMENS.catalogGridItemImageHeight,
  },
  detail: {
    padding: SPACING.small,
    flex: 1,
    justifyContent: 'space-between',
  },
  price: {
    color: COLORS.primaryColor
  }
});

ProductItem.propTypes = propTypes;

ProductItem.defaultProps = defaultProps;

export default ProductItem;
