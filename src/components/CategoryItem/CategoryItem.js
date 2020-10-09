import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import Text from '../Text/Text';
import Image from '../Image/Image';
import Card from '../Card/Card';
import {DIMENS, SPACING} from '../../styles';
import {NAVIGATION_TO_PRODUCTS_LIST_SCREEN} from '../../navigation/routes';

const propTypes = {
  category: PropTypes.any.isRequired,
};

const defaultProps = {};

const CategoryItem = ({category}) => {
  const navigation = useNavigation();

  const onItemPress = () => {
    navigation.navigate(NAVIGATION_TO_PRODUCTS_LIST_SCREEN, {
      categoryId: category.id,
      title: category.name,
    });
  };

  return (
    <Card type="outline" style={styles.container} onPress={onItemPress}>
      <Image
        source={{uri: category.image}}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <View style={styles.detail}>
        <Text type="heading" ellipsizeMode="tail" numberOfLines={2} bold>
          {category.name}
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    width: DIMENS.common.WINDOW_WIDTH,
    paddingVertical: 15
  },
  imageStyle: {
    height: DIMENS.catalogGridItemImageHeight,
    width: DIMENS.catalogGridItemImageHeight,
    marginHorizontal: 15
  },
  detail: {
    padding: SPACING.small,
    flex: 1,
    justifyContent: 'space-between',
  },
});

CategoryItem.propTypes = propTypes;

CategoryItem.defaultProps = defaultProps;

export default CategoryItem;
