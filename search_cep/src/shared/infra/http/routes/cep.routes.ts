import { Router } from "express";
import { SearchCepController } from "../../../../modules/cep/useCases/searchCep/SearchCepController";

const searchCepController = new SearchCepController();

export const cepRoutes = Router();

cepRoutes.get("/search", searchCepController.handler);
