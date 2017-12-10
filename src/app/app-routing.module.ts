import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersComponent } from './components/users';

const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch:'full' },
    { path: 'users', component: UsersComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
