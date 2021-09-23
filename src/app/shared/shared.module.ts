import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialsModule } from './components/materials.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrimengModule } from './components/primeng.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsModule,
    PrimengModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    MaterialsModule,
    PrimengModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
})
export class SharedModule {}
