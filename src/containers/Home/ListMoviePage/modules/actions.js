import * as ActionType from "./constants";
import { api } from "./../../../../utils/apiUtils";

export const actFetchListMovie = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP11")
      .then((result) => {
        dispatch(actListMovieSuccess(result.data.content));
      })
      .catch((err) => {
        dispatch(actListMovieFailed(err));
      });
  };
};

export const actFetchListMovie2 = (tenPhim) => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    api
      .get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP11&tenPhim=${tenPhim}`)
      .then((result) => {
        dispatch(actListMovieSuccess(result.data.content));
      })
      .catch((err) => {
        dispatch(actListMovieFailed(err));
      });
  };
};

const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (error) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: error,
  };
};
