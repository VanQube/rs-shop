import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [],
  imports: [
    DropdownModule,
    ButtonModule,
    RouterModule,
    OverlayPanelModule,
    TableModule,
    InputTextModule,
    CheckboxModule,
    PasswordModule,
    RippleModule,
  ],
  exports: [
    DropdownModule,
    ButtonModule,
    RouterModule,
    OverlayPanelModule,
    TableModule,
    InputTextModule,
    CheckboxModule,
    PasswordModule,
    RippleModule,
  ],
})
export class PrimengModule {}
