import { Router } from "express";
import userRouter from "./user.routes"

const routes = Router();

routes.use('/users', userRouter);
routes.use('/pius', Router);

export default routes;