import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: 'Elisangela',
      contador: 0
    }

    this.aumentar = this.aumentar.bind(this)
    this.diminuir = this.diminuir.bind(this)
  }



  aumentar() {
    let state = this.state
    state.contador += 1
    this.setState(state)
  }

  diminuir() {
    let state = this.state
    if(state.contador === 0){
      alert('Ops, já chegou em zero')
      return //Pra parar por aqui
    }

    state.contador -= 1
    this.setState(state)
  }

  render() {
    return (
      <>
        <h1>Contador</h1>
        {this.state.nome}
        <h2>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h2>
      </>
    )
  }
}

export default App