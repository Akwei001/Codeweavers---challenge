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

    // this.pokemonService.getMoreData().subscribe((response) => {
    //     console.log(response)}

    this.pokemonService.getPoke().subscribe((response) => {
      console.log(response);
    });
    this.pokemonService.getPoke().subscribe((response: any) => {
      response.results.forEach((result: { name: any }) =>
        this.pokemonService
          .getMoreData(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemons.push(uniqueResponse);
            console.log(this.pokemons);
            const viewPoke = this.pokemons;
            const lastPoke = viewPoke.pop();
            this.vpokemons.push(lastPoke);
            // const viewPoke = this.pokemons.find();
            // console.log(viewPoke);
            // console.log(lastPoke);
            // console.log(this.vpokemons.length);
            // console.log(this.pokemons);
            // console.log(result.name);
            // console.log(this.poke);
          })
      );
    });
  }
}
