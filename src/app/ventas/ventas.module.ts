import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { ColorPipe } from './pipes/color.pipe';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';


@NgModule({
  declarations: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    ColorPipe,
    MayusculasPipe,
    OrdenarPipe,
    VuelaPipe
  ],
  exports:[
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
