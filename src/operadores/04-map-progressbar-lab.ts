import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in consequat sem. Aenean dictum tincidunt ultrices. Donec eleifend dictum neque id vestibulum. Aliquam erat volutpat. Donec ut blandit mi. Curabitur accumsan, neque non mattis dapibus, nunc risus rutrum enim, vitae suscipit ex ipsum nec turpis. Integer sodales et lacus eget pharetra. Vivamus egestas nunc sit amet dui accumsan, quis congue dolor tempor. Donec risus tellus, pharetra eu facilisis vestibulum, ornare vitae nisi. Suspendisse vestibulum semper facilisis. Nunc sagittis nisl ut augue ornare sagittis ac et mauris. Integer vel volutpat turpis. Pellentesque eget ultricies diam.
<br/><br/>
Morbi facilisis, erat eget finibus vehicula, urna nibh porta odio, sed scelerisque leo purus ac est. Integer ultrices tristique enim, sit amet eleifend turpis elementum eget. Nullam quis pulvinar odio, a vehicula libero. Nunc non mi vestibulum ipsum viverra faucibus. Nunc euismod vulputate massa, tincidunt placerat diam maximus vel. Pellentesque sit amet hendrerit nibh, a ullamcorper magna. Suspendisse mollis libero non cursus egestas. Maecenas sit amet auctor ex. Pellentesque turpis sem, posuere quis porta aliquam, aliquam elementum lacus. Phasellus sit amet dui sit amet enim pharetra semper nec at tellus. Etiam eros erat, varius at lacus quis, rutrum sodales ante. Nam a purus aliquam, bibendum felis eget, condimentum odio. Nullam ultrices purus in tortor semper porttitor. Etiam sagittis elit et magna aliquet maximus. Donec euismod ligula sit amet ex vulputate ornare.
<br/><br/>
Etiam sollicitudin enim sit amet leo porta, ac auctor eros placerat. Donec eget dictum ex. Vivamus dapibus eu libero quis feugiat. Nulla elit mi, vestibulum eu neque sed, vulputate ornare augue. Sed non diam sed augue varius iaculis. Vivamus feugiat odio ut mauris porta tempus. Aliquam accumsan, massa a convallis dignissim, nisi tortor ultricies ligula, et interdum ex dui eu dolor. In tristique ligula eros, at tincidunt nulla condimentum at.
<br/><br/>
Pellentesque laoreet consequat justo non efficitur. Quisque non faucibus mi. Aliquam interdum ante sit amet felis ultricies, ut viverra neque sagittis. Donec sollicitudin nulla pellentesque magna finibus congue. Sed tristique, nisi ut luctus tempus, neque tortor facilisis lacus, non congue felis sapien a ante. Donec ac ante at nisl bibendum pretium vitae ut lorem. Fusce consequat risus mauris, a aliquet dolor aliquet eget. Nulla sit amet urna sed ipsum imperdiet tristique vitae non nisi. Nullam quis consequat lectus.
<br/><br/>
Aliquam condimentum velit ac est accumsan, sed tincidunt turpis porta. Morbi at mauris at ligula malesuada consequat vel a mi. Nunc vitae est justo. Integer nec turpis sed lacus placerat blandit. In hendrerit metus nisl, in dignissim velit pretium vitae. Fusce nec purus posuere, porta nulla et, iaculis nulla. Aenean mauris felis, tempor ut sem vel, sodales posuere odio. Suspendisse sit amet dapibus odio, rutrum accumsan ex. Ut eu iaculis mi. In non elit convallis, consectetur risus pellentesque, fringilla dolor. Morbi pellentesque accumsan ornare.`;

const body = document.querySelector('body');
body.append(text);

const progress = document.createElement('div');
progress.classList.add('progress-bar');
body.append(progress);

const calcularPorcentaje = (event: Event) => {
  const { scrollTop, clientHeight, scrollHeight } = (event.target as Document).documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent<Event>(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  map(calcularPorcentaje)
);
progress$.subscribe(
  porcentaje => {
    progress.style.width = `${porcentaje}%`;
  }
);