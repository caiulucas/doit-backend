import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRoutes = Router();

usersRoutes.get('/', (request, response) => {
  return response.json({ ok: 'ok' });
});

usersRoutes.post('/', UsersController.create);

export default usersRoutes;
