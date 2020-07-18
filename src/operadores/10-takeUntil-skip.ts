import { fromEvent, interval, range } from "rxjs";
import { takeUntil, tap, skip } from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';
document.querySelector('body').append(button);

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
};

const click$ = fromEvent(button, 'click').pipe(
  skip(1)
);

interval(1000).pipe(
  takeUntil(click$)
).subscribe(observer);

range(1,6).pipe(
  skip(3)
).subscribe(observer);