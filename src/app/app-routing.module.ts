import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OauthSuccessComponent } from './oauth-success/oauth-success.component';
import { BrowserModule } from '@angular/platform-browser';
import { AccessComponent } from './access/access.component';




const appRoutes: Routes = [  
  { path: 'oauth-success', component: OauthSuccessComponent },
  { path: 'access', component: AccessComponent },
  /* { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent } */
];
@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
