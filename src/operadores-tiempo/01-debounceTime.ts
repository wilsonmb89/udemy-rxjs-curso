import { fromEvent } from "rxjs";
import { map, debounceTime, pluck, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');
click$.pipe(
  map(({x, y}) => ({x, y})),
  debounceTime(3000)
);// .subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);
fromEvent<KeyboardEvent>(input, 'keyup')
.pipe(
  debounceTime(1000),
  pluck('target', 'value'),
  distinctUntilChanged()
).subscribe(console.log);