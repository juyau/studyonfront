import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <OverlayTrigger
        placement="top"
        delay={{ show: 150, hide: 200 }}
        overlay={
          <Tooltip id={`tooltip`}>
            <strong>{value}</strong> star of 5 stars.
          </Tooltip>
        }
      >
        <span>
          <span>
            <i
              style={{ color }}
              className={
                value >= 1
                  ? "fas fa-star"
                  : value >= 0.5
                  ? "fas fa-star-half-alt"
                  : "far far-star"
              }
            ></i>
          </span>
          <span>
            <i
              style={{ color }}
              className={
                value >= 2
                  ? "fas fa-star"
                  : value >= 1.5
                  ? "fas fa-star-half-alt"
                  : "far far-star"
              }
            ></i>
          </span>
          <span>
            <i
              style={{ color }}
              className={
                value >= 3
                  ? "fas fa-star"
                  : value >= 2.5
                  ? "fas fa-star-half-alt"
                  : "far far-star"
              }
            ></i>
          </span>
          <span>
            <i
              style={{ color }}
              className={
                value >= 4
                  ? "fas fa-star"
                  : value >= 3.5
                  ? "fas fa-star-half-alt"
                  : "far far-star"
              }
            ></i>
          </span>
          <span>
            <i
              style={{ color }}
              className={
                value >= 5
                  ? "fas fa-star"
                  : value >= 4.5
                  ? "fas fa-star-half-alt"
                  : "far far-star"
              }
            ></i>
          </span>
        </span>
      </OverlayTrigger>
      <span style={{ padding: "10px" }}>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
  value: 0,
  text: "0 reviews",
};
export default Rating;
