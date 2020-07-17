import { reduce, tap, scan } from 'rxjs/operators';
import { range, from } from "rxjs";

const range$ = range(1,5);

const acumulador = (acc:number, curr: number) => acc + curr;

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
};

range$.pipe(
  reduce(acumulador, 0)
).subscribe(observer);

range$.pipe(
  scan(acumulador, 0)
).subscribe(observer);

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: 'Wil', autenticado: true, token: null },
  { id: 'Wil', autenticado: false, token: 'ABC' },
  { id: 'Wil', autenticado: false, token: '123' },
  { id: 'Wil', autenticado: true, token: null },
];

const state = from(user).pipe(
  scan<Usuario>((acc, curr) => {
    return { ...acc, ...curr}
  })
).subscribe(observer);