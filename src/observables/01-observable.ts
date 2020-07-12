import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
  next: value => console.log('next:', value),
  error: error => console.warn('error:', error),
  complete: () => console.log('complete')
}; 

const obs$ = new Observable<number>(
  suscriber => {
    suscriber.next(1);
    suscriber.next(2);
    suscriber.next(3);
    suscriber.next(4);

    // throw new Error("Fallo forzado");

    suscriber.complete();

    suscriber.next(5);
    suscriber.next(6);
  }
);

/* obs$.subscribe(
  valor => console.log('next:', valor),
  error => console.warn('error:', error),
  () => console.info('Completado')
); */

obs$.subscribe(observer);
