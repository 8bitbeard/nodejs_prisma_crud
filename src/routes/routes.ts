import { Router } from "express";
import { usersFactory } from "../modules/users/UsersFactory";

const router = Router();

router.post("/v1/users", usersFactory().create);

export { router };
