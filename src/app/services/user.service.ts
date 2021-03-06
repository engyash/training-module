﻿import { Injectable } from '@angular/core';
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
    private loginActivities: any = [
        {
            userId: '347e361d-ab5e-4ae0-a040-d6161a06795f',
            activities: [
                { date: '2017-11-20', count: 5 },
                { date: '2017-11-21', count: 2 },
                { date: '2017-11-22', count: 7 },
                { date: '2017-11-23', count: 3 },
                { date: '2017-11-24', count: 2 }
            ]
        },
        {
            userId: '8eaadab0-2be8-4cf2-9f4f-de24041d6fd2',
            activities: [
                { date: '2017-11-20', count: 4 },
                { date: '2017-11-21', count: 4 },
                { date: '2017-11-22', count: 1 },
                { date: '2017-11-23', count: 1 },
                { date: '2017-11-24', count: 9 }
            ] },        
        {
            userId: '8ab163d1-9662-4d97-b7d7-ef75703b6a38',
            activities: [
                { date: '2017-11-20', count: 3 },
                { date: '2017-11-21', count: 2 },
                { date: '2017-11-22', count: 2 },
                { date: '2017-11-23', count: 2 },
                { date: '2017-11-24', count: 5 }
            ] },
        {
            userId: '290da3e7-214a-4e61-b67a-2a2bda765d13',
            activities: [
                { date: '2017-11-20', count: 1 },
                { date: '2017-11-21', count: 4 },
                { date: '2017-11-22', count: 6 },
                { date: '2017-11-23', count: 7 },
                { date: '2017-11-24', count: 3 }
            ] }
    ];


    constructor(private http: Http) {

    }

    // get user by userId
    getUser(userId) {
        return _.filter(this.users, { id: userId })[0];
    }

    // get users by roleId
    getUsers(roleId = undefined) {
        if (!roleId)
          return this.users;            
        else 
            return _.filter(this.users, { roles: [{ id: roleId }] });
    }

    // get roles
    getRoles() {
        return this.roles;
    }

    // set user role
    setUserRole(userId, roleId, hasAccess) {
        
        var user = this.getUser(userId);
        if (hasAccess && _.filter(user.roles, { id: roleId }).length === 0)
            user.roles.push({ id: roleId });
        else if (!hasAccess && _.filter(user.roles, { id: roleId }).length > 0)
            user.roles = _.filter(user.roles, (role) => { return role.id !== roleId });

    }


    // login activity
    getLoginActivity(userId) {
        return _.filter(this.loginActivities, { 'userId': userId })[0].activities;
    }

    
}