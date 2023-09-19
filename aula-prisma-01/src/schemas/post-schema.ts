import Joi from "joi";
import { CreatePost } from "../repositories/post-repository";

export const postSchema = Joi.object<CreatePost>({
  username: Joi.string().required(),
  title: Joi.string().required(),
  body: Joi.string().required(),
  createAt: Joi.string().pattern(/^\d{4}\/\d{2}\/\d{2}$/).default(() => new Date().toISOString().slice(0, 10))
})