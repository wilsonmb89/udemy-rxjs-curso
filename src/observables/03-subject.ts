import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
  next: value => console.log('next:', value),
  error: error => console.warn('error:', error),
  complete: () => console.log('complete')
}; 

const intervalo$ = new Observable<number>(
  subs => {
    const intervalID = setInterval(
      () => subs.next(Math.random()),
      1000
    );
    
    return () => {
      clearInterval(intervalID);
      console.log('IntervalID clear');
    };
  }
);

/**
 * 1 - Casteo multiple
 * 2 - Tambien es un observer
 * 3 - Next, error y complete
 */
const subject$ = new Subject<number>();
const subjectSus = intervalo$.subscribe(subject$);

/* const subs1 = subject$.subscribe(res => console.log('subs1:', res));
const subs2 = subject$.subscribe(res => console.log('subs2:', res)); */

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(50);
  subject$.complete();
  subjectSus.unsubscribe();
}, 3500);
