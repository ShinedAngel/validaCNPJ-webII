import { Component } from '@angular/core';
import { Fornecedores } from 'src/app/fornecedores'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms Tutorial';
  Fornecedores: Fornecedores = new Fornecedores();

  salvar() {
    alert("Dados salvos com sucesso!");
    console.log(this.Fornecedores);
  };
}