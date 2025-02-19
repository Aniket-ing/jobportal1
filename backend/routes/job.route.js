import express from "express"
import {postJob,getAllJobs,getJobById,getAdminJobs} from "../controllers/job.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { get } from "mongoose";
const router =express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/getadminjobs").get(isAuthenticated,getAdminJobs);
router.route("/get/:id").get(isAuthenticated,getJobById);

export default router;