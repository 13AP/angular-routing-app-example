import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { CatComponent } from './cat/cat.component';

//can have multiple routes going to the same component.  constant variable
const routes: Routes = [
  { path: '', component: FooComponent}
  , { path: 'foo', component: FooComponent}
  , { path: 'bar', component: BarComponent}
  , { path: 'cat/:name', component: CatComponent}
];

//tell angular about the routes... within this decorator, we aretelling it to do root routing with the array of routes we provide
@NgModule({
  imports: [
    CommonModule
    , RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
