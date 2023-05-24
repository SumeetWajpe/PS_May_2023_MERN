import React from "react";

export default function NewCourse() {
  return (
    <div>
      <h2>New Course</h2>

      <form>
        <label>
          Id : <input type="number" className="form-control" />
        </label>
        <br />
        <label>
          Title : <input type="text" className="form-control" />
        </label>
        <br />

        <label>
          Price : <input type="number" className="form-control" />
        </label>
        <br />

        <label>
          Rating : <input type="number" className="form-control" />
        </label>
        <br />

        <label>
          Like : <input type="number" className="form-control" />
        </label>
        <br />

        <label>
          Trainer Name : <input type="text" className="form-control" />
        </label>
        <br />

        <label>
          Avatar Url : <input type="text" className="form-control" />
        </label>
        <br />

        <label>
          Image Url : <input type="text" className="form-control" />
        </label>
        <br />

        <label>
          Description : <input type="text" className="form-control" />
        </label>
        <br />

        <button className="btn btn-success m-1">Add New Course</button>
      </form>
    </div>
  );
}
