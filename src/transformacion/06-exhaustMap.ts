import { interval, fromEvent } from 'rxjs';
import { take, pluck, map, exhaustMap } from 'rxjs/operators';

const interval$ = (key: string) => {
  return interval(1000).pipe(
    map(num => `${key} - ${num}`),
    take(3)
  )
}
const click$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
  pluck('key')
);

click$.pipe(
  exhaustMap(interval$)
).subscribe(console.log)