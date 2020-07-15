import { range, asyncScheduler } from "rxjs";

const obs$ = range(1, 6, asyncScheduler);

console.log('Inicio');
obs$.subscribe(console.log);
console.log('Fin');
