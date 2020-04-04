import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [{ path: 'feed/:at/:rt', component: FeedComponent }, { path: 'login', component: LoginComponent }, { path: 'register', component: RegisterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
