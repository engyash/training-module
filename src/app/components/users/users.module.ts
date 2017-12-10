import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components
import { UsersComponent, UserDetailsComponent } from './';

// services
import { UserService } from './../../services';

@NgModule({
    declarations: [
        UsersComponent,
        UserDetailsComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [UserService]
})
export class UsersModule { }
