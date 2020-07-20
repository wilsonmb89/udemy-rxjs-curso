import { fromEvent, combineLatest } from "rxjs";
import { pluck, debounceTime } from "rxjs/operators";

const body = document.querySelector('body');
const input1 = document.createElement('input');
input1.type = 'email';
input1.placeholder = 'Email';

const input2 = document.createElement('input');
input2.type = 'password';
input2.placeholder = 'Password';

body.append(input1);
body.append(input2);

// Helper
const getInputStream = (input: HTMLInputElement) => {
  return fromEvent<KeyboardEvent>(input, 'keyup')
    .pipe(
      debounceTime(1000),
      pluck<KeyboardEvent, string>('target', 'value')
    );
}

combineLatest(
  getInputStream(input1),
  getInputStream(input2)
).subscribe(console.log);