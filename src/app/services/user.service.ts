import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import _ from 'lodash';

@Injectable()
export class UserService {
    private users:any= [
        {
            id:'347e361d-ab5e-4ae0-a040-d6161a06795f',
            username: 'admin@analysisworks.com',
            firstName: '',
            lastName: '',
            roles: [
                { id: '70724c9f-1bb0-4d18-be96-452479a101bd' },
                { id: '5160deb7-1cc9-4b72-a1a1-307c77ad9eb9' },
                { id: '0f34fcdf-f1b0-46a5-ba2d-ce8088f9d19f' },
                { id: '8dbf7bf4-4f9b-4ac1-aa48-e65145be96f2' }
            ]
        },
        {
            id: '8eaadab0-2be8-4cf2-9f4f-de24041d6fd2',
            username: 'demo@analysisworks.com',
            firstName: '',
            lastName: '',
            roles: [
                { id: '5160deb7-1cc9-4b72-a1a1-307c77ad9eb9' },
                { id: '0f34fcdf-f1b0-46a5-ba2d-ce8088f9d19f' },
                { id: '8dbf7bf4-4f9b-4ac1-aa48-e65145be96f2' }
            ]
        },
        {
            id: '8ab163d1-9662-4d97-b7d7-ef75703b6a38',
            username: 'jazzy@analysisworks.com',
            firstName: '',
            lastName: '',
            roles: [
                { id: '70724c9f-1bb0-4d18-be96-452479a101bd' },
                { id: '0f34fcdf-f1b0-46a5-ba2d-ce8088f9d19f' }
            ]
        },
        {
            id:'290da3e7-214a-4e61-b67a-2a2bda765d13',
            username: 'test@analysisworks.com',
            firstName: '',
            lastName: '',
            roles: [
                { id: '70724c9f-1bb0-4d18-be96-452479a101bd' },
                { id: '0f34fcdf-f1b0-46a5-ba2d-ce8088f9d19f' }
            ]
        }
    ];
    private roles: any = [
        { id: '70724c9f-1bb0-4d18-be96-452479a101bd', name: 'admin' },
        { id: '5160deb7-1cc9-4b72-a1a1-307c77ad9eb9', name: 'impatient' },
        { id: '0f34fcdf-f1b0-46a5-ba2d-ce8088f9d19f', name: 'meta' },
        { id: '8dbf7bf4-4f9b-4ac1-aa48-e65145be96f2', name: 'surgical' }
    ];

    constructor(private http: Http) {

    }

    getUser(userId) {
        return _.filter(this.users, { id: userId })[0];
    }

    getUsers(roleId = undefined) {
        if (!roleId)
          return this.users;            
        else 
            return _.filter(this.users, { roles: [{ id: roleId }] });
    }

    getRoles() {
        return this.roles;
    }

    setUserRole(userId,roleId) {

    }

    deleteUserRole(userId,roleId)
    {

    }
}