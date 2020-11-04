import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-exibir-pokemon',
  templateUrl: './exibir-pokemon.page.html',
  styleUrls: ['./exibir-pokemon.page.scss'],
})
export class ExibirPokemonPage implements OnInit {


  public url: string;
  public user: any = {};


  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.url = String(this.route.snapshot.paramMap.get('url'));
    this.userService.buscaPokemonNumero(this.url).subscribe(dados => {
      this.user = dados['results'];
      console.log(this.user);
    });
  }

}

