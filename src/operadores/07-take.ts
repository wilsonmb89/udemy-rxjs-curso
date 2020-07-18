import { range } from "rxjs";
import { take } from "rxjs/operators";

range(1, 5).pipe(
  take(3)
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
});