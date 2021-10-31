import { Request, Response } from "express";
import { UsersService } from "./UsersService";

class UsersController {
    constructor(private usersService: UsersService) {}

    async create(request: Request, response: Response) {
        const { name, username, email } = request.body;
        const user = await this.usersService.create({ name, username, email });

        return response.json(user);
    }
}

export { UsersController };