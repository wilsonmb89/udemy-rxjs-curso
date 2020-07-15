import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => { console.log('Hola Mundo') };
const saludarP = (nombre: string) => { console.log(`Hola ${nombre}`) };

asyncScheduler.schedule(saludar, 3000);
asyncScheduler.schedule(saludarP, 3000, 'Wilson');

const subs = asyncScheduler.schedule(function(state: number) {
  console.log('state', state++);
  this.schedule(state, 1000);
}, 2000, 0);

/* setTimeout(() => {
  subs.unsubscribe();
}, 5000); */

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);