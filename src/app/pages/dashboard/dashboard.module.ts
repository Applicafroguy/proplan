import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
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
    MatCheckboxModule,
    MatInputModule
  ],
  declarations: [DashboardComponent, CardComponent, AddProposalComponent],
  entryComponents: [AddProposalComponent]
})
export class DashboardModule {}
