const INCREMENT_LIKES = "INCREMENT_LIKES"; // better practice

export function IncrementLikes() {
  return { type: INCREMENT_LIKES };
}

export function DeleteCourse() {
  return { type: "DELETE_COURSE" };
}

export function DeletePost() {
  return { type: "DELETE_POST" };
}
