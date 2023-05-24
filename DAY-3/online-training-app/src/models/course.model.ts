export class CourseModel {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public likes: number,
    public imageUrl: string,
    public trainerName: string,
    public avatarUrl: string,
    public description: string,
  ) {}
}
