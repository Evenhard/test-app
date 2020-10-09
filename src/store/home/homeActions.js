export const LOAD_CATEGORIES = "LOAD_CATEGORIES";
export const PUT_CATEGORIES = "PUT_CATEGORIES";

export const putCategories = (dataFromApi) => {
    return {
        type: PUT_CATEGORIES,
        payload: dataFromApi
    }
}

export const loadCategories = () => {
    return {
        type: LOAD_CATEGORIES
    }
}
