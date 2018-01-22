import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroService} from './hero-detail/hero.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'heroes',
      component: HeroesComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'detail/:id',
      component: HeroDetailComponent
    }, ])

  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
