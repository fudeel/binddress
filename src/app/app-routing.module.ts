import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadChildren: () => import('./screens/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'detail/:item',
    loadChildren: () => import('./screens/detail/detail.module').then(m => m.DetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
