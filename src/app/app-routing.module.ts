import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { DetailsBlogComponent } from './components/details-blog/details-blog.component';
import { DetailsCommentComponent } from './components/details-comment/details-comment.component';
import { DetailsUserComponent } from './components/details-user/details-user.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { NewUserComponent } from './components/new-user/new-user.component';

const routes: Routes = [
  {path: "admin", component: AdminComponent},
  {path: "admin/blogs/new", component: NewBlogComponent},
  {path: "admin/users/new", component: NewUserComponent},
  {path: "admin/comments/new", component: NewCommentComponent},
  {path: "admin/blogs/update/:id", component: NewBlogComponent},
  {path: "admin/users/update/:id", component: NewUserComponent},
  {path: "admin/comments/update/:id", component: NewCommentComponent},
  {path: "admin/blogs/:id", component: DetailsBlogComponent},
  {path: "admin/users/:id", component: DetailsUserComponent},
  {path: "admin/comments/:id", component: DetailsCommentComponent},
  {path: "admin/:class", component: AdminComponent},
  {path: "", component: BlogsComponent},
  {path: ":id", component: BlogsComponent},
  {path: "**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
