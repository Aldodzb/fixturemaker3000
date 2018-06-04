import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { EquiposService } from '../equipos.service';
import { Equipo } from '../equipoDef';
import { PairComponent } from 'src/app/pair/pair.component';


@Component({
  selector: 'app-display-grupos',
  templateUrl: './display-grupos.component.html',
  styleUrls: ['./display-grupos.component.css']
})
export class DisplayGruposComponent implements OnInit {
  seqTest;
  equipo1;
  flag = false;
  constructor(private equiposService: EquiposService) { }

  ngOnInit() {

  }

  public generate () : any {
    this.seqTest = this.equiposService.generateSequence2();
    this.flag = true;
    if(document.getElementById("pairings") != null){document.getElementById("pairings").style.display = "block";}
  }

}
