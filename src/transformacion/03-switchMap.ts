import { fromEvent, Observable } from "rxjs";
import { pluck, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { UserData, GetGitUsersRs } from "../interfaces/github-users.interface";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

const url = 'https://httpbin.org/delay/1?arg=';
input$.pipe(
  pluck<KeyboardEvent, string>('target', 'value'),
  switchMap<string, Observable<GetGitUsersRs>>(textVal => ajax.getJSON(url + textVal))
).subscribe(console.log);