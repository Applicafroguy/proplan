import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatStepperModule,
  MatInputModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from '../../components/card/card.component';
import { AddProposalComponent } from '../../components/add-proposal/add-proposal.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FlexLayoutModule,
    MatStepperModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [DashboardComponent, CardComponent, AddProposalComponent],
  entryComponents: [AddProposalComponent]
})
export class DashboardModule {}
