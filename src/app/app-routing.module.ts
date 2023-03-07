import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PredictPageComponent } from './pages/predict-page/predict-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'predict',
    component: PredictPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
