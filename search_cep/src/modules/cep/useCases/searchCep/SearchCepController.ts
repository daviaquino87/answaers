import { Request, Response } from "express";
import { SearchCepUseCase } from "./SearchCepUseCase";
import { AppError } from "../../../../errors/AppError";

export class CepController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cep } = request.query;
    const searchCepUseCase = new SearchCepUseCase();

    if (!cep) {
      throw new AppError("It is mandatory to send a zip code", 404);
    }

    const data = await searchCepUseCase.execute({
      cep: String(cep),
    });

    return response.json(data);
  }
}
