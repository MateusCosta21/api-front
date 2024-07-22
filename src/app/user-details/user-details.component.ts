import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  following: any[] = [];
  searchQuery: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.userService.getUser(username).subscribe(data => {
        this.user = data;
      });

      this.userService.getUserFollowing(username).subscribe(data => {
        this.following = data;
      });
    }
  }

  get filteredFollowing() {
    return this.following.filter(followingUser => 
      followingUser.login.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
