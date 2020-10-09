import React, { useContext } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  HeaderButtons as HBS,
  HeaderButton as HB,
  Item,
} from 'react-navigation-header-buttons';
import { COLORS, DIMENS } from '../../styles';

const HeaderButton = props => {
  return (
    <HB
      IconComponent={MaterialIcons}
      iconSize={DIMENS.common.iconSize}
      color={COLORS.appbar.tintColor}
      {...props}
    />
  );
};

const HeaderButtons = props => {
  return (
    <HBS
      HeaderButtonComponent={HeaderButton}
      OverflowIcon={
        <MaterialIcons
          name="more-vert"
          size={DIMENS.common.iconSize}
          color={COLORS.appbar.tintColor}
        />
      }
      {...props}
    />
  );
};

HeaderButtons.Item = Item;

export default HeaderButtons;
