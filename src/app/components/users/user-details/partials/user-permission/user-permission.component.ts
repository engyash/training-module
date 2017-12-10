import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import * as _ from 'lodash';

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
        this.getUserDetails(userId);
        this.getRoles();
    }

    getRoles() {
        this.roles = this.userService.getRoles();
        _.each(this.roles, (role) => {
            role.hasAccess = _.filter(this.user.roles, { id: role.id }).length > 0;
        });
    }

    getUserDetails(userId) {
        this.user = this.userService.getUser(userId);
    }

    setUserRole(roleId, hasAccess) {
        hasAccess = !hasAccess;
        this.userService.setUserRole(this.user.id, roleId, hasAccess);
    }

}
