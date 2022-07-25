import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  {path: "admin", component: AdminComponent},
  {path: "admin/:class", component: AdminComponent},
  {path: "", component: BlogsComponent},
  {path: ":id", component: BlogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
