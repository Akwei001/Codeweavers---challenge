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
  getMoreData(name: string) {
    return this.httpClient.get(`${this.url}/${name}`);
  }

  getPoke() {
    return this.httpClient.get(`${this.url}`);
  }

  // getUrl() {
  //   return this.httpClient.get(`${this.url}/${name}`);
  // }

  //   get pokemons(): any[] {
  //     return this._pokemons;
  //   }

  //   get next(): string {
  //     return this._next;
  //   }

  //   set next(next: string) {
  //     this._next = next;
  //   }

  //   getType(pokemon: any): string {
  //     return pokemon && pokemon.types.length > 0
  //       ? pokemon.types[0].type.name
  //       : '';
  //   }

  //   get(name: string): Observable<any> {
  //     const url = `${this.url}${name}`;
  //     return this.http.get(url);
  //   }

  //   getNext(): Observable<string> {
  //     const url = this.next === '' ? `${this.url}?limit=100` : this.next;
  //     return this.http.get(url);
  //   }

  //   getEvolution(id: number): Observable<any> {
  //     const url = `${this.url}evolution-chain/${id}`;
  //     return this.http.get(url);
  //   }

  //   getSpecies(name: string): Observable<any> {
  //     const url = `${this.url}pokemon-species/${name}`;
  //     return this.http.get(url);
  //   }
}
