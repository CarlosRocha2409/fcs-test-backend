import Character from "../models/character.model";
import CharacterRepository from "../repository/character.repo";
import { ApiError } from "../error-handling/ApiErrot";
import { BAD_REQUEST, NOT_FOUND } from "../types/error.type";
import { ICharacterFilterParams } from "../types/character.type";

export class CharacterService {
  private repo: CharacterRepository;

  constructor() {
    this.repo = new CharacterRepository();
  }

  async getCharacters({
    pageIndex = 1,
  }: {
    pageIndex: number;
  }): Promise<Character[]> {
    return this.repo
      .getCharacters({
        pageIndex,
      })
      .then((characters) => {
        if (!characters)
          throw new ApiError("Coulnd't get characters", NOT_FOUND);
        return characters;
      });
  }

  async getSingleCharacter(id: number): Promise<Character> {
    if (!id) throw new ApiError("Please provide the id", BAD_REQUEST);
    return this.repo.getSingleCharacter(id).then((character) => {
      if (!character)
        throw new ApiError(`Coulnd't get character with id ${id}`, BAD_REQUEST);
      return character;
    });
  }

  async searchCharacters(filter: ICharacterFilterParams): Promise<Character[]> {
    return this.repo.searchCharacters(filter).then((characters) => {
      if (!characters) {
        //NOTA IMPORTANTE, HAGO UN RETRY DEL REQUEST
        //POR QUE HAY UN ERROR RARO CON EL API QUE AVECES LA PRIMERA VEZ
        //QUE SE HACE UN QUERY RETORNA DATA ERRONEA
        //SOSPECHO QUE TIENE QUE VER CON MI COMPUTADORA POR EL MOMENTO
        return this.repo.searchCharacters(filter).then((characters) => {
          if (!characters)
            throw new ApiError("Coulnd't get characters", NOT_FOUND);
          return characters;
        });
      }
      return characters;
    });
  }
}
