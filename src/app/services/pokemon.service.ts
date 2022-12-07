import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) {}

  getPokemons(limit: number, offset: number) {
    return this.httpClient.get(`${this.url}?limit=${limit}&offset=${offset}`);
  }

  getMorePokemon(limit: number, offset: number) {
    return this.httpClient.get(
      `${this.url}?limit=${limit + 50}&offset=${offset + 50}`
    );
  }

  //Get more pokemon data
  getMoreData(name: any) {
    return this.httpClient.get(`${this.url}/${name}`);
  }

  // getPoke() {
  //   return this.httpClient.get(`${this.url}`);
  // }

  // getUrl() {
  //   return this.httpClient.get(`${this.url}/${name}`);
  // }
}
