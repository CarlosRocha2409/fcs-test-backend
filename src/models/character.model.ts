import {
  ICharacter,
  ICharacterGender,
  ICharacterStatus,
  IRegularPayload,
} from "../types/character.type";

export default class Character implements ICharacter {
  id: number;
  name: string;
  status: ICharacterStatus;
  species: string;
  type: string;
  gender: ICharacterGender;
  origin: IRegularPayload;
  location: IRegularPayload;
  image: string;
  episode: string;
  url: string;
  created: string;
  constructor({
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    url,
    created,
  }: ICharacter) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.type = type;
    this.gender = gender;
    this.origin = origin;
    this.location = location;
    this.image = image;
    this.episode = episode;
    this.url = url;
    this.created = created;
  }
}
