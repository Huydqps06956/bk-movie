import { combineReducers } from "redux";
import authReducer from "../../containers/Admin/AuthPage/modules/reducer";
import listMovieReducer from "../../containers/Home/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/Home/DetailMoviePage/modules/reducer";
import bookingTicketReducer from "../../containers/Home/BookingTicketPage/modules/reducer";
import logInReducer from "../../containers/Home/LoginPage/modules/reducer";
import signUpReducer from "../../containers/Home/SignUpPage/modules/reducer";
import thongTinRapReducer from "../../containers/Home/HomePage/modules/reducer";
import addMovieReducer from "../../containers/Admin/Film/addNewFilm/modules/reducer";
import listUserReducer from "../../containers/Admin/User/modules/reducer";
import addUserReducer from "../../containers/Admin/User/AddUser/modules/reducer";
import editMovieReducer from "../../containers/Admin/Film/EditFilm/modules/reducer";
import updateMovieReducer from "../../containers/Admin/Film/EditFilm/update/modules/reducer";
import deleteMovieReducer from "../../containers/Admin/Film/EditFilm/deleteFilm/reducer";


const rootReducer = combineReducers({
  authReducer,
  listMovieReducer,
  detailMovieReducer,
  bookingTicketReducer,
  logInReducer,
  signUpReducer,
  thongTinRapReducer,
  addMovieReducer,
  listUserReducer,
  addUserReducer,
  editMovieReducer,
  updateMovieReducer,
  deleteMovieReducer,
});

export default rootReducer;
