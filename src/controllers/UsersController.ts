import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import User from '../models/User';

export default {
  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    return response.json(user);
  },

  async list(request: Request, response: Response): Promise<Response> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    return response.json(users);
  },

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const usersRepository = getRepository(User);

    const user = usersRepository.create({ name, email, password });

    await usersRepository.save(user);

    return response.json(user);
  },

  async update(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const { id } = request.params;
    const usersRepository = getRepository(User);

    await usersRepository.update(id, { name, email, password });

    const user = await usersRepository.findOne(id);

    // const newUser = { ...user, name, email, password };

    // await usersRepository.save(newUser);

    return response.json(user);
  },

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const usersRepository = getRepository(User);

    await usersRepository.delete(id);

    return response.status(204).send();
  },
};
