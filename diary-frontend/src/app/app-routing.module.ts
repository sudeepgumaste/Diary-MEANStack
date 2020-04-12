import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RedirectAuthenticatedService } from './services/redirect-authenticated.service';


const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate:[RedirectAuthenticatedService] },
  { path: 'login', component: LoginPageComponent, canActivate:[RedirectAuthenticatedService] },
  { path: 'register', component: RegisterPageComponent, canActivate:[RedirectAuthenticatedService] },
  { path: 'posts', component: PostsComponent, canActivate:[AuthGuardService]},
  { path: 'posts/create', component: CreatePostComponent, canActivate:[AuthGuardService]},
  { path: 'posts/edit/:id', component: EditPostComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
