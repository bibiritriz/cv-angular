import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  nome_sobrenome = "Beatriz Camargo";
  email = "beatrizcamargo@gmail.com";
  telefone = "11 9156567243";
  endereco = "Rua Não Sei Onde, Bairro Barroso, 873";
  linkedin = "https://www.linkedin.com/";
}
