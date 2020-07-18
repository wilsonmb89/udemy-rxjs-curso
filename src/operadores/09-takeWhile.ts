import { from } from "rxjs";
import { takeWhile, tap } from "rxjs/operators";

const numbers = [1,2,3,4,5,6,1,2,3,4,5,6];

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
};

from(numbers).pipe(
  takeWhile(x => x < 4)
).subscribe(observer);