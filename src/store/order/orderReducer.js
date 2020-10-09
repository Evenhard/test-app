import AsyncStorage from "@react-native-community/async-storage";
import {ADD_TO_HISTORY, LOAD_HISTORY} from './orderActions';

const initialState = {
    historyList: [],
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_HISTORY: {
            const newHistory = state.historyList.concat(payload);
            AsyncStorage.setItem('history', JSON.stringify(newHistory));

            return {
                ...state,
                historyList: newHistory
            };
        }
        case LOAD_HISTORY: {
            return {
                ...state,
                historyList: payload
            };
        }

        default:
            return state;
    }
};
