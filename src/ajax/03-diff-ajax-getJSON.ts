import { Observer, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://dhttpbin.org/delay/3';
// const url2 = 'https://api.github.com/users?per_page=5';
// const ajax$ = ajax(url);
// ajax$.subscribe(data => console.log('ajax:', data));

const manejaError = (resp: AjaxError) => {
  console.warn('Error:', resp.message);
  return of({
    ok: false,
    usuarios: []
  });
}

const getJSON$ = ajax.getJSON(url).pipe(
  catchError(manejaError)
);

const observer: Observer<any> = {
  next: val => console.log('next:', val),
  error: err => console.warn('Error en subs:', err),
  complete: () => console.log('Complete')
};

getJSON$.subscribe(observer);
