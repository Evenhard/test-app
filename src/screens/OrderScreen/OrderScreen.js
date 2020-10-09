import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, GenericTemplate, TextInput} from '../../components';
import {NAVIGATION_TO_ORDER_HISTORY_SCREEN} from '../../navigation/routes';
import {isNonEmptyString, isValid} from '../../utils';
import {clearCart} from '../../store/cart/cartActions';
import {addToHistory} from '../../store/order/orderActions';
import {useDispatch} from 'react-redux';

const OrderScreen = ({route}) => {
    const {cartList, totalCost} = route.params;
    const [name, onChangeName] = React.useState('');
    const [address, onChangeAddress] = React.useState('');
    const [phone, onChangePhone] = React.useState('');
    const [isError, onError] = React.useState(false);

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const onItemPress = () => {
        if (isValid(name, address, phone)) {
            dispatch(addToHistory({cartList, totalCost}));
            dispatch(clearCart());

            navigation.navigate(NAVIGATION_TO_ORDER_HISTORY_SCREEN);
        } else {
            onError(true);
        }
    };

    return (
        <GenericTemplate scrollable={false} style={styles.container}>
            <TextInput label='Имя'
                       containerStyle={styles.input}
                       value={name}
                       onChangeText={text => onChangeName(text)}
                       errorMessage={!isNonEmptyString(name) && isError ? '* Поле обязательно к заполнению' : null}
            />
            <TextInput label='Адрес'
                       containerStyle={styles.input}
                       value={address}
                       onChangeText={text => onChangeAddress(text)}
                       errorMessage={!isNonEmptyString(address) && isError ? '* Поле обязательно к заполнению' : null}
            />
            <TextInput label='Телефон'
                       containerStyle={styles.input}
                       value={phone}
                       onChangeText={text => onChangePhone(text)}
                       errorMessage={!isNonEmptyString(phone) && isError ? '* Поле обязательно к заполнению' : null}
            />
            <Button title='Заказать'
                    style={styles.button}
                    onPress={onItemPress}
            />
        </GenericTemplate>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    input: {
        marginBottom: 15,
    },
    button: {
        alignSelf: 'center',
        width: 150,
        borderRadius: 20,
    },
});

export default OrderScreen;
