import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfileRoutingModule
  ],
  declarations: [UserProfilePage]
})
export class UserProfilePageModule {}
