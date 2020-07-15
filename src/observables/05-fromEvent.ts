import { fromEvent, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next:', value),
  error: error => console.warn('error:', error),
  complete: () => console.log('complete')
}; 

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(
  ({x, y}) => {
    console.log('Coords:', x, y);
  }
);
src2$.subscribe(observer);
