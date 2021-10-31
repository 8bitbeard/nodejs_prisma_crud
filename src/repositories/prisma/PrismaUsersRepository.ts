import { prismaClient } from "../../database/client";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepositories";

class PrismaUsersRepository implements IUsersRepository {
    async create({ name, username, email }: User): Promise<User> {
        const user = await prismaClient.user.create({
            data: {
                name,
                username,
                email
            }
        });

        return user;
    }

    async exists(username: string): Promise<boolean> {
        const user = await prismaClient.user.findUnique({
            where: {
                username
            }
        });

        return !!user
    }
}

export { PrismaUsersRepository };