import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://github.com/Done-Ribeiro" target="_blank">Done</a></b> 2019</span>
    <div class="socials">
      <a href="https://github.com/Done-Ribeiro" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/done-ribeiro-8b244314b/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
