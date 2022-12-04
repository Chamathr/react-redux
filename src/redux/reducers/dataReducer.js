const initialState = {
    data: null,
    dataLoading: 'idle',
    dataError: null
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                data: action.payload,
            };
        case 'GET_DATA_LOADING':
            return {
                ...state,
                dataLoading: action.payload,
            };
        case 'GET_DATA_ERROR':
            return {
                ...state,
                dataError: action.payload,
            };
    }
}
export default dataReducer;