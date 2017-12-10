import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../services';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    title = 'Training';
    roles: any = [];
    users: any = [];
    selectedRoleId: string = undefined;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.getRoles();
    }


  getRoles() {
      this.roles = this.userService.getRoles();

      // get all users by default
      this.getUsers();
  }

  getUsers(roleId = undefined) {
      this.users = this.userService.getUsers(roleId);
  }

  selectRole(roleId) {
      this.selectedRoleId = roleId;
      this.getUsers(roleId);
  }

  editUserRoles(userId) {
      this.router.navigate(['/users', userId]);
  }

}
