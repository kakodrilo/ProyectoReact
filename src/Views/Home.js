import React, { Component } from 'react'
import Citas from '../Components/Citas'
import '../index.css';
import imagen1 from './AboutImages/imagen_libro2.jpg';


const axios = require('axios')


export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            cita: '',
            autor: '',
        }
        this.loadCitas = this.loadCitas.bind(this)
        this.loadCitas()
    }

    async loadCitas(){
        const resp = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/random/lang/en')
        this.setState({ cita: resp.data.en , autor: resp.data.author })
    }

    cambiar(){
        window.location.href = "/calculadora"
    }
    render() {
        return (
            <div>
               
                <section className="hero is-light">
                        <div className="hero-body has-text-centered ">
                            <div className="container">
                            <h1 className="title has-text-left">
                                Un poco de inspiración...
                            </h1>
                            <h2 className="subtitle has-text-left">
                                Haz click en el botón y descubre nuevas frases.
                            </h2>
                            <Citas cita ={this.state.cita} autor={this.state.autor} />
                            </div>
                            <button onClick={this.loadCitas} className="button is-primary "><i className="icono fas fa-feather-alt"></i>Dame otra frase</button>
                        </div>
                </section>
                <figure className="image">
                    <img src={imagen1} alt="nada"></img>
                </figure>
                
                <div className="columnas columns is-tablet has-text-centered">
                    <div className="column is-two-thirds-desktop is-half-tablet ">
                        <p className="title has-text-centered">
                            Nuestra calculadora
                        </p>
                        <p className="subtitle has-text-centered">Con nuestra calculadora podrás simplificar, factorizar, derivar, integrar y encontrar soluciones.</p>
                        <p className="has-text-centered">Para utilizarla, sólo debes har click en el botón de abajo.</p>
                        <p>
                            <i className="icono-grande fas fa-plus fa-2x"></i>
                            <i className="icono-grande fas fa-less-than-equal fa-2x"></i>
                            <i className="icono-grande fas fa-divide fa-2x"></i>
                            <i className="icono-grande fas fa-times fa-2x"></i>
                        </p>
                        <button onClick={this.cambiar} className="boton button is-danger "><i className="icono fas fa-calculator"></i>Ir a calcular</button>
                    </div>
                    <div className="is-divider-vertical is-desktop" ></div>
                    <div className="column">
                        <p className="title has-text-centered">
                            Cómo funciona
                        </p>
                        <p>
                            Para conocer más sobre <b>newton</b>, la API utilizada para realizar los cálculos de matemáticas avanzadas, haz click en el botón de abajo.
                        </p>
                        <a href="https://github.com/aunyks/newton-api">
                            <button className="boton button is-dark" ><i className="icono fas fa-paper-plane"></i>A por ello</button>
                        </a>                     
                    </div>
                </div>
                

            </div>
        )
    }
}