import { Injectable } from '@angular/core';
import { Equipo } from './equipoDef';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  private equipos: Equipo[] = [];
  private incrementalId = 0;
  constructor() { }

  public addEquipos(nombre: string,  urlBandera: string): any {
    let e : Equipo = {
      id : this.incrementalId,
      nombre : nombre,
      urlBandera : urlBandera
    }
    this.incrementalId++;
    this.equipos.push(e);
  }

  public deleteEquipo(id): boolean {
    console.log("position " + this.getPositionbyid(id));
    console.log("id " + id);
    this.equipos.splice(this.getPositionbyid(id), 1);
    return true;
  }

  public getPositionbyid (id) : any {
    let flag = false;
    let it = 0;
    let size = this.equipos.length;
    
    while (it < size && !flag){
      if (this.equipos[it].id == id){
        flag = true;
        return it;
      }
      it++;
    }
  }

  public getEquipoByPosition (pos) : any {
    return this.equipos[pos];
  }

  public getallEquipos () : any {
    return this.equipos;
  }

  public totalElements () : number {
    return this.equipos.length;
  }
  // Iteración anterior - lo dejo para mostrar el proceso 
  // Iteración: Generación recursiva sin buscar el algoritmo, falla para 10 o más grupos por falta de exhaustividad en la recursión  
  /*public generateSequence() : any {
    let arrayPositions = [];
    let totalEquipos = this.equipos.length;

    // inicialización
    let parejas = totalEquipos/2;
    let niveles = [];
    let refColection = [];
    for (var i = 1; i<=parejas; i++){
      niveles[i] = [];
    }
    for (var i = 1; i<=totalEquipos; i++){
      refColection.push(i);
    }
    console.log("ref col: "+refColection);
    let secuenciaFinal = [];
    for (var i = 0; i < totalEquipos-1; i++){
      let tempColection = refColection.slice();
      secuenciaFinal[i] = [];
      //console.log(tempColection);
      this.generateLevels(tempColection, niveles, 1, totalEquipos/2, secuenciaFinal, i);
    }
    console.log(secuenciaFinal);
    return secuenciaFinal;
  }
  
   
  private generateLevels(tempColection, niveles, nivel, totalNiveles, secuenciaFinal, numeroSecuencia){
    if(nivel <= totalNiveles){
      if (numeroSecuencia == 8) console.log("La coleccion pre pivot: "+tempColection);
      let pivot = tempColection.shift();
      let it = 0;
      let encontrado = false;
      while (it < tempColection.length && !encontrado){
        //let secuenciaParcialOrdenada = this.orderNumbers(secuenciaFinal[numeroSecuencia]+pivot+tempColection[it]);
        let parejaDirectaOrdenada = pivot.toString()+"-"+tempColection[it];
        if (numeroSecuencia == 8) console.log("parejaDirectaOrdenada: "+parejaDirectaOrdenada);
        //console.log("parejaDirectaOrdenada: "+parejaDirectaOrdenada);
        if(/*niveles[nivel][secuenciaParcialOrdenada] == undefined && niveles[1][parejaDirectaOrdenada] == undefined){
          //secuenciaFinal[numeroSecuencia] = secuenciaParcialOrdenada;
          //niveles[nivel][secuenciaParcialOrdenada] = "X";
          niveles[1][parejaDirectaOrdenada] = "x";
          let tempItemBackTrack = tempColection.splice(it,1);
          let ifFails = tempColection[0];
          if (numeroSecuencia == 8) console.log("La coleccion sin el rollback: "+tempColection);
          if(this.generateLevels(tempColection, niveles, nivel+1, totalNiveles, secuenciaFinal, numeroSecuencia)){
            if (numeroSecuencia == 8) console.log("Pivotes: "+pivot);
            encontrado = true;
            let toArray = parejaDirectaOrdenada.split("-");
            secuenciaFinal[numeroSecuencia] = toArray.concat(secuenciaFinal[numeroSecuencia]);
            if (numeroSecuencia == 8) console.log("sec final: "+secuenciaFinal+". nivel: "+nivel);
          } else {
            //console.log("return false");
            delete niveles[1][parejaDirectaOrdenada];
            tempColection.unshift(ifFails);
            tempColection.unshift(tempItemBackTrack);
            if (numeroSecuencia == 8) console.log("Numero intentado: "+ifFails);
            if (numeroSecuencia == 8) console.log("Numero para rollbackear: "+tempItemBackTrack);
            if (numeroSecuencia == 8) console.log("It en la coleccion: "+it);
            if (numeroSecuencia == 8) console.log("La coleccion: "+tempColection);

          }
        } else {
          
          if (numeroSecuencia == 8) {
            console.log("niveles parejas al fallar la cond: "+parejaDirectaOrdenada);
            console.log("Lo que falta recorrer de la coleccción: "+tempColection)
            console.log(niveles[1]);
          }
        }
        it++;
      }

      return encontrado;
      //this.generateLevels(tempColection, niveles, nivel+1, totalNiveles, secuenciaFinal, numeroSecuencia);
    } else {
      if (numeroSecuencia == 8) console.log("Se llegó al final");
      return true;
    }
    
  }*/

  public generateSequence2() : any {
    let arrayPositions = [];
    let totalEquipos = this.equipos.length;
    let totalParejas = totalEquipos/2;
    let secuenciaFinal = [];
    let iterateAuxArray = Array.from(Array(totalEquipos), (e,i)=>i+1);


    // Priorizo claridad/mantenibilidad de código sobre performance
    // Aparte de que son 20 equipos max como requisito funcional, un fixture con decenas de miles de equipos no tiene mucho sentido contemplarlo
    for (let it = 0; it < totalEquipos-1; it++){
      secuenciaFinal[it] = [];

      let iterateAuxArrayAux = iterateAuxArray.slice();
      let firstHalf  = iterateAuxArrayAux.splice(0, totalParejas);
      let secondHalf = iterateAuxArrayAux.reverse();
      let arrayCombined = firstHalf.map(function(v,i) { return [v, secondHalf[i]]; }).reduce(function(a,b) { return a.concat(b); });

      secuenciaFinal[it] = arrayCombined;

      iterateAuxArray.shift();
      iterateAuxArray.unshift(iterateAuxArray.pop());
      iterateAuxArray.unshift(1);

    }
    console.log(secuenciaFinal);
    return secuenciaFinal;
  }
}
