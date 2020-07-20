import { of, interval, forkJoin } from "rxjs";
import { take, delay } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c', 'd').pipe(delay(3500));

/* forkJoin({
  numeros$,
  interval$,
  letras$
}).subscribe(
  resp => {
    console.log(resp.numeros$);
  }
); */

forkJoin({
  num: numeros$,
  interval: interval$,
  letras: letras$
}).subscribe(
  resp => {
    console.log(resp);
  }
);