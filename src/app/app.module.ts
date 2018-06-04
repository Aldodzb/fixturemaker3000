import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddGruposComponent } from './add-grupos/add-grupos.component';
import { ListGruposComponent } from './list-grupos/list-grupos.component';
import { DisplayGruposComponent } from './display-grupos/display-grupos.component';

import { EquiposService } from './equipos.service';
import { PairComponent } from './pair/pair.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGruposComponent,
    ListGruposComponent,
    DisplayGruposComponent,
    PairComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [EquiposService],
  entryComponents: [PairComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
