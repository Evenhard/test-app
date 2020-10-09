export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const PUT_PRODUCTS = "PUT_PRODUCTS";

export const putProducts = (dataFromApi) => {
    return {
        type: PUT_PRODUCTS,
        payload: dataFromApi
    }
}

export const loadProducts = (categoryId) => {
    return {
        type: LOAD_PRODUCTS,
        categoryId
    }
}
