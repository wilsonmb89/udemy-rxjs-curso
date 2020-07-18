import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime, pluck } from "rxjs/operators";

const input = document.createElement('input');
document.querySelector('body').append(input);
fromEvent<KeyboardEvent>(input, 'keyup')
.pipe(
  throttleTime(1000, asyncScheduler, {leading: true, trailing: true}),
  pluck('target', 'value')
)
.subscribe(console.log);