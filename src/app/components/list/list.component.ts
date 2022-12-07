import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pokemons: any[] = [];

  totalPokemons!: number;

  page = 1;

  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService
      .getPokemons(this.pokemons.length, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: { name: any }) =>
          this.pokemonService
            .getMoreData(result.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
              console.log(this.pokemons);
            })
        );
      });
  }
}
