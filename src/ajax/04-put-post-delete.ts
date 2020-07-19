import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/3';

/* ajax.post(url, { id: 1, nombre: 'Wilson' }, { 'token': '123456' })
  .subscribe(console.log); */

ajax({
  url,
  method: 'POST',
  headers: { 'token': '123456' },
  body: { id: 1, nombre: 'Wilson' }
}).subscribe(console.log);;