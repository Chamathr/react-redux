import { getDataApi } from "../services/dataService";
import { getDataTypes } from "../types/dataType";

export const getData = () => async (dispatch) => {
    try {
      const data = await getDataApi();
      dispatch({
        type: getDataTypes.GET_DATA,
        payload: data?.data?.data,
      });
    } catch (error) {
      dispatch({
        type: getDataTypes.GET_DATA_ERROR,
        payload: error?.response?.message,
      });
    }
  };