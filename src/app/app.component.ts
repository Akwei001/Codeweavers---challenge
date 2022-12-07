import { Component, OnDestroy, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pokedex-app';

  pokemons: any[] = [];

  totalPokemons!: number;

  page = 1;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.pokemonService
      .getPokemons(10, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: { name: any }) =>
          this.pokemonService
            .getMoreData(result.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
              console.log(this.pokemons[0].abilities[0]);
            })
        );
      });
  }
}

function getPokemons() {
  throw new Error('Function not implemented.');
}
//Get pokemons
