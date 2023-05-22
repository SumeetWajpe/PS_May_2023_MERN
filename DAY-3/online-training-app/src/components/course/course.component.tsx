import React, { Component } from "react";
import { CourseModel } from "../../models/course.model";

type CourseProps = {
  coursedetails: CourseModel;
};

export default class Course extends Component<CourseProps> {
  IncrementLikes() {
    console.log("++");
  }
  render() {
    let ratings = [];
    for (let index = 0; index < this.props.coursedetails.rating; index++) {
      ratings.push(
        <i
          className="fa-sharp fa-solid fa-star"
          style={{ color: "orange" }}
        ></i>,
      );
    }
    return (
      <div className="col-md-3">
        <div className="card m-2 p-2">
          <img
            src={this.props.coursedetails.imageUrl}
            height="150px"
            className="card-img-top"
            alt={this.props.coursedetails.title}
          />
          <div className="card-body p-0">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">{this.props.coursedetails.title}</h5>
              <p> {ratings}</p>
            </div>

            <p className="card-text m-0">₹. {this.props.coursedetails.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => this.IncrementLikes()}
            >
              {this.props.coursedetails.likes}{" "}
              <i className="fa-regular fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
