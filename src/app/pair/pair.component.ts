import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { EquiposService } from 'src/app/equipos.service';

@Component({
  selector: 'app-pair',
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.css']
})
export class PairComponent implements OnInit {
  @Input() Equipos: string[];
  @Input() Fecha: string;
  iterate: number[];
  constructor(private equiposService: EquiposService) { }

  ngOnInit(): void {
  }

}
