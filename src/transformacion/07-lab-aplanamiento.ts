import { fromEvent, of } from "rxjs";
import { tap, map, pluck, mergeMap, exhaustMap, switchMap, catchError } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";

const url = 'https://reqres.in/api/login?delay=1';

// Creando un formulario
const body = document.querySelector('body');
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const btnSubmit = document.createElement('button');

// Config
inputEmail.id = 'inputEmail';
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.id = 'inputPass';
inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

btnSubmit.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, btnSubmit);
body.append(form);

// Helpers
interface LoginData {
  email: string;
  password: string;
}

const loginUser = (loginData: LoginData) => {
  return ajax.post(url, loginData).pipe(
    catchError(handleError),
    pluck('response', 'token')
  );
}

const handleError = (error: AjaxError) => {
  console.warn('Error:', error);
  return of({'response': {'token': ''}});
}

// Streams
const submitForm$ = fromEvent(form, 'submit').pipe(
  tap(ev => ev.preventDefault()),
  pluck<Event, HTMLFormElement>('target'),
  map(form => {
    const email = (form.querySelector('#inputEmail') as HTMLInputElement).value;
    const password = (form.querySelector('#inputPass') as HTMLInputElement).value;
    return ({ email, password });
  }),
  // mergeMap(loginUser),
  // switchMap(loginUser),
  exhaustMap(loginUser)
);

submitForm$.subscribe(
  token => {
    console.log(token);
  }
);
