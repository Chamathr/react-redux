import { getDataActions } from "../types/dataType";

const initialState = {
    data: null,
    dataLoading: 'idle',
    dataError: null
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case getDataActions.GET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        case getDataActions.GET_DATA_LOADING:
            return {
                ...state,
                dataLoading: action.payload,
            };
        case getDataActions.GET_DATA_ERROR:
            return {
                ...state,
                dataError: action.payload,
            };
    }
}
