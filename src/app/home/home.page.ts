import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

//trabalho realizado com Gabriela Ponciano
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pagina = 1;
  public totalPokemons = 1;
 public listaApi: any;
 public listaPokemonExibir: any = [];
  

  constructor(private userService: UserService) {}
ionViewWillEnter (){
  this.buscarPokemons(1);
}

public buscarPokemons(pagina: number){
  if (pagina <= 0){
    pagina = 1;
  }
  this.pagina = pagina;

this.userService.buscarTodos(pagina).subscribe(dados => {
  this.listaPokemonExibir = [];
  this.totalPokemons = dados['count'];
  let listaApi = dados['results'];
  for (let user of listaApi) {
    this.userService.buscaPokemonNumero(user.url).subscribe(dadosPokemon => {
      this.listaPokemonExibir.push(dadosPokemon);
    });
  }
});
}
}
