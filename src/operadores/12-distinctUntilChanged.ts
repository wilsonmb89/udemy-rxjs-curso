import { of, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
};

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: 'X' },
  { nombre: 'X' },
  { nombre: 'Zero' },
  { nombre: 'Zero' },
  { nombre: 'Dr.Willy' },
  { nombre: 'Megaman' },
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'Dr.Willy' }
];

/**
 * distinctUntilChanged
 */

of<number|string>(1,'1',2,2,1,3,4,3).pipe(
  distinctUntilChanged() // ===
).subscribe(observer);

from(personajes).pipe(
  distinctUntilChanged((ant: Personaje, act: Personaje) => ant.nombre === act.nombre)
).subscribe(observer);
