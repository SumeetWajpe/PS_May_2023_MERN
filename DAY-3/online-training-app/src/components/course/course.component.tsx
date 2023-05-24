import { useContext, useState } from "react";
import { CourseModel } from "../../models/course.model";
import { CartItemsContext } from "../../context/cartitems.context";
import { Link } from "react-router-dom";
import Title from "../atoms/title.component";
import Rating from "../atoms/rating.component";

type CourseProps = {
  coursedetails: CourseModel;
  DeleteACourse: (id: number) => void;
  setCurrItemsInCart: (currCartItems: CourseModel[]) => void;
};

export default function Course(props: CourseProps): JSX.Element {
  let [currLikes, setCurrLikes] = useState<number>(props.coursedetails.likes);
  const ctx = useContext(CartItemsContext);

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
            <h5 className="card-title">
              {" "}
              <Link to={`/coursedetails/${props.coursedetails.id}`}>
                {props.coursedetails.title}
              </Link>{" "}
            </h5>
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
              onClick={() => setCurrLikes(currLikes + 1)}
            >
              {currLikes} {/* {this.props.coursedetails.likes}{" "} */}
              <i className="fa-regular fa-thumbs-up"></i>
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() => props.DeleteACourse(props.coursedetails.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            <div>
              <label>
                {" "}
                <input
                  type="checkbox"
                  onChange={e => {
                    if (e.target.checked) {
                      props.setCurrItemsInCart([
                        ...ctx.currItems,
                        props.coursedetails,
                      ]);
                    } else if (e.target.checked == false) {
                      let newItems = ctx.currItems.filter(
                        item => item.id != props.coursedetails.id,
                      );
                      props.setCurrItemsInCart(newItems);
                    }
                  }}
                />{" "}
                Add to Cart
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Class based Component

// import React, { Component } from "react";
// import { CourseModel } from "../../models/course.model";

// type CourseProps = {
//   coursedetails: CourseModel;
// };

// type CourseState = {
//   currLikes: number;
// };

// export default class Course extends Component<CourseProps, CourseState> {
//   state: Readonly<CourseState> = { currLikes: this.props.coursedetails.likes };
//   IncrementLikes() {
//     // console.log(this.props.coursedetails.likes++); // props are readonly
//     //this.state.currLikes++; // state is immutable
//     this.setState({ currLikes: this.state.currLikes + 1 });
//   }
//   render() {
//     let ratings = [];
//     for (let index = 0; index < this.props.coursedetails.rating; index++) {
//       ratings.push(
//         <i
//           className="fa-sharp fa-solid fa-star"
//           style={{ color: "orange" }}
//         ></i>,
//       );
//     }
//     return (
//       <div className="col-md-3">
//         <div className="card m-2 p-2">
//           <img
//             src={this.props.coursedetails.imageUrl}
//             height="150px"
//             className="card-img-top"
//             alt={this.props.coursedetails.title}
//           />
//           <div className="card-body p-0">
//             <div className="d-flex justify-content-between align-items-center">
//               <h5 className="card-title">{this.props.coursedetails.title}</h5>
//               <p> {ratings}</p>
//             </div>

//             <p className="card-text m-0">₹. {this.props.coursedetails.price}</p>
//             <button
//               className="btn btn-primary"
//               onClick={() => this.IncrementLikes()}
//             >
//               {this.state.currLikes}{" "}
//               {/* {this.props.coursedetails.likes}{" "} */}
//               <i className="fa-regular fa-thumbs-up"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
