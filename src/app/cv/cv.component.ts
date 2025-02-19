import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  nome_sobrenome = "Beatriz Camargo";
  email = "beatrizcamargo@gmail.com";
  telefone = "(11) 99999-9999";
  endereco = "Rua dos girassóis 555, 41444-555 Curitiba";
  linkedin = "https://www.linkedin.com/in/beatrizcammargo/";
  crea = "PR-143251/D"
}
