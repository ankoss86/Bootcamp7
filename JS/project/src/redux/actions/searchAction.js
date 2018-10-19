export const getSearchValue = (event) => {
    return {
        type: 'GET_VALUE',
        value: event.target.value,
    }
};

export const clearSearchValue = () => {
    return {
        type: 'CLEAR_INPUT',
    }
};