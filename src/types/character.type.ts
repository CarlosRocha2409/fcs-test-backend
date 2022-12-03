import { AxiosResponse } from "axios";

export interface IRegularPayload {
  name: string;
  url: string;
}

export type ICharacterStatus = "alive" | "dead" | "unknow";
export type ICharacterGender = "female" | "male" | "genderless " | "unknow";

export interface ICharacter {
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
}

export interface ICharactersPayload {
  info: {
    count: number;
    pages: number;
    next: null | string;
    prev: null | string;
  };
  results: ICharacter[];
}

export interface ICharacterFilterParams {
  name?: string;
  status?: ICharacterStatus;
  gender?: ICharacterGender;
  species?: string;
  type?: string;
  page?: number;
}

export type ICharactersResponse = AxiosResponse<ICharactersPayload>;
export type ICharacterResponse = AxiosResponse<ICharacter>;
