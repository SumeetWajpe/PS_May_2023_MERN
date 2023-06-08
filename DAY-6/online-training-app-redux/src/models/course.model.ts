export interface ICourseModel {
  id: number;
  title: string;
  price: number;
  rating: number;
  likes: number;
  imageUrl: string;
  trainerName: string;
  avatarUrl: string;
  description: string;
}
export class CourseModel implements ICourseModel {
  public id: number = 0;
  public title: string = "";
  public price: number = 0;
  public rating: number = 0;
  public likes: number = 0;
  public imageUrl: string = "";
  public trainerName: string = "";
  public avatarUrl: string = "";
  public description: string = "";
  public xyz: string = "123";
}

var cm = new CourseModel();
