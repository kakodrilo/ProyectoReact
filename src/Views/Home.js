import React, { Component } from 'react'
import Citas from '../Components/Citas'
const axios = require('axios')

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            cita1: '',
            cita2: '',
            autor1: '',
            autor2: ''
        }
        this.loadCitas = this.loadCitas.bind(this)
        this.loadCitas()
    }

    async loadCitas(){
        const resp1 = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/random/lang/en')
        this.setState({ cita1: resp1.data.en , autor1: resp1.data.author })
        const resp2 = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/random/lang/en')
        this.setState({ cita2: resp2.data.en , autor2: resp2.data.author })
    }

    render() {
        return (
            <div>
                Este es el Home
                <Citas cita={this.state.cita1} autor={this.state.autor1}/>
                otra cita
                <Citas cita={this.state.cita2} autor={this.state.autor2}/>
                
            </div>
        )
    }
}