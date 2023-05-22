import React, { Component } from "react";
import { CourseModel } from "../../models/course.model";

type CourseProps = {
  coursedetails: CourseModel;
};

export default class Course extends Component<CourseProps> {
  render() {
    return (
      <div className="col-md-3">
        <div className="card m-2 p-2">
          <img
            src={this.props.coursedetails.imageUrl}
            height="150px"
            className="card-img-top"
            alt={this.props.coursedetails.title}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.coursedetails.title}</h5>
            Rating : {this.props.coursedetails.rating}
            <p className="card-text m-0">
              Price : ₹. {this.props.coursedetails.price}
            </p>
            <p className="card-text">
              Likes : {this.props.coursedetails.likes}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
