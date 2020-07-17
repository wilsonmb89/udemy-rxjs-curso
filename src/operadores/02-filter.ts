import { range, from } from "rxjs";
import { filter, pluck } from "rxjs/operators";

range(0, 20).pipe(
  filter(value => value % 2 === 1)
).subscribe(console.log);


interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman'
  },
  {
    tipo: 'heroe',
    nombre: 'Robin'
  },
  {
    tipo: 'villano',
    nombre: 'Joker'
  }
];

from(personajes).pipe(
  filter(personaje => personaje.tipo === 'heroe'),
  pluck('nombre')
).subscribe(console.log);