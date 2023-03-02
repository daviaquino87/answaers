import { Router } from "express";
import { CepController } from "../../../../modules/cep/useCases/searchCep/SearchCepController";

const cepController = new CepController();

export const cepRoutes = Router();

cepRoutes.get("/search", cepController.handler);
