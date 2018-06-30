import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    window.addEventListener('scroll', () => {
      let sobre = document.getElementById("about");
      let nabvar = document.getElementById("navbar-div");
      let headerpos = sobre.offsetTop;;// - 65;
      // console.log(headerpos);
      // console.log(window.pageYOffset);
      if (window.pageYOffset > headerpos) {
        nabvar.classList.remove('position-absolute');
        nabvar.classList.add('position-fixed');
        nabvar.classList.remove('navbar-dark');
        nabvar.classList.add('navbar-light');
        nabvar.classList.add('bg-light');
      } else {
        nabvar.classList.add('position-absolute');
        nabvar.classList.remove('position-fixed');
        nabvar.classList.add('navbar-dark');
        nabvar.classList.remove('navbar-light');
        nabvar.classList.remove('bg-light');
      }
    });
  }
}
