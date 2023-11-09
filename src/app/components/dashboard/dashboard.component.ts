import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data:any;
  data2:any;
  inputValue: string = '';
  constructor(
    private _loginService:LoginServiceService,
    private _pokemonService:PokemonService
  ) { }

  ngOnInit() {
    this.getPokemonList()
  }
  buscar(event:any){
    let text = event.target.value;
    
    if(text != '') {
      console.log(text);
      this.data = this.data.filter((f:any)=> f.name.toLowerCase().includes(text.toLowerCase()))
    }else{
      this.data = this.data2
    }
  }
  getPokemonList() {
    this._pokemonService.getPokemonList().subscribe((data) => {
      this.data = data.results
      this.data2 = data.results
      console.log(this.data);
    },(error) => {
      console.error('Error al obtener la lista de Pokémon:', error);
    }
  );
  }
  logOut(){
    this._loginService.setStorage('sesionLogin','false')
  }

}
