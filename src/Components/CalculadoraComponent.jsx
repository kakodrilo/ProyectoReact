import React, { Component } from 'react'

const axios = require('axios')

export default class CalculadoraComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            operacion: '',
            expresion: '',
            resultado: '',
            visible: true,
        }
        this.handleChangeOperacion = this.handleChangeOperacion.bind(this)
        this.handleChangeExpresion = this.handleChangeExpresion.bind(this)

        this.handleClick = this.handleClick.bind(this)
    }

    handleChangeOperacion(e) {
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
            this.setState({ resultado:'Ingrese Operación'})
        }
        else if (expresion === '') {
            this.setState({resultado:'Ingrese Expresión'})
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
            console.log(resp.data.result)
            console.log(expresion)
            console.log(operacion)
            console.log(url)
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
                <div className="field">
                <label className="label">Selecciona la operación</label>
                    <div className="control">
                        <div className="select">
                            <select onChange={this.handleChangeOperacion} >
                                <option value=''>Operación</option>
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
                    </div>
                </div>
                
                <div className="field">
                    <label className="label">Escribe la expresión matemática</label>
                    <div className="control has-icons-left">
                    <input value={this.state.expresion} onChange={this.handleChangeExpresion} className="input" type="text" placeholder="Escriba expresión"/>
                        <span className="icon is-small is-left">
                        <i className="fas fa-divide"></i>
                        </span>
                    </div>
                </div>
                <div className="boton-calcular has-text-centered">
                    <button onClick={this.handleClick} className="boton-calcular button is-primary" ><i className="icono fas fa-terminal"></i> Calcular</button>
                </div>
                <div className="field">
                <label className="label">Resultado</label>
                    <div className="notification" style={visible_mask}>
                    {resultado}
                </div>
                </div>
                


            </div>
        )
    }
}