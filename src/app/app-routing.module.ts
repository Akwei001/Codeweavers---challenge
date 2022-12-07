import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'view/:name', component: ViewComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
