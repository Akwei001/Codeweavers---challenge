import { Component, OnInit } from '@angular/core';
// import { Route, Routerlink } from '@angular/router';
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
    this.getPokemons();
  }

  //getPokemons

  getPokemons() {
    this.pokemonService
      .getPokemons(50, this.page)
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
