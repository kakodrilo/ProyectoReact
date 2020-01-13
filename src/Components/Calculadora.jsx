import React, { Component } from 'react'

const axios = require('axios')

export default class Calculadora extends Component {

    constructor(props){
        super(props)
        this.state = {
            operacion: '',
            expresion: '',
            resultado: '',
            visible: false,
        }
        this.handleChangeOperation = this.handleChangeOperation.bind(this)
        this.handleChangeExpresion = this.handleChangeExpresion.bind(this)

        this.handleClick = this.handleClick.bind(this)
    }

    handleChangeOperation(e) {
        this.setState({ operacion: e.target.value })
    }

    handleChangeExpresion(e) {
        this.setState({ expresion: e.target.value })
    }

    handleClick() {
        this.setState({ visible: true })
        this.loadResultado()
    }

    async loadResultado(){
        const { operacion , expresion } = this.state
        if (operacion === '') {
            this.setState({ resultado:'Ingrese Operacion'})
        }
        else if (expresion === '') {
            this.setState({resultado:'Ingrese Expresion'})
        }
        else{
            let expresion2 = expresion.replace(/\//g,"(over)")
            const url = 'https://newton.now.sh/'+operacion+'/'+expresion2
            const resp = await axios.get(url)
            if (operacion === 'zeroes') {
                let x = '['+resp.data.result.toString()+']'
                this.setState({ resultado: x})
            }
            else{
                this.setState({ resultado: resp.data.result })
            }
        }
    }
    

    render() {
        const { resultado, visible } = this.state
        let visible_mask = {
            display: 'none'
        }

        if (visible) {
            visible_mask['display'] = 'block'
        }
        return (
            <div>
                <div className="select">
                    <select onChange={this.handleChangeOperation} >
                        <option value=''>Operacion</option>
                        <option value="simplify">Simplificar</option>
                        <option value="factor">Factorizar</option>
                        <option value="derive">Derivar</option>
                        <option value="integrate">Integrar</option>
                        <option value="zeroes">Soluciones</option>
                        <option value="cos">Coseno</option>
                        <option value="sin">Seno</option>
                        <option value="tan">Tangente</option>
                        <option value="arccos">Arcocoseno</option>
                        <option value="arcsin">Arcoseno</option>
                        <option value="arctan">Arcotangente</option>
                        <option value="abs">Valor Absoluto</option>
                    </select>
                </div>
                <div>
                    <input value={this.state.expresion} onChange={this.handleChangeExpresion} className="input" type="text" placeholder="Escriba expresion"/>
                </div>
                <div>
                    <button onClick={this.handleClick} className="button is-primary" >Calcular</button>
                </div>
                <div style={visible_mask}>
                    {resultado}
                </div>


            </div>
        )
    }
}