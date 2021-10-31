import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";

interface IUserRequest {
    name: string;
    username: string;
    email: string;
}

class UsersService {
    constructor(private usersRepository: IUsersRepository) {}

    async create({ name, username, email }: IUserRequest) {
        const userAlreadyExists = await this.usersRepository.exists(username);

        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const userData = User.create({ name, username, email });
        const user = this.usersRepository.create(userData);
        return user;
    }
}

export { UsersService };