import api from "../../../../config/api";
import { validateCep } from "../../../../helpers/validateCep";
import { Cep } from "../../../../modules/cep/entities/Cep";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  cep: string;
}

export class SearchCepUseCase {
  async execute({ cep }: IRequest): Promise<Cep> {
    const cepIsValid = validateCep(cep);

    if (!cepIsValid) {
      throw new AppError("The zip code entered is invalid", 404);
    }

    const body = await api
      .get(`/${cep}`)
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        throw new AppError("Failed to fetch zip code", 503);
      });

    const data = new Cep({ city: body.city, state: body.state, cep: body.cep });

    return data;
  }
}
