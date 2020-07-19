import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/3';
const url2 = 'https://api.github.com/users?per_page=5';

const obs$ = ajax.getJSON(url, { 'Content-Type': 'application/json', 'tokensaurio': 'abc123' });

obs$.subscribe(data => {
  console.log('data:', data);
});