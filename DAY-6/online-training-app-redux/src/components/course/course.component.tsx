import { useContext, useState } from "react";
import { CourseModel } from "../../models/course.model";
import { CartItemsContext } from "../../context/cartitems.context";
import { Link } from "react-router-dom";
import Title from "../atoms/title.component";
import Rating from "../atoms/rating.component";
import { useDispatch } from "react-redux";
import {
  deleteCourse,
  incrementLikes,
} from "../../redux/reducers/courses.reducer";

type CourseProps = {
  coursedetails: CourseModel;
};

export default function Course(props: CourseProps): JSX.Element {
  const dispatch = useDispatch();
  return (
    <div className="col-md-3">
      <div className="card m-2 p-2">
        <img
          src={props.coursedetails.imageUrl}
          height="150px"
          className="card-img-top"
          alt={props.coursedetails.title}
        />
        <div className="card-body p-0">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title"> {props.coursedetails.title}</h5>
            {/* <Title title={props.coursedetails.title}>
              <h1>Title</h1>
            </Title> */}

            <Rating
              maxCount={props?.coursedetails?.rating}
              iconClasses="fa-solid fa-star"
              color="orange"
            />
          </div>
          <p className="card-text m-0">₹. {props.coursedetails.price}</p>
          <div className="d-flex justify-content-evenly align-items-center">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(incrementLikes(props.coursedetails.id))}
            >
              {props.coursedetails.likes}{" "}
              <i className="fa-regular fa-thumbs-up"></i>
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() => dispatch(deleteCourse(props.coursedetails.id))}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            <div>
              <label>
                {" "}
                <input type="checkbox" /> Add to Cart
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
