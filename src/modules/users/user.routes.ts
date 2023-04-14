import { Router } from "express";
import { register } from "./auth.controller";
import { validateInputs } from "../../middleware/validateInputs";
import { createUserSchema } from "./user.schema";

const authRouter = Router();

authRouter.post("/register", validateInputs(createUserSchema), register);

export { authRouter };
