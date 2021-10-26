import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default class InfoMovie extends Component {
  render() {
    const { dataPhim } = this.props;
    console.log(dataPhim);
    return (
      <div>
        <p className="fs-lg mb-1">{dataPhim?.tenPhim}</p>
        <div className="rating d-flex justify-content-between align-items-baseline">
          <div>
          </div>
        </div>
        <div className="mt-3">
          <span className="more-info mb-1">
            {dataPhim?.moTa}
          </span>
          <br />
        </div>
        <div className="duration mt-3">
          <h6>Ngày Khởi Chiếu: </h6>
          <span>{new Date(dataPhim?.ngayKhoiChieu).toLocaleDateString()}</span>
        </div>

      </div>
    );
  }
}
