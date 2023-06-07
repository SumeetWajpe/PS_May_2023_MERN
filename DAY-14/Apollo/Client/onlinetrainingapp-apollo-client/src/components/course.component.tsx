import { useMutation } from "@apollo/client";
import { CourseModel } from "../models/course.model";
import Rating from "./rating.component";
import { DELETE_COURSE_MUTATION } from "../graphql/mutations";
import { GET_ALL_COURSES } from "../graphql/querries";

type CourseProps = {
  coursedetails: CourseModel;
};

export default function Course(props: CourseProps): JSX.Element {
  let [deleteACourse, { error, loading, data }] = useMutation(
    DELETE_COURSE_MUTATION,
    {
      variables: { deleteCourseId: props.coursedetails.id },
      refetchQueries: [{ query: GET_ALL_COURSES }],
    },
  );
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
            <button className="btn btn-primary">
              {props.coursedetails.likes}{" "}
              <i className="fa-regular fa-thumbs-up"></i>
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() => deleteACourse()}
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
