import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i19nSelect
  
  nombre: string = 'Jorge';
  genero: string = 'masculino';

  puntero: number = 0;

  invitados = [
    {
      nombre: 'Jorge',
      genero: 'masculino'
    },
    {
      nombre: 'Sofía',
      genero: 'femenino'
    },
    {
      nombre: 'Eva',
      genero: 'femenino'
    },
    {
      nombre: 'Lucas',
      genero: 'masculino'
    }
  ]
  
  
  invitacionMapa = {
    'masculino': 'invitarle',
    'femenino': 'invitarla'
  }
  
  // i19nPlural
  // clientes: string[] = [];
  // clientes: string[] = ['María'];
  clientes: string[] = ['María', 'Pedro', 'Alicia', 'Juan', 'Elena', 'Ismael', 'Susana'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }
  
  cambiarCliente() {
    this.puntero + 1 === this.invitados.length ? this.puntero = 0 : this.puntero = this.puntero+1;
    this.nombre = this.invitados[this.puntero].nombre;
    this.genero = this.invitados[this.puntero].genero;
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Jorge',
    edad: 45,
    direccion: 'Madrid, España'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Flecha Verde',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]


  // Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5,6,

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 );
  });
}
