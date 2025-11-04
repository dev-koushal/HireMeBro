import express, { Router } from 'express'
import {login, register, updateProfile} from '../controllers/user.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.middleware.js';
const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;