import { getDataActions } from "../types/dataType";

export const getData = (payload) => {
  return {
    type: getDataActions.GET_DATA,
    payload,
  };
};

export const setData = (payload) => {
  return {
    type: getDataActions.SET_DATA,
    payload,
  };
};

export const getDataError = (payload) => {
  return {
    type: getDataActions.GET_DATA_ERROR,
    payload,
  };
};