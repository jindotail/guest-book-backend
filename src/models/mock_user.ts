import { IUser, IUserSignUpDTO } from "../interfaces/IUser";

export default class UserModel {
  idx = 1;
  userList: IUser[] = [
    {
      idx: this.idx++,
      id: "jindo",
      password: "1234",
      nickname: "진도",
      iso_time: new Date().toISOString(),
      created_at: new Date(),
    },
    {
      idx: this.idx++,
      id: "tail",
      password: "1234",
      nickname: "Tail",
      iso_time: new Date().toISOString(),
      created_at: new Date(),
    },
  ];

  public async create(userSignUpDTO: IUserSignUpDTO) {
    console.log(
      `[MockUserModel] create id: ${userSignUpDTO.id} nickname: ${userSignUpDTO.nickname}`
    );

    this.userList.push({
      idx: this.idx++,
      id: userSignUpDTO.id,
      password: userSignUpDTO.password,
      nickname: userSignUpDTO.nickname,
      iso_time: new Date().toISOString(),
      created_at: new Date(),
    });
    return "SUCCESS";
  }

  public async findById(id: string) {
    console.log(`[MockUserModel] findById id: ${id}`);
    return this.userList.filter((e) => e.id == id);
  }
}