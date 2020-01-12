import React, { Component } from 'react'

export default class Citas extends Component{
    render() {
        const { cita, autor } = this.props
        return (
            <div>
                <p>{cita} <br/> - {autor}</p>
            </div>
        )
    }
}