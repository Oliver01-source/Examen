import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  preguntas: Array<String>=[
    "¿Quien mato a vision?",
    "¿Que le paso a la mama de jojo Rabbit?",
    "¿Como se llama el hijo de batman?",
    "¿En star wars como se apellida Luke?",
    "¿En avengers como se apellida Tony?",
    "¿Que mensaje nos deja la pelicula Soul?",
    "Steve Rogers por que dejo de ser el capitan america",
    "En Coraline, ¿Sobrevive a la bruja que tenia aparencia de su madre?",
  ];

  respuestascorrectas: Array<String>=[
    "Thanos",
    "La mataron los nazis",
    "Damian Wyne",
    "Skywalker",
    "Stark",
    "Vive la vida",
    "Porque se hizo viejo al entregar las gemas del infinito",
    "Si sobrevive, pero en teorias dicen que no",
  ];

  respuestascontestadas: Array<String>=[
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  resultados: String="";
  palomita: String="";

  constructor() { }

  ngOnInit(): void {
  }

  verificar(): void{
    if(confirm("¿Desea terminar y ver la calificacion de su cuestionario?")==true){
      let control:boolean=true;
      for(let i=0; i<=this.respuestascontestadas.length; i++){
        if(this.respuestascontestadas[i]==""){
          control=false;
          break;
        }
      }

      if(control == false){
        window.alert("Aun hay preguntas sin contestar");
     }
     else{
       this.calificar();
      }
    }
  }

  calificar(): void{
    let puntos:number =0;
    for (let i=0; i<this.respuestascorrectas.length; i++){
      if (this.respuestascorrectas[i]==this.respuestascontestadas[i]) {
        puntos++;
      }
      else{

      }
    }
    this.palomita="✔";
    this.resultados= "Su calificación es: "+puntos;
  }
}
