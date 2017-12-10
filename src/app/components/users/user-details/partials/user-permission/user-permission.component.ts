import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { UserService } from './../../../../../services';

@Component({
  selector: 'user-permission',
  templateUrl: './user-permission.component.html',
  styleUrls: ['./user-permission.component.scss']
})
export class UserPermissionComponent implements OnInit {
    user: any = {};
    roles: any = [];

    constructor(private userService: UserService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        var userId = this.route.snapshot.params['userId'];
        console.log('userId', userId);
        this.getUserDetails(userId);
        this.getRoles();
    }

    getRoles() {
        this.roles = this.userService.getRoles();
    }

    getUserDetails(userId) {
        this.user = this.userService.getUser(userId);
    }

}
