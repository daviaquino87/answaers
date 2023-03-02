import api from "../../../../config/api";
import { validateCep } from "../../../../helpers/validateCep";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  cep: string;
}

export class SearchCepUseCase {
  async execute({ cep }: IRequest): Promise<any> {
    const cepIsValid = validateCep(cep);

    if (!cepIsValid) {
      throw new AppError("The zip code entered is invalid", 404);
    }

    const data = await api
      .get(`/${cep}`)
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        throw new AppError("Failed to fetch zip code", 503);
      });

    return data;
  }
}
