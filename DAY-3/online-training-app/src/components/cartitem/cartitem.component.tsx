import React from "react";
import { CourseModel } from "../../models/course.model";
import Rating from "../atoms/rating.component";
import Title from "../atoms/title.component";

type CartItemProps = {
  item: CourseModel;
};

export default function CartItem(props: CartItemProps) {
  return (
    <div className="card mb-3" style={{ maxWidth: "780px" }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={props.item.imageUrl}
            className="img-fluid rounded-start"
            alt={props.item.title}
            style={{ height: "100%" }}
          />
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h3 className="card-title">{props.item.title}</h3>
            <div className="card-text">
              <Rating
                maxCount={props.item.rating}
                iconClasses="fa-solid fa-star"
                color="orange"
              />
            </div>
            <p className="card-text">
              <small className="text-body-secondary">
                ₹. {props.item.price}
              </small>
            </p>

            <div className="d-flex align-items-center my-1">
              <img
                src={props.item.avatarUrl}
                alt={props.item.trainerName}
                className="img-thumbnail"
                height="50px"
                width="50px"
              />{" "}
              <Title>
                <h4>{props.item.trainerName}</h4>
              </Title>
            </div>
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center align-items-center">
          <button className="btn btn-danger mx-1">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
