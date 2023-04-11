import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimiento-mua-component',
  templateUrl: './movimiento-mua-component.component.html',
  styleUrls: ['./movimiento-mua-component.component.css']
})
export class MovimientoMuaComponentComponent {


  public movimientoMuaForm: FormGroup;

  public respuestaEjercicioDistancia: String = "";

  public respuestaEjercicioVelocidadFinal: String = "";


  constructor(private router:Router) {

    this.movimientoMuaForm = new FormGroup({
      aceleracion: new FormControl(null,[Validators.required]),
      velInicial: new FormControl(null,[Validators.required]),
      tiempo: new FormControl(null,[Validators.required])
    })
  }

  public calcularEjercicioMovimientoMua(){

    let control = this.movimientoMuaForm.value;

    let velocidadFinal = control.velInicial + (control.aceleracion * control.tiempo)

    let aceleracionTiempo = 0.5 * (control.aceleracion * Math.pow(control.tiempo, 2));

    let distancia = (control.velInicial * control.tiempo) + aceleracionTiempo;

    this.respuestaEjercicioDistancia = "Distancia: "+distancia +" m/seg";
    this.respuestaEjercicioVelocidadFinal = "Velocidad final: "+velocidadFinal +" m/seg";

  }

    /**
   * Metodo que devuelve a la pantalla anterior
   */
    public volverPantallaAnterior() {
      this.router.navigate(['home']);
    }

}
