import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';



@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JogoDaVelhaComponent
  ],
  providers:[
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
