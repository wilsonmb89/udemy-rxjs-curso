import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
};

of<number|string>(1,'1',2,2,1,3,4,3).pipe(
  distinct() // ===
).subscribe(observer);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'Zero' },
  { nombre: 'Dr.Willy' },
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'Zero' }
];

from(personajes).pipe(
  distinct(p => p.nombre)
).subscribe(observer);