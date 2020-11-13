import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProprietaireComponent } from './proprietaire.component';

const routes: Routes = [{ path: '', component: ProprietaireComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietaireRoutingModule { }
