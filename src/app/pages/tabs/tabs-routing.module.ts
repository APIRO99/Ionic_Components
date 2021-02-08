import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('src/app/pages/avatar/avatar.module').then(m => m.AvatarPageModule)
      }, {
        path: 'contact',
        loadChildren: () => import('src/app/pages/search/search.module').then(m => m.SearchPageModule)
      }, {
        path: 'settings',
        loadChildren: () => import('src/app/pages/buttons/buttons.module').then(m => m.ButtonsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
