import setAuthToken from "./store/setAuthToken";
import store from "./store/store";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./store/actions/authentication";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}
