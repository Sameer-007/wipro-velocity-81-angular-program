import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { StatementComponent } from './statement/statement.component';

@NgModule({
  declarations: [
    EditprofileComponent,
    StatementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EditprofileComponent,
    StatementComponent
  ]

})
export class DashboardModule { }
