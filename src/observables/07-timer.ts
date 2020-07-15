import { Observer, interval, timer } from "rxjs";

const observer: Observer<any> = {
  next: val => console.log('next:', val),
  error: error => console.warn('error', error),
  complete: () => console.log('Complete')
};

const interval$ = interval(2000);
const timer$ = timer(2000);

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer1$ = timer(hoyEn5);

interval$.subscribe(observer);
timer$.subscribe(observer);
timer1$.subscribe(observer);