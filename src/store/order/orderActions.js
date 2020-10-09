export const ADD_TO_HISTORY = "ADD_TO_HISTORY";
export const LOAD_HISTORY = "LOAD_HISTORY";


export const addToHistory = (cart) => {
    return {
        type: ADD_TO_HISTORY,
        payload: cart
    }
}

export const loadHistory = (history) => {
    return {
        type: LOAD_HISTORY,
        payload: history
    }
}
