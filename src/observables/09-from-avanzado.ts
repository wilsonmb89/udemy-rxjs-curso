import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable y genera una
 * secuencia por cada elemento de la coleccion
 */

const observer = {
  next: val => console.log('next', val),
  complete: () => console.log('complete')
};

const from$ = from([1,2,3,4,5]);
const of$ = of([1,2,3,4,5]);
const of1$ = of(...[1,2,3,4,5]);
const source$ = from(fetch('https://api.github.com/users/wilsonmb89'));

/* from$.subscribe(observer);
of$.subscribe(observer);
of1$.subscribe(observer); */
source$.subscribe(
  async res => {
    const data = await res.json();
    console.log(data);
  }
);

const miGenerador = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const miIterable = miGenerador();
const fromMiIterable$ = from(miIterable);
fromMiIterable$.subscribe(observer);
