import React, { Component } from 'react'
import '../index.css';
import imagen from "./AboutImages/imagen-cal2.jpg"
import CalculadoraComponent from '../Components/CalculadoraComponent';

export default class Calculadora extends Component{
    render() {
        return (
            <div>
                <figure className="image imagen-calculadora">
                    <img src={imagen} alt="nada"></img>
                </figure>
                <div className="columns is-tablet">
                    <div className="column"></div>
                    <div className="column is-two-thirds-desktop is-three-quarters-tablet">
                        <div className="box">
                        <p className="title">
                        <i className="icono fas fa-calculator" style={{color:'#00c4a7'}}></i> Calculadora
                        </p>
                        <p>
                            Para calcular, debes seleccionar el tipo de operación que deseas y luego escribir la expresión matemática a la que le aplicarás la operación.
                        </p>
                        <hr></hr>
                        <CalculadoraComponent />
                        </div>
                    </div>
                    <div className="column"></div>
                </div>   
                
            </div>
        )
    }
}