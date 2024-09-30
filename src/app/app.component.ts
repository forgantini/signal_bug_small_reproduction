import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BooksStore } from '@test/demo';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  providers: [BooksStore],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'org';

  public readonly store = inject(BooksStore);
}
