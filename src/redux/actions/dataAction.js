import { getDataActions } from "../types/dataType";

export const getData = (data) => {
  return {
    type: getDataActions.GET_DATA,
    data,
  };
};

export const getDataError = (data) => {
  return {
    type: getDataActions.GET_DATA_ERROR,
    data,
  };
};