import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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

from(personajes).pipe(
  distinctUntilKeyChanged('nombre')
).subscribe(observer);
