import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import User from '../models/User';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const usersRepository = getRepository(User);

    const user = usersRepository.create({ name, email, password });

    await usersRepository.save(user);

    return response.json(user);
  },
};
