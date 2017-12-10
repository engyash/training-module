import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from './../../../services';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    user: any={};

    constructor(private userService: UserService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        var userId = this.route.snapshot.params['userId'];
        this.user = this.userService.getUser(userId);
  }

}
