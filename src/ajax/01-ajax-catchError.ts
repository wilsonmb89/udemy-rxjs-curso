import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https:// api.github.com/users?per_page=5';

const fetchPromise = fetch(url);

const manejaErrores = (res: Response) => {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res;
}

/* fetchPromise
  .then( resp => resp.json() )
  .then( data => console.log('data:', data) )
  .catch( err => console.warn('Error en usuarios', err) ); */

/* fetchPromise
  .then(manejaErrores)
    .then(resp => resp.json())
      .then(data => console.log('data:', data))
  .catch(err => console.warn('Error en usuarios', err)); */

const manejaErroresObs = (err: AjaxError) => {
  console.warn('Error en:', err.message);
  return of([]);
}

ajax(url).pipe(
  pluck('response'),
  catchError(manejaErroresObs)
).subscribe(users => console.log('Usuarios:', users));