import { interval, fromEvent } from 'rxjs';
import { take, concatMap, pluck, map } from 'rxjs/operators';

const interval$ = (key: string) => {
  return interval(500).pipe(
    map(num => `${key} - ${num}`),
    take(2)
  )
}
const click$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
  pluck('key')
);

click$.pipe(
  concatMap(interval$)
).subscribe(console.log)