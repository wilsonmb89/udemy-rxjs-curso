import { of } from 'rxjs';

const obs$ = of([1,2], {a:1, b:2}, function() {}, true, Promise.resolve(true));

console.log('Inicio del obs$');
obs$.subscribe(
  next => console.log('next:', next),
  error => console.warn('error:', error),
  () => console.log('Finalizada la secuencia')
);
console.log('Fin del obs$');
