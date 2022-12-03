import { CharacterService } from "../services/character.service";
import { ICharacterFilterParams } from "../types/character.type";

export class CharacterController {
  private sCharacter: CharacterService;

  constructor() {
    this.sCharacter = new CharacterService();
  }

  async searchCharacters(filter: ICharacterFilterParams) {
    return this.sCharacter.searchCharacters(filter);
  }

  async getSingleCharacter(id: number) {
    return this.sCharacter.getSingleCharacter(id);
  }
}
