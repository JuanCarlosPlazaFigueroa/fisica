import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-caida-libre-component',
  templateUrl: './caida-libre-component.component.html',
  styleUrls: ['./caida-libre-component.component.css']
})
export class CaidaLibreComponentComponent {

  /**
  * FormGroup del  ejercicio 1
  */
  public caidaLibre1Form: FormGroup;

  /**
  * FormGroup del  ejercicio 2
  */
  public caidaLibre2Form: FormGroup;

  /**
  * Almacena la respuesta del ejercicio 2
  */
  public respuestaEjercicio2: String = "";

  /**
  * Almacena la respuesta del ejercicio 1
  */
  public respuestaEjercicio1: String = "";

  constructor(private router: Router) {

    this.caidaLibre1Form = new FormGroup({
      velInicial: new FormControl(null, [Validators.required]),
      velFinal: new FormControl(null, [Validators.required]),
      gravedad: new FormControl(null, [Validators.required])
    });

    this.caidaLibre2Form = new FormGroup({
      velInicial: new FormControl(null, [Validators.required]),
      altura: new FormControl(null, [Validators.required]),
      gravedad: new FormControl(null, [Validators.required])
    });

  }

  /**
   * Metodo que calcula la caida libre del ejercicio 1
   */
  public calcularCaidaLibreEjercicio1() {

    let velocidadFinal = Math.pow(this.caidaLibre1Form.value.velFinal, 2);
    let gravedad = this.caidaLibre1Form.value.gravedad * 2

    let altura = velocidadFinal / gravedad;

    this.respuestaEjercicio1 = "R/ " + altura + " m"

  }

  /**
   * Metodo que calcula la caida libre del ejercicio 2
   */
  public calcularCaidaLibreEjercicio2() {

    let altura = this.caidaLibre2Form.value.altura * 2;
    let tiempoCuadrado = altura / this.caidaLibre2Form.value.gravedad;
    let tiempo = Math.sqrt(tiempoCuadrado);

    this.respuestaEjercicio2 = "R/ " + tiempo.toString() + " Seg";
  }


  /**
   * Metodo que devuelve a la pantalla anterior
   */
  public volverPantallaAnterior() {
    this.router.navigate(['home']);
  }
}
