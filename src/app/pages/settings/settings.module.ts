import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ProfileComponent } from './profile/profile.component';
import { BrandingComponent } from './branding/branding.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SettingsRoutingModule,
    MatButtonModule
  ],
  declarations: [SettingsComponent, ProfileComponent, BrandingComponent]
})
export class SettingsModule {}
