import { IComment, ICommentResponse } from "@/interfaces/IComment";
import { Inject, Service } from "typedi";
import { Logger } from "winston";
import CommentModel from "../models/comment";

@Service()
export default class CommentService {
  constructor(
    @Inject("commentModel") private commentModel: CommentModel,
    @Inject("logger") private logger: Logger
  ) {}

  public async create(userIdx: number, comment: string) {
    this.logger.silly(
      `[CommentService] create userIdx: ${userIdx}, comment: ${comment}`
    );
    const res = await this.commentModel.create(userIdx, comment);
    return res;
  }

  private convertCommentToCommentResponse(
    comments: IComment[]
  ): ICommentResponse[] {
    return comments.map((comment) => {
      return {
        idx: comment.idx,
        comment: comment.comment,
        iso_time: comment.iso_time,
      };
    });
  }

  public async getComments(userIdx: number): Promise<ICommentResponse[]> {
    this.logger.silly(`[CommentService] getComments userIdx: ${userIdx}`);
    const res = await this.commentModel.find(userIdx);
    return this.convertCommentToCommentResponse(res);
  }

  public async deleteCommentByIdx(idx: number) {
    this.logger.silly(`[CommentService] deleteCommentByIdx: ${idx}`);
    const res = await this.commentModel.disable(idx);
    return res;
  }
}
