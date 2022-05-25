import { celebrate, Joi } from "celebrate";
import { Request, Response, Router } from "express";
import { Container } from "typedi";
import { IUserSignUpDTO } from "../../interfaces/IUser";
import AuthService from "../../services/auth";

const route = Router();

export default (app: Router) => {
  app.use("/auth", route);

  route.post(
    "/signup",
    celebrate({
      body: Joi.object({
        id: Joi.string().required(),
        password: Joi.string().required(),
        nickname: Joi.string().required(),
      }),
    }),
    async (req: Request, res: Response) => {
      const authServiceInstance = Container.get(AuthService);
      const result = await authServiceInstance.signUp(
        req.body as IUserSignUpDTO
      );
      return res.status(201).json({
        body: result,
      });
    }
  );
};