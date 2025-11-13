import { Router } from "express";
import isAuthenticated from '../middlewares/isAuthenticated.middleware.js';
import { getAdminJobs, getJob, getJobById, postJob } from "../controllers/job.controller.js";

const router = Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getJob);
router.route("/getadminjobs").get(isAuthenticated,getAdminJobs);
router.route("/:id").get(isAuthenticated,getJobById);

export default router;