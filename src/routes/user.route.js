import express from 'express';
import * as userController from '../controllers/user.controller.js';
import { newUserValidator } from '../validators/user.validator.js';
import { userAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to create a new user
router.post('', userController.newUser);

//route to get a single user by their user id
router.get('/:_id', userAuth, userController.getUser);

//route to update a single user by their user id
router.put('/update', userController.updateUser);

//route to delete a single user by their user id
router.delete('/:_id', userController.deleteUser);

export default router;
