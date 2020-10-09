import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {HistoryItem, GenericTemplate, NoItems} from '../../components';

const OrderHistoryScreen = ({historyList}) => {
    const renderRow = ({item}) => <HistoryItem historyItem={item}/>;

    if (historyList.length === 0) {
        return (<NoItems text={'Ваша история заказов пуста...'}/>);
    }

    return (
        <GenericTemplate scrollable={false}>
            <FlatList
                data={historyList}
                renderItem={renderRow}
                contentContainerStyle={styles.container}
                keyExtractor={(item, index) => String(index)}
            />
        </GenericTemplate>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
});

OrderHistoryScreen.propTypes = {
    historyList: PropTypes.array.isRequired,
};

OrderHistoryScreen.defaultProps = {
    historyList: [],
};

const mapStateToProps = ({order}) => {
    const {historyList} = order;
    return {
        historyList,
    };
};

export default connect(mapStateToProps)(OrderHistoryScreen);
