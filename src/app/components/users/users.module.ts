import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components
import { UsersComponent } from './';

// services
import { UserService } from './../../services';

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [UserService]
})
export class UsersModule { }
