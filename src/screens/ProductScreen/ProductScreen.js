import React from 'react';
import {GenericTemplate, Image, Text} from '../../components';
import {StyleSheet, View} from 'react-native';
import {COLORS, DIMENS, SPACING} from '../../styles';

const ProductScreen = ({route}) => {
    const {product} = route.params;
    return (
        <GenericTemplate scrollable>
            <Image
                source={{uri: product.image}}
                style={styles.imageStyle}
                resizeMode="contain"
            />
            <View style={styles.detail}>
                <View style={styles.detailRight}>
                    <Text type="heading" ellipsizeMode="tail" numberOfLines={2}>
                        {product.name}
                    </Text>
                    <Text type="heading" bold style={styles.price}>
                        {product.price} руб.
                    </Text>
                </View>
                <View style={styles.properties}>
                    <Text type="label" bold>
                        Свойства:
                    </Text>
                    {product.properties.map((item, index) => (
                        <Text ellipsizeMode="tail" numberOfLines={1} key={index}>
                            - {item}
                        </Text>
                    ))}
                </View>
            </View>
        </GenericTemplate>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.backgroundColor,
    },
    imageStyle: {
        height: DIMENS.productDetailPageSliderHeight,
    },
    detail: {
        padding: SPACING.small,
        flex: 1,
        justifyContent: 'space-between',
    },
    detailRight: {
        marginTop: 5,
    },
    properties: {
        marginVertical: 5,
    },
    price: {
        color: COLORS.primaryColor
    }
});

export default ProductScreen;
