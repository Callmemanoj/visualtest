import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';

const routes: Routes = [
  { path: 'pageone', component: PageoneComponent },
  { path: 'pageone', component: PagetwoComponent },
  { path: 'pageone', component: PagethreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
