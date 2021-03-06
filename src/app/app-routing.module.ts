import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './guard/can-deactivate/can-deactivate-guard';
import { LoginGuard } from './guard/login/login.guard';
import { UserPermissionUpdateGuard } from './guard/user-permissions/user-permission-update.guard';
import { AdminPanelComponent } from './views/main/admin-panel/admin-panel.component';


import { MainComponent } from './views/main/main/main/main.component';
import { LoginComponent } from './views/user/login/login/login.component';
import { PermissionsComponent } from './views/user/permissions/permissions.component';

import { RegisterComponent } from './views/user/register/register/register.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent, canDeactivate: [CanDeactivateGuard]},
  {path: 'register', component: RegisterComponent, canDeactivate: [CanDeactivateGuard]},
  {path: 'admin-panel', component: AdminPanelComponent, canActivate: [LoginGuard]},
  {path: 'permissions', component: PermissionsComponent, canActivate: [LoginGuard, UserPermissionUpdateGuard]},


  {path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)},
  {path: 'books', loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule)},
  {path: 'authors', loadChildren: () => import('./modules/author/author.module').then(m => m.AuthorModule)},
  {path: 'categories', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)},
  {path: 'languages', loadChildren: () => import('./modules/language/language.module').then(m => m.LanguageModule)},
  {path: 'publishers', loadChildren: () => import('./modules/publisher/publisher.module').then(m => m.PublisherModule)},
  
  ];
  

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
