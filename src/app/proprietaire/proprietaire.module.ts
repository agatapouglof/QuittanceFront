import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietaireRoutingModule } from './proprietaire-routing.module';
import { ProprietaireComponent } from './proprietaire.component';


@NgModule({
  declarations: [ProprietaireComponent],
  imports: [
    CommonModule,
    ProprietaireRoutingModule
  ]
})
export class ProprietaireModule { }
