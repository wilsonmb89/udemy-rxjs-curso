import { from } from "rxjs";
import { first } from "rxjs/operators";

const numbers = [1,2,3,4,5,6,7,8,9,1,2,3];

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
};

from(numbers).pipe(
  first()
).subscribe(observer);

from(numbers).pipe(
  first(x => x >= 8)
).subscribe(observer);