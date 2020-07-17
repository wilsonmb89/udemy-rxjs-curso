import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

range(0, 10).pipe(
  tap(x => console.log(`${x} es ${x % 2 === 0 ? 'par' : 'impar'}`)),
  map(x => x * 2),
  tap({ //Puede capturar observers
    next: val => console.log('Ahora:', val),
    complete: () => console.log('Finalizado el flujo')
  })
).subscribe();