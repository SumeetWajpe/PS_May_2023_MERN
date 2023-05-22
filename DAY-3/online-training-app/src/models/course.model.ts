export class CourseModel {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public likes: number,
    public imageUrl: string,
  ) {}
}
