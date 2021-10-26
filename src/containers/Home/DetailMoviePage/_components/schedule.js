import React from "react";
import Tab from "./tab";
import InfoMovie from "./infomovie";

export default function Schedule(props) {
  const { dataTongHop } = props;
  return (
    <div className="container schedule">
      {/* info movie */}
      <div
        style={{
          padding: "20px",
        }}
      >
        <div className="info-movie">
          <div className="content py-4 px-5">
            <InfoMovie dataPhim={dataTongHop} />
          </div>
        </div>
      </div>
      <div className="booking">
        <h4>Đặt Vé</h4>
        <Tab dataTongHop={dataTongHop} />
      </div>
    </div>
  );
}
