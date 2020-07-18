import { interval, fromEvent } from "rxjs";
import { sample, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

const interval$ = interval(1000).pipe(
  tap(x => console.log(`Voy en ${x}`)),
  sample(click$),
  tap(x => console.log(`Pasó ${x}`))
).subscribe();

setTimeout(() => {
  interval$.unsubscribe();
}, 10000);