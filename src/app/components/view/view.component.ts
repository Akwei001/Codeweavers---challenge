import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  poke!: { name: string };

  pokemons: any[] = [];

  vpokemons: any[] = [];

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.poke = {
      name: this.route.snapshot.params['name'],
    };

    this.pokemonService.getPokemons(1, 1).subscribe((response: any) => {
      response.results.forEach((result: { this: any }) =>
        this.pokemonService
          .getMorePokemon()
          .subscribe((uniqueResponse: any) => {
            this.vpokemons.push(uniqueResponse);
            console.log(this.vpokemons);
          })
      );
    });
  }
}
