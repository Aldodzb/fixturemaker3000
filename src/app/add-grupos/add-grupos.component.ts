import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../equipos.service';
import { Equipo } from '../equipoDef';

@Component({
  selector: 'app-add-grupos',
  templateUrl: './add-grupos.component.html',
  styleUrls: ['./add-grupos.component.css']
})
export class AddGruposComponent implements OnInit {
  inputvar : string;
  constructor(private equiposService: EquiposService) { }

  ngOnInit() {
  }

  includeNewTeam () {
    console.log(this.inputvar)
    if(this.inputvar != "" && this.inputvar != undefined){
      let bandera = document.getElementById("banderaSeleccionada")['src'].split("/assets/")[1].split(".png")[0]+"_b.png";
      let capAux = this.inputvar[0].toUpperCase() + this.inputvar.substr(1, this.inputvar.length-1);
      this.equiposService.addEquipos(capAux,bandera);
      let e = this.equiposService.getallEquipos();
      let numeroEquipos = this.equiposService.totalElements();
      
      // Chequeamos paridad -ADD
      if (numeroEquipos % 2 == 0){
        document.getElementById("generarFixture")['disabled'] = false;
      } else {
        document.getElementById("generarFixture")['disabled'] = true;
      }

      // Chequamos dominio -ADD
      if (numeroEquipos >= 20){
        document.getElementById("agregarGrupoButton")['disabled'] = true;
      } 
      if(document.getElementById("pairings") != null){ document.getElementById("pairings").style.display = "none"; }
        
    } else {
      alert("Ingrese un nombre para el equipo");
    }
  } 

  seleccionarBandera (path) : void {
    document.getElementById("banderaSeleccionada").setAttribute("src", path);
    document.getElementById("agregarGrupoButton")['disabled'] = false;
  }

}
