import { fromEvent, Observable } from "rxjs";
import { debounceTime, pluck, map, mergeAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { UserData, GetGitUsersRs } from "../interfaces/github-users.interface";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: UserData[]) => {
  usuarios.forEach(
    usuario => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = usuario.avatar_url;

      const anchor = document.createElement('a');
      anchor.href = usuario.html_url;
      anchor.text = 'Ver página';
      anchor.target = '_blank';

      li.append(img);
      li.append(usuario.login + ' ');
      li.append(anchor);

      orderList.append(li);
    }
  );
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  debounceTime(500),
  pluck<KeyboardEvent, string>('target', 'value'),
  map<string, Observable<GetGitUsersRs>>(
    textVal => ajax.getJSON(`http://api.github.com/search/users?q=${textVal}`)
  ),
  mergeAll<GetGitUsersRs>(),
  pluck<GetGitUsersRs, UserData[]>('items')
).subscribe(mostrarUsuarios);