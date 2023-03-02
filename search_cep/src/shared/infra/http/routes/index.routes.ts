import { Router } from "express";
import { cepRoutes } from "./cep.routes";

export const indexRoutes = Router();

indexRoutes.get("/", (request, response) => {
  return response.json({ info: true });
});
indexRoutes.use("/cep", cepRoutes);
