import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'Mi primer APP en Angular';
  h2 = 'Mi primer línea de la app';
  tasks = [
    'Instalar el angular CLI',
    'Crear proyectos',
    'Crear componentes'
  ];
  name ='Camilo';
  age = 35;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  disable = 'true'
  person = {
    nombre: 'Camilo',
    apellido: 'Del Valle',
    hijos: 2,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  clickHandler (){
    alert('Hola')
  }
  changeHandler (event: Event){
    console.log(event)
  }
}
