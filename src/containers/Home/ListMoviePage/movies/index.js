import React from "react";
import { NavLink } from "react-router-dom";

export default function Movie(props) {
  const movie = props.movie;
  console.log(movie);
  return (
    <div className="containerx">
      <div className="movie-card">
        <div
          className="movie-header manOfSteel"
          style={{
            background: `url(${movie.hinhAnh})`,
            backgroundSize: "cover",
          }}
        >
          <div className="header-icon-container">
            <a href={`detail-movie/${movie.maPhim}`}>
              <i className="material-icons header-icon"></i>
            </a>
          </div>
        </div>

        <div className="movie-content">
          <div className="movie-content-header">
            <NavLink
              to={`detail-movie/${movie.maPhim}`}
              activeClassName="active"
            >
              <h3 className="movie-title">{movie.tenPhim}</h3>
            </NavLink>
          </div>
          <div className="movie-info">
            <div className="info-section">
              <label>Ngày khởi chiếu</label>
              <span>{new Date(movie.ngayKhoiChieu).toLocaleDateString()}</span>
            </div>
            <div className="info-section">
              <label>Đánh Giá</label>
              <span>{movie.danhGia} Điểm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
