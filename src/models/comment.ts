import { Service } from "typedi";

@Service()
export default class CommentModel {
  public create(comment: string) {
    const res = [comment];
    return res;
  }

  public find(userId: string) {
    const res = ["find", "result"];
    return res;
  }
}