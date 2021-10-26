import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actLogout } from "../../LoginPage/modules/actions";

class HeaderComponent extends Component {

  render() {
    return (
      <header>
        <div
          className="header-bottom"
          style={{ backgroundColor: `rgb(31, 37, 51)` }}
        >
          <div className="container">
            <div className="row d-flex justify-content-between  align-items-baseline">
              <nav className="navbar navbar-expand-lg navbar-light">
                <button
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faBars}
                    style={{ color: `rgb(248, 68, 100)` }}
                  />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo01"
                >
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active mx-2">
                      <NavLink
                        id="menu"
                        exact
                        activeClassName="active"
                        className="nav-link"
                        to="/"
                      >
                        Trang chủ
                      </NavLink>
                    </li>

                    <li className="nav-item mx-2">
                      <NavLink
                        id="menu"
                        activeClassName="active"
                        className="nav-link"
                        to="/mypage"
                      >
                        Tài khoản
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (history) => {
      dispatch(actLogout(history));
    },
  };
};

const ConnectedComponent = connect(null, mapDispatchToProps)(HeaderComponent);
export default withRouter(ConnectedComponent);
