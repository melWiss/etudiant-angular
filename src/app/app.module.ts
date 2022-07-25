import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogsComponent } from './components/blogs/blogs.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import {MatListModule} from '@angular/material/list';
import { AdminComponent } from './components/admin/admin.component';
import {MatTab, MatTabsModule} from '@angular/material/tabs';
import { AdminBlogsComponent } from './components/admin-blogs/admin-blogs.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminCommentsComponent } from './components/admin-comments/admin-comments.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    BlogsComponent,
    UserAvatarComponent,
    AdminComponent,
    AdminBlogsComponent,
    AdminUsersComponent,
    AdminCommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
