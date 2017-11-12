import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthorComponent } from './author/author.component';
import { LayoutComponent } from './layout/layout.component';
import { PostComponent } from './post/post.component';
import { PContentComponent } from './post/p-content/p-content.component';
import { TagComponent } from './tag/tag.component';
import { TaglistComponent } from './tag/taglist/taglist.component';

const PostRoutes: Routes = [
  { path: '', component: PostComponent, pathMatch: 'full' },
  { path: ':id', component: PContentComponent },
  { path: '**', component: PostComponent }
];

const TagRoutes: Routes = [
  { path: '', component: TagComponent, pathMatch: 'full' },
  { path: ':id', component: TaglistComponent },
  { path: '**', component: TagComponent }
];

const LayoutRoutes: Routes = [
  { path: '', component: PostComponent, pathMatch: 'full' },
  { path: 'post', children: PostRoutes },
  { path: 'tag', children: TagRoutes },
  { path: 'author', component: AuthorComponent },
  { path: '**', component: PostComponent }
];

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: LayoutRoutes,
    pathMatch: 'full'
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: LayoutRoutes
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
