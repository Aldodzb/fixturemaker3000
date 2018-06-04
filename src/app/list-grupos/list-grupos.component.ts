import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../equipos.service';
import { Equipo } from '../equipoDef';

@Component({
  selector: 'app-list-grupos',
  templateUrl: './list-grupos.component.html',
  styleUrls: ['./list-grupos.component.css']
})
export class ListGruposComponent implements OnInit {
  equipos = this.equiposService.getallEquipos();
  url :string = "";
  constructor(private equiposService: EquiposService) { }
  
  ngOnInit() {

  }

  removeElement (id) : void {
    this.equiposService.deleteEquipo(id);
    // Chequamos dominio -DEL
    let numeroEquipos = this.equiposService.totalElements();
    if (numeroEquipos < 20){
      document.getElementById("agregarGrupoButton")['disabled'] = false;
    } 
    // Chequeamos paridad -DEL
    if (numeroEquipos == 0){ 
      document.getElementById("generarFixture")['disabled'] = true;
    } else if (numeroEquipos % 2 == 0){
      document.getElementById("generarFixture")['disabled'] = false;
    } else {
      document.getElementById("generarFixture")['disabled'] = true;
    }
    if(document.getElementById("pairings") != null) {document.getElementById("pairings").style.display = "none";}
  }

  showCross (e) : void {
    e.srcElement.childNodes[1].style.display = 'inline';
  }

  hideCross (e) : void {
    e.srcElement.childNodes[1].style.display = 'none';
  }

}
