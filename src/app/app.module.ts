import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './components/users/users.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    AppRoutingModule,      
    HttpModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
