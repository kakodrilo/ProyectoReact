import React, { Component } from 'react'

export default class Citas extends Component{
    render() {
        const { cita, autor } = this.props
        return (
            <div className="frase">
                <p className="is-size-6 has-text-centered subtitle has-text-dark">
                <i className="icono fas fa-quote-left"></i>{cita}<i className="icono fas fa-quote-right"></i> 
                </p> 
                <p className="has-text-right">
                    - {autor}
                </p>
            </div>
        )
    }
}