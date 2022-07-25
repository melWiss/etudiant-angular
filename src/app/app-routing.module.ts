import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { NewUserComponent } from './components/new-user/new-user.component';

const routes: Routes = [
  {path: "admin", component: AdminComponent},
  {path: "admin/blogs/new", component: NewBlogComponent},
  {path: "admin/users/new", component: NewUserComponent},
  {path: "admin/comments/new", component: NewCommentComponent},
  {path: "admin/:class", component: AdminComponent},
  {path: "", component: BlogsComponent},
  {path: ":id", component: BlogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
