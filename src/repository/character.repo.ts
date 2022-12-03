import api from "../config/axios.config";
import logger from "../logger/api.logger";
import {
  ICharacterFilterParams,
  ICharacterResponse,
  ICharactersResponse,
} from "../types/character.type";

export default class CharacterRepository {
  async getCharacters({ pageIndex = 1 }: { pageIndex?: number }) {
    return api
      .get("/character", {
        params: {
          page: pageIndex,
        },
      })
      .then(({ data }: ICharactersResponse) => data.results)
      .catch((e) => {
        console.log(e);
        logger.error(`Error fetching characters: ${e.message}`);
      });
  }

  async getSingleCharacter(id: number) {
    return api
      .get(`/character/${id}`)
      .then(({ data }: ICharacterResponse) => data)
      .catch((e) => {
        console.log(e);
        logger.error(`Error fetching character with id ${id}: ${e.message}`);
      });
  }

  async searchCharacters(filter: ICharacterFilterParams) {
    const results = await api
      .get(`/character`, {
        params: {
          ...filter,
        },
      })
      .then(({ data }: ICharactersResponse) => {
        return data.results;
      })
      .catch((e) => {
        console.log(e);
        logger.error(`Error filtering characters: ${e.message}`);
      });

    return results;
  }
}
