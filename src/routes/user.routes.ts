import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRoutes = Router();

usersRoutes.get('/:id', UsersController.show);

usersRoutes.get('/', UsersController.list);

usersRoutes.post('/', UsersController.create);

usersRoutes.put('/:id', UsersController.update);

usersRoutes.delete('/:id', UsersController.delete);

export default usersRoutes;
