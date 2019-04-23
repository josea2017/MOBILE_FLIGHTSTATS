import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'schedule', loadChildren: './schedule/schedule.module#SchedulePageModule' },
  { path: 'weather', loadChildren: './weather/weather.module#WeatherPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'rating', loadChildren: './rating/rating.module#RatingPageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


