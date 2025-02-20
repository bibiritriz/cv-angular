import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  nome_sobrenome = "Beatriz Camargo";
  email = "beacamargo@gmail.com";
  telefone = "(11) 99999-9999";
  endereco = "Rua dos girassóis 555, 41444-555 Curitiba";
  linkedin = "https://www.linkedin.com/in/beatrizcammargo/";
  linkedin_text = "in/beatrizcammargo/"
  crea = "PR-143251/D"
}
