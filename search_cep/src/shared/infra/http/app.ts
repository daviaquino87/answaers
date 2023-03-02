import "express-async-errors";
import express from "express";
import { verifyError } from "./middlewares/verifyError";
import { indexRoutes } from "./routes/index.routes";

export const app = express();

app.use(express.json());
app.use(indexRoutes);

app.use(verifyError);
