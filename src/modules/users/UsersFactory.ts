import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { UsersService } from "./UsersService";
import { UsersController } from "./UsersController";

export const usersFactory = () => {
    const usersRepository = new PrismaUsersRepository();
    const usersService = new UsersService(usersRepository);
    const usersController = new UsersController(usersService);
    return usersController;
};