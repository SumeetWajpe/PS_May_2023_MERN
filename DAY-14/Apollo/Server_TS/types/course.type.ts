export class CourseType {
  constructor(
    public id: number = 0,
    public title: string = "",
    public price: number = 0,
    public rating: number = 0,
    public likes: number = 0,
    public imageUrl: string = "",
    public trainerId: number = 0,
    public description: string = "",
  ) {}
}
