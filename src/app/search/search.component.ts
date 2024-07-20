import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  username: string = '';

  constructor(private router: Router) { }

  onSearch(): void {
    if (this.username) {
      this.router.navigate(['/user', this.username]);
    }
  }
}
