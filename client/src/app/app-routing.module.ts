import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureListComponent } from './features/features/list/list.component';

const routes: Routes = [{ path: '', component: FeatureListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
