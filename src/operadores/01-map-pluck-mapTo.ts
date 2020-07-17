import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

range(1, 5).pipe(
  map<number, number>(num => num * 10), // 10, 20, 30, 40, 50
  map<number, number>(num => num / 2), // 5, 10, 15, 20, 25
  map<number, string>(num => `Num. ${num}`) // Num. 5, Num. 10, Num. 15, Num. 20, Num. 25
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupcode$ = keyup$.pipe(
  map<KeyboardEvent, string>(event => event.code)
);
keyupcode$.subscribe(console.log);

const pluckKeyCode$ = keyup$.pipe(
  // pluck('target', 'baseURI')
  pluck<KeyboardEvent, number>('keyCode')
);
pluckKeyCode$.subscribe(console.log);

const keyupMapTo$ = keyup$.pipe(
  mapTo('Tecla presionada')
);
keyupMapTo$.subscribe(console.log);